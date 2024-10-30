import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'fermentation-pi',
  standalone: true,
  imports: [PanelModule, TagModule],
  templateUrl: './fermentation-pi.component.html',
  styleUrl: './fermentation-pi.component.css'
})
export class FermentationPiComponent {

}
