import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faPen, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  imports: [FontAwesomeModule, RouterLink],
  selector: 'app-categories',
  styleUrl: './categories.css',
  templateUrl: './categories.html',
})
export class Categories {
  faPlus  = faPlus;
  faPen = faPen;
  faCircleXmark = faCircleXmark;
}
