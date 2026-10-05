import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../parts/header/header';
import { Footer } from '../../parts/footer/footer';
import { Sidebar } from '../../parts/sidebar/sidebar';

import { MenuToggle } from '../../../services/menu-toggle';

@Component({
  imports: [RouterOutlet, Header, Footer, Sidebar, NgClass],
  selector: 'app-sidebar-verticle',
  styleUrl: './sidebar-verticle.css',
  templateUrl: './sidebar-verticle.html',
})
export class SidebarVerticle {
   protected menuToggle = inject(MenuToggle);
}
