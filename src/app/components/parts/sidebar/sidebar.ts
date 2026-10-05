import { Component, inject, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import {Router, isActive, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse, faCalendar, faHeart, faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';



@Component({
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive, NgClass],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  faHouseRegular = faHouse;
  faCalendarRegular = faCalendar;
  faHeartRegular = faHeart;
  faAddressCardRegular = faAddressCard;
  faCaretDownSolid = faCaretDown;
  
  private readonly router = inject(Router);
  
  protected readonly bookingroute1 = isActive('booking/categories', this.router);
  protected readonly bookingroute2 = isActive('booking/add-category', this.router);
  protected readonly bookingroute3 = isActive('booking/edit-category', this.router);
  
  protected readonly isBookingActive = computed(() => this.bookingroute1() || this.bookingroute2() || this.bookingroute3());
  
}
