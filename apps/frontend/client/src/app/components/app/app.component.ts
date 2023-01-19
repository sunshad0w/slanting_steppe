import { Component } from '@angular/core';
import { DataBusService } from '../../core/services/data-bus.service';

@Component({
  selector: 'ss-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend-client';
  is404 = false;

  constructor(private DataBusService: DataBusService) {
    this.DataBusService.take('is404', false).subscribe((is404) => {
      this.is404 = is404;
    });
  }
}
