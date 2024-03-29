import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonListComponent } from './button-list/button-list.component';
import { ChipListComponent } from './chip-list/chip-list.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    // CommonModule,
    // BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    ButtonListComponent,
    ChipListComponent,
  ],
  standalone: true,
})
export class AppComponent {
  protected title = 'Angular';

  constructor() {}
}
