import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { MenuToggle } from '../../../services/menu-toggle';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  faBarsSolid = faBars;
  protected menuToggle = inject(MenuToggle);
}
