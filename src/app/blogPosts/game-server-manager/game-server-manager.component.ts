import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-game-server-manager',
  standalone: true,
  imports: [PanelModule, TagModule],
  templateUrl: './game-server-manager.component.html',
  styleUrl: './game-server-manager.component.css'
})
export class GameServerManagerComponent {

}
