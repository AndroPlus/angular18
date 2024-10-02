import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LocaltemplateComponent } from './localtemplate/localtemplate.component';
import { SignalTestComponent } from './signal-test/signal-test.component';
import { SignalSubTestComponent } from './signal-test/signal-sub-test/signal-sub-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SignalTestComponent, SignalSubTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular18';
}
