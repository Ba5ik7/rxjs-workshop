import { Component } from '@angular/core';
import { SidePanelService } from 'src/app/shared/services/side-panel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private _sidePanelService: SidePanelService) { }

  toggleSidePanel(): void {
    this._sidePanelService.toggleSidePanel();
  }

}
