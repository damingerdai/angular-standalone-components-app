import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class PhotosService {

  constructor(
    @Inject('photoUrl') private photoUrl: string,
    private http: HttpClient
  ) { }

  public getPhotoUrl(i: number): string {
    return `https://picsum.photos/200/300?random=${i}`;
  }
}
