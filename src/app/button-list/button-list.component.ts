import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.scss']
})
export class ButtonListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
