import { Component, OnDestroy } from '@angular/core';
import { DataBusService } from '../../core/services/data-bus.service';

@Component({
  selector: 'ss-404-page',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.scss'],
})
export class _404PageComponent implements OnDestroy {
  constructor(private DataBusService: DataBusService) {
    this.DataBusService.put('is404', true);
  }

  ngOnDestroy() {
    this.DataBusService.put('is404', false);
  }
}
