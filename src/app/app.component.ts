import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonListComponent } from './button-list/button-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
   // CommonModule,
    // BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ButtonListComponent,
  ],
  standalone: true,
})
export class AppComponent {
  title = 'angular-standalone-components-app';
}
