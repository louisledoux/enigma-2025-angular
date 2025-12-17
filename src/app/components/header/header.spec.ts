import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';
import { ThemeService } from '../../services/theme.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Header,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
        MatMenuModule,
        MatTooltipModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the header title I supplied', () => {
    component.headerTitle = 'Hello';
    fixture.detectChanges();

    // Class
    const titleClass = fixture.componentInstance.headerTitle;
    expect(titleClass).toBe('Hello');
  });

  it('should display a logo of the company', () => {
    component.logoUrl =
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    fixture.detectChanges();

    // DOM
    const logoDOM = fixture.nativeElement.querySelector('.brand-icon');
    expect(logoDOM.src).toBe(
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    );
  });
});
