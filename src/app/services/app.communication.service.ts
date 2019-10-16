import { Injectable, EventEmitter } from '@angular/core';

// the service is injected in the root of the current module
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private id: number;
  // the event emitter that will be used to receive data
  // from sender and will notify to receiver
  notifyValue: EventEmitter<number>;

  constructor() {
    this.id = 0;
    this.notifyValue = new EventEmitter<number>();
  }

  // the method that will be invoked by sender
  // to pass data to service
  // the method will emit an event so that
  // the received data can be notifyed to receiver
  onNotifyValue(id: number): void {
    this.id = id;
    this.notifyValue.emit(id);
  }
}
