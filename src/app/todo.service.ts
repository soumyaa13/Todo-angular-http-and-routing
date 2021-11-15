import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todoDetails = [
    {
      Description: 'Check Emails',
      due: '15th November 2021',
      created: '13th November 2021',
    },
    {
      Description: 'Sort the Bookshelf ',
      due: '14th November 2021',
      created: '13th November 2021',
    },
    {
      Description: 'Submit Maths assignment',
      due: '16th November 2021',
      created: '13th November 2021',
    },
    {
      Description: 'Revise for quiz',
      due: '15th November 2021',
      created: '13th November 2021',
    },
    {
      Description: 'Check assignment due dates',
      due: '14th November 2021',
      created: '13th November 2021',
    },
  ];

  getTodo() {
    return this.todoDetails;
  }
  constructor() {}
}
