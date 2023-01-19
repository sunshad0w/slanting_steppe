import { Component } from '@angular/core';

@Component({
  selector: 'ss-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend-client';
  is404 = false;

  onActivate($event: any) {
    this.is404 = $event.constructor.name === '_404PageComponent';
    console.log(`$event: `, $event);
  }
}
