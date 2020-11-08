import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'author',
  template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let author of authors">
            {{ author }}
            </li>
        </ul>
        `,
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  title = "Author List";
  authors;
  constructor(service: AuthorService) {
    this.authors = service.getAuthor();
  }
  getTitle() {
    return this.title;
  }
  ngOnInit(): void {
  }

}
