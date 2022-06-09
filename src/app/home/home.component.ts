import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatListModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  protected links = [
    {
      name: 'Button List',
      url: 'button',
    },
    {
      name: 'Chip List',
      url: 'chip',
    },
    {
      name: 'Photo List',
      url: 'photo',
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  to(url: string) {
    this.router.navigateByUrl(url);
  }

}
