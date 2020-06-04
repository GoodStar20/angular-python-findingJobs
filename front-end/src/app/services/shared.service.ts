import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  private data = {};

  saveData(option, value) {
    this.data[option] = value;
  }

  getData() {
    return this.data;
  }
}
