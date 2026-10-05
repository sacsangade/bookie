import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarVerticle } from './sidebar-verticle';

describe('SidebarVerticle', () => {
  let component: SidebarVerticle;
  let fixture: ComponentFixture<SidebarVerticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarVerticle],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarVerticle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
