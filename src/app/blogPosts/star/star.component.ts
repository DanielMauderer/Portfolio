import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'star',
  standalone: true,
  imports: [PanelModule, TagModule, DividerModule, HighlightAuto, Highlight],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
  public coordinateConversion =
`let x = radius * sin(phi) * cos(theta)
let y = radius * sin(phi) * sin(theta) 
let z = radius * cos(phi)
`;
  public simdDefinition =
`let mut polar_x = vec![f32x64::splat(0.); NUM_POINTS / 64];
let mut polar_y = vec![f32x64::splat(0.); NUM_POINTS / 64];
let mut polar_z = vec![f32x64::splat(0.); NUM_POINTS / 64];
`;
  public openClKernel =
`__kernel void generate_points(__global long *seed, __global float *buffer,
                              float lambda_x, float lambda_y) {
  pcg6432_state state;
  pcg6432_seed(&state, seed[get_global_id(0) % NUM_POINTS]);

  float p_radius = exp_x(lambda_x, &state);
  float p_z = exp_y(lambda_y, &state);
  float p_theta = even_z(&state);

  buffer[get_global_id(0) * 3] = p_radius * cos(p_theta);
  buffer[get_global_id(0) * 3 + 1] = p_radius * sin(p_theta);
  buffer[get_global_id(0) * 3 + 2] = p_z;
}
`;
  
}
