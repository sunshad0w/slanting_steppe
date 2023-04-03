import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

@Component({
  selector: 'ss-zoom-image-popup',
  templateUrl: './zoomImagePopup.component.html',
  styleUrls: ['./zoomImagePopup.component.scss'],
})
export class ZoomImagePopupComponent extends SimpleModalComponent<
  { image: string },
  null
> {
  image = '';
  constructor() {
    super();
  }
}
