import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'wilduhr',
  standalone: true,
  imports: [PanelModule, TagModule, DividerModule],
  templateUrl: './wilduhr.component.html',
  styleUrl: './wilduhr.component.css'
})
export class WildUhrComponent {

}
