import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface IHistoryPopup {
  title: string;
  short: string;
  image?: string;
  image_description?: string;
  description: string;
}

@Component({
  selector: 'ss-root',
  templateUrl: './historyPopup.component.html',
  styleUrls: ['./historyPopup.component.scss'],
})
export class HistoryPopupComponent
  extends SimpleModalComponent<IHistoryPopup, null>
  implements IHistoryPopup
{
  title = '';
  short = '';
  image = '';
  image_description = '';
  description = '';
  constructor() {
    super();
  }
}
