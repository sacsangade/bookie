import { Component, inject, OnInit, signal } from '@angular/core';
import { faPlus, faPen, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
//Category Data Service API Call
import { CategoryData } from '../../../../../services/booking/category/category-data';
//Interface Category Call
import { BookingCategoryResponseInterface } from '../../../../../interfaces/booking/category/booking-category-response-interface';

@Component({
  imports: [FontAwesomeModule, RouterLink, CommonModule],
  selector: 'app-categories',
  styleUrl: './categories.css',
  templateUrl: './categories.html',
})

export class Categories implements OnInit {

  private categoryDataService = inject(CategoryData);
  
  faPlus  = faPlus;
  faPen = faPen;
  faCircleXmark = faCircleXmark;
  posts = signal<BookingCategoryResponseInterface[]>([]);

  ngOnInit(): void {
    this.fetchcategories();
  }

  private fetchcategories () {
    this.categoryDataService.getAll().subscribe({
      next: (response) => {
        this.posts.set(response);
      },
    });
  }

  showDeleteAlert(itemId:number) {
    //Sweet Alert
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      iconColor:'#000',
      color: '#000',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: '#000',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryDataService.delete(itemId).subscribe({
          next: () => {
            //Sweet Alert
            Swal.fire ({
              title: 'Deleted!', 
              text: 'Your item has been deleted.', 
              icon: 'success',
              iconColor:'green',
              color: '#000',
              confirmButtonColor: '#000',
            });
            this.fetchcategories();
          },
        });
      }
    });
  }
  
}
