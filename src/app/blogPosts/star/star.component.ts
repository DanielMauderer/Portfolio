import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'star',
  standalone: true,
  imports: [PanelModule, TagModule, DividerModule, HighlightAuto],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
  public code =
`let x = r * sin(phi) * cos(theta)
let y = r * sin(phi) * sin(theta) 
let z = r * cos(phi)
`;
}
