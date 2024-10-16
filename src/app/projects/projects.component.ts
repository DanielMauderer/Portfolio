import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

interface Project {
  title?: string;
  description?: string;
  image?: string;
  technologies?: string[];
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
      { title: 'Project 1', description: 'This is the first project.', image: 'DSCF1676.JPG', technologies: ['Angular', 'PrimeNG'] },
      { title: 'Project 2', description: 'This is the second project.', image: 'DSCF1836.JPG', technologies: ['rust', 'angular', 'postgres'] },
      { title: 'Project 3', description: 'This is the third project.', image: 'DSCF1994.JPG', technologies: ['C', 'OpenCl'] },
    ];
  }
}
