import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'greenhouse-manager',
  standalone: true,
  imports: [PanelModule, TagModule],
  templateUrl: './greenhouse-manager.component.html',
  styleUrl: './greenhouse-manager.component.css'
})
export class GreenhouseManagerComponent {

}
