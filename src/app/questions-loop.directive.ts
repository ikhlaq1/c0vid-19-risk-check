import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';



export interface QuestionsLoopContext {
  $implicit;
  controller?: {
    next: () => void;
    prev: () => void;
    isLast: () => void;
    isFirst: () => void;
    index: number;
  };
  index: number;
}

@Directive({
  selector: '[appQuestionsLoop]',
})
export class QuestionsLoopDirective implements OnChanges {
  @Input() appQuestionsLoopOf: Object[] = [];
  @Input() appQuestionsLoopForm: FormGroup;

  @Input() appQuestionsLoopSubmit: Function;
  context: QuestionsLoopContext | null = null;
  index = 0;
  pages = [0];

  constructor(
    private tmpl: TemplateRef<QuestionsLoopContext>,
    private vcr: ViewContainerRef
  ) {}

  render(item = 0) {
    this.context = {
      $implicit: this.appQuestionsLoopOf[item],
      controller: {
        next: this.next.bind(this),
        prev: this.prev.bind(this),
        isLast: this.isLast.bind(this),
        isFirst: this.isFirst.bind(this),
        index: item,
      },
      index: item,
    };
    this.vcr.createEmbeddedView(this.tmpl, this.context);
  }

  ngOnChanges(changes) {
    if (
      changes.appQuestionsLoopOf &&
      changes.appQuestionsLoopOf.currentValue &&
      changes.appQuestionsLoopOf.currentValue !==
        changes.appQuestionsLoopOf.previousValue &&
      changes.appQuestionsLoopOf.currentValue.length > 0
    ) {
      this.render();
    }
  }

  next() {
    if (this.isLast()) {
      this.appQuestionsLoopSubmit();
      return;
    }
    
    this.index++;
    if (this.index >= this.appQuestionsLoopOf.length) {
      this.index = 0;
    }
    
    this.pages.push(this.index);
    this.context.$implicit = this.appQuestionsLoopOf[this.index];
    this.context.controller.index = this.index;
    this.context.index = this.index;
  }

  prev() {
    this.pages.pop();
    this.index = this.pages[this.pages.length - 1];

    this.context.$implicit = this.appQuestionsLoopOf[this.index];
    this.context.controller.index = this.index;
    this.context.index = this.index;
  }

  isLast() {
    return (this.index + 1) === this.appQuestionsLoopOf.length;
  }

  isFirst() {
    return this.index === 0;
  }
}
