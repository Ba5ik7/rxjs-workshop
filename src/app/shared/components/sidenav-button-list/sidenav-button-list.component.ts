import { Component } from '@angular/core';
import { SidePanelService } from '../../services/side-panel.service';

@Component({
  selector: 'app-sidenav-button-list',
  templateUrl: './sidenav-button-list.component.html',
  styleUrls: ['./sidenav-button-list.component.scss']
})
export class SidenavButtonListComponent {

  constructor(private _sidePanelService: SidePanelService) { }

  closeSidePanel(): void {
    this._sidePanelService.closeSidePanel();
  }
}
