import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips'

@Component({
  selector: 'app-chip-list',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule
  ],
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss']
})
export class ChipListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
