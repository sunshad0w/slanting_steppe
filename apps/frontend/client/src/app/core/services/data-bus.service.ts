import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataBusService {
  private list: Record<string, BehaviorSubject<any>> = {};

  put(name: string, value: any) {
    if (!this.list[name]) {
      this.list[name] = new BehaviorSubject<any>(value);
    } else {
      this.list[name].next(value);
    }
    return this.list[name];
  }

  take(name: string, defaultValue: any = null) {
    if (!this.list[name]) {
      this.list[name] = new BehaviorSubject<any>(defaultValue);
    }
    return this.list[name];
  }
}
