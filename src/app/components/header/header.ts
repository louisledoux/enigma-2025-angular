import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  cartItemCount = signal(0);
  mobileMenuOpen = signal(false);

  headerTitle: string = 'RotorCraft 2';

  logoUrl: string = '';

  normalConditions(isTrue: boolean) {
    if (isTrue) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

  ternaryConditions(isTrue: boolean) {
    return isTrue === true ? 'Yes' : 'No';
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update((open) => !open);
  }
}
