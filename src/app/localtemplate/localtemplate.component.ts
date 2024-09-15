import { Component } from '@angular/core';

@Component({
  selector: 'app-localtemplate',
  standalone: true,
  imports: [],
  templateUrl: './localtemplate.component.html',
  styleUrl: './localtemplate.component.scss'
})
export class LocaltemplateComponent {

  $user = {
    name: "Ramesh",
    age: 43
  }
}
