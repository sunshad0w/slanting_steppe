import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  animate,
  AUTO_STYLE,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'ss-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('collapse', [
      state(
        'false',
        style({
          transform: AUTO_STYLE,
          // opacity: AUTO_STYLE,
          // visibility: AUTO_STYLE,
        })
      ),
      state(
        'true',
        style({
          transform: 'translateX(-100%)',
        })
      ),
      transition('false => true', animate('250ms ease-in')),
      transition('true => false', animate('250ms ease-out')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  collapse = true;
  toggleCollapse(): void {
    this.collapse = !this.collapse;
  }
}
