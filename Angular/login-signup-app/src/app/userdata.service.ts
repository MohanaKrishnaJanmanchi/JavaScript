import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private myObject: any;

  setObject(object: any) {
    this.myObject = object;
  }

  getObject(): any {
    return this.myObject;
  }

constructor() { }

}
