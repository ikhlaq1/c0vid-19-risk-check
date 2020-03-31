import { Component } from '@angular/core';

const surveys = [{
  id: 1,
  questions: [
    {
      question: 'How old are you?',
      type: 'text'
    },
    {
    question: 'Please select your Gender?',
    options: [
      {value: 'male', label: 'Male'},
      {value: 'female', label: 'Female'},
      {value: 'other', label: 'Other'},
    ],
    type: 'radio',
  },{
    question: 'Please let us know your current body temperature in degree Fahrenheit (Normal body temperature is 98.6°F):',
    options: [
      {value: 'normal', label: 'Normal (96°F-98.6°F)'},
      {value: 'fever', label: 'Fever (98.6°F-102°F)'},
      {value: 'high-fever', label: 'High Fever > (102°F)'},
    ],
    type: 'radio',
  },
  {
    question: 'Are you experiencing any of the symptoms below (mark all those applicable)',
    options: [
      {value: 'normal', label: 'Normal (96°F-98.6°F)'},
      {value: 'fever', label: 'Fever (98.6°F-102°F)'},
      {value: 'high-fever', label: 'High Fever > (102°F)'},
    ],
    type: 'checkbox',
  },
  {
    question: 'Additionally, please verify if you are experiencing any of the symptoms below (mark all those applicable)',
    options: [
      {value: 'moderate-cough', label: 'Moderate to severe cough'},
      {value: 'fever', label: 'Feeling breathless'},
      {value: 'high-fever', label: 'High Fever > (102°F)'},
    ],
    type: 'checkbox',
  },
  {
    question: 'Please select your travel and exposure details?',
    options: [
      {value: 'male', label: 'No contact with anyone with Symptoms'},
      {value: 'female', label: 'Female'},
      {value: 'other', label: 'Other'},
    ],
    type: 'radio',
  },
  {
    question: 'Do you have a history of any of these conditions (mark all those applicable)',
    options: [
      {value: 'moderate-cough', label: 'Dibetes'},
      {value: 'fever', label: 'Feeling breathless'},
      {value: 'high-fever', label: 'High Fever > (102°F)'},
    ],
    type: 'checkbox',
  },
  {
    question: 'How have your symptoms progressed over the last 48 hrs??',
    options: [
      {value: 'male', label: 'Improved'},
      {value: 'female', label: 'Female'},
      {value: 'other', label: 'Other'},
    ],
    type: 'radio',
  },
    , {
    question: 'What did you learn from this course that you didn\'t know before?',
    options: [
      {value: "angular", label: "Angular"},
      {value: "cli", label: "Angular CLI"},
      {value: "pwa", label: "Progressive Web Apps"},
      {value: "spa", label: "Single Page Application using Anuglar"},
      {value: "ssr", lable: "Server Side Rendering using Angular Universal"},
      {value: "monorepo", label: "Creating Mono Repo App using Nx"}
    ],
    type: 'select',
  }, {
    question: 'Whats your feedback about the course?',
    type: 'text'
  }]
}]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cornavirus-risk';
  seasons: number[] = [2, 1];
  questions = surveys[0].questions;
}
