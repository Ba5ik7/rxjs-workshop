import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidePanelService {

  constructor() { }

  private _sidePanelToggle: Subject<boolean> = new Subject();
  public sidePanelToggle$: Observable<boolean> = this._sidePanelToggle.asObservable();
  public toggleSidePanel(): void {    
    this._isSidePanelOpen = !this._isSidePanelOpen;
    this._sidePanelToggle.next(this.isSidePanelOpen);
  }

  private _sidePanelOpen: Subject<boolean> = new Subject();
  public sidePanelOpen$: Observable<boolean> = this._sidePanelOpen.asObservable();
  public openSidePanel(): void {
    this._isSidePanelOpen = true;
    this._sidePanelOpen.next(this.isSidePanelOpen);
  }

  private _sidePanelClose: Subject<boolean> = new Subject();
  public sidePanelClose$: Observable<boolean> = this._sidePanelClose.asObservable();
  public closeSidePanel(): void {
    this._isSidePanelOpen = false;
    this._sidePanelClose.next(this.isSidePanelOpen);
  }

  private _isSidePanelOpen: boolean = false;
  get isSidePanelOpen(): boolean {
    return this._isSidePanelOpen;
  }
}