import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedService {

  private showHeader = false;
  public setHeader(flag) {
    this.showHeader = flag;
  }

  public getHeader(): boolean {
    return this.showHeader;
  }
}
