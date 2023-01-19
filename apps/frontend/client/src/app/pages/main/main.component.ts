import { AfterViewInit, Component } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'ss-main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainPageComponent implements AfterViewInit {
  images: GalleryItem[] = [];
  galleryId = 'mainGallery';
  hideGallery = false;
  landscape = window.matchMedia('(orientation: landscape)');

  constructor(private gallery: Gallery) {}

  ngAfterViewInit() {
    this.landscape.addEventListener('change', () => {
      this.hideGallery = true;
      setTimeout(() => {
        this.hideGallery = false;
        setTimeout(
          () => this.gallery.ref(this.galleryId).load(this.images),
          400
        );
      }, 100);
    });

    setTimeout(() => {
      const images = [
        '/assets/main/gallery/IMG_01.jpg',
        '/assets/main/gallery/IMG_02.jpg',
        '/assets/main/gallery/IMG_03.jpg',
        '/assets/main/gallery/IMG_04.jpg',
        '/assets/main/gallery/IMG_05.jpg',
        '/assets/main/gallery/IMG_06.jpg',
        '/assets/main/gallery/IMG_07.jpg',
        '/assets/main/gallery/IMG_08.jpg',
        '/assets/main/gallery/IMG_09.jpg',
        '/assets/main/gallery/IMG_10.jpg',
      ];
      this.images = images.map(
        (i) =>
          new ImageItem({
            src: i,
            thumb: i.replace(/\/gallery\//, '/gallery/thumbs/'),
          })
      );
    }, 100);
  }
}
