import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,MatBadgeModule, MatIconModule, MatBadgeModule,MatButtonModule],
  templateUrl: './header.component.html',
  styles: ''
})
export class HeaderComponent {

}
