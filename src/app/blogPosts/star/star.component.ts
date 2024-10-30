import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'star',
  standalone: true,
  imports: [PanelModule, TagModule, DividerModule, Highlight, HighlightLineNumbers],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
  public code = `pub async fn run() ->  {
    let duration = std::time::Instant::now();
    let src = include_str!("generate_x.cl");

    let pro_que = ProQue::builder().src(src).dims(NUM_POINTS).build()?;

    println!("{:?} - Creating a source buffer...", duration.elapsed());

    let mut points:  = vec![0.0; NUM_POINTS * 3];
    fill_points(&pro_que, &mut points, &duration)?;

    Ok(duration.elapsed())
}
    `;
}
