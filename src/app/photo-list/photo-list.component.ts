import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'
import { PhotosService } from '../services/photos.service';
import { forkJoin, map, of } from 'rxjs';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule
  ],
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  public photos: string[];

  constructor(
    private photoService: PhotosService,
  ) {
    this.photos = [];
  }

  ngOnInit(): void {
    forkJoin([1, 2, 3, 4].map(i => of(i).pipe(map(n => this.photoService.getPhotoUrl(n)))))
      .subscribe(photos => this.photos = photos)

  }

}
