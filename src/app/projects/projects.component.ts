import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

interface Project {
  title?: string;
  description?: string;
  image?: string;
  languages?: string[];
  technologies?: string[];
  other?: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardModule, ButtonModule, TagModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[];

  constructor() {
    this.projects = [
      { title: 'GameServerManager', description: 'This is the first project.', image: 'gameserver_overview.jpg', languages: ['C#', 'TypeScript', 'CSS', 'HTML'], technologies: ['Vue', 'ASP.Net'], other: ['Docker', 'gRPC'] },
      { title: 'OpenGreenhouseManager', description: 'This is the second project.', image: 'greenhouse_overview.jpg', languages: ['rust', 'TypeScript', 'CSS', 'HTML'], technologies: ['Angular', 'PrimeNG', 'axum', 'diesel'], other: ['Docker', 'PostgreSQL', 'GitHub Pipelines', 'ESP-32', 'raspberryPi', 'embedded'] },
      { title: 'WildUhr', description: 'This is the third project.', image: 'WildUhr_overview.jpg', languages: ['C++', 'C#', 'TypeScript', 'CSS', 'HTML'], technologies: ['ASP.Net', 'esp-idf'], other: ['PCB design(KiCad)', 'ESP-32', 'CMake', 'embedded']  },
      { title: 'portfolio', description: 'This is the third project.', image: 'portfolio_overview.jpg', languages: ['TypeScript'], technologies: ['Angular', 'PrimeNG'], other: []  },
      { title: 'star', description: 'This is the third project.', image: 'stars_overview.jpeg', languages: ['rust', 'c'], technologies: ['OpenCL'], other: ['OpenCL - GPU', 'SIMD']  },
      { title: 'fermentation-pi ', description: 'This is the third project.', image: 'Schimmelbox_overview.jpg', languages: ['rust', 'TypeScript', 'CSS', 'HTML'], technologies: ['rocket', 'Vue'], other: ['raspberryPi', 'embedded'] },
    ];
  }
}
