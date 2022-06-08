import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.scss']
})
export class ButtonListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
