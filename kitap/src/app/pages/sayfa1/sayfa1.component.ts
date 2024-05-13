import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-sayfa1',
  standalone: true,
  imports: [RouterLink,FooterComponent],
  templateUrl: './sayfa1.component.html',
  styleUrl: './sayfa1.component.scss'
})
export class Sayfa1Component {

}
