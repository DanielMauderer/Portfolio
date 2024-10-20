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
  githubLink?: string;
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
      {
        title: 'GameServerManager',
        description: `A Server manager that allows to automaticly create, update, 
                      backup and manage docker container. Write a bash installation
                      script and set a base docker image the server manager automaticly
                      creates a docker container and makes the terminal accessible throug
                      a website.`,
        image: 'gameserver_overview.jpg',
        languages: ['C#', 'TypeScript', 'HTML/CSS'],
        technologies: ['Vue', 'ASP.Net'],
        other: ['Docker', 'gRPC'],
        githubLink: "https://github.com/GameServerManager"
      },
      {
        title: 'Open Greenhouse Manager',
        description: `A solution to automate a greenhouse with scripting api and sdk to
                      create custom start automation devices. The Basestation is a
                      raspberryPi running an axum webserver with angular as frontend.
                      The Basestation can connect to smart devices over a known REST-API
                      most of the SmartDevices run on ESP-32.`,
        image: 'greenhouse_overview.jpg',
        languages: ['rust', 'TypeScript', 'HTML/CSS'],
        technologies: ['Angular', 'PrimeNG', 'axum', 'diesel'],
        other: ['Docker', 'PostgreSQL', 'GitHub Pipelines', 'ESP-32', 'raspberryPi', 'embedded'],
        githubLink: "https://github.com/OpenGreenhouseManager"
      },
      {
        title: 'WildUhr',
        description: `Embedded from Ground up. Designing the PCB and programming an 
                      ESP32. This device is a watch that stops on shock. It helps hunters
                      determen when wildlife visited the feeding place.`,
        image: 'WildUhr_overview.jpg',
        languages: ['C++'],
        technologies: ['esp-idf'],
        other: ['PCB design(KiCad)', 'ESP-32', 'CMake', 'embedded'],
        githubLink: "https://github.com/WildUhr"
      },
      {
        title: 'portfolio',
        description: `A simple website build with Angular to showcase my resume and projects.`,
        image: 'portfolio_overview.jpg',
        languages: ['TypeScript', 'HTML/CSS'],
        technologies: ['Angular', 'PrimeNG'],
        other: [],
        githubLink: "https://github.com/DanielMauderer/portfolio"
      },
      {
        title: 'star',
        description: `Generating expotential distributed points. Learning some SIMD and 
                      OpenCL for GPU computing.`,
        image: 'stars_overview.jpeg',
        languages: ['rust', 'c'],
        technologies: ['OpenCL'],
        other: ['OpenCL - GPU', 'SIMD'],
        githubLink: "https://github.com/DanielMauderer/star"
      },
      {
        title: 'fermentation-pi ',
        description: `Building a isolated box with temperate and humidity controll to ensure 
                      my koji and sourdough bread can ferment in a controlled envirement.
                      The box is controlled by a raspberryPi running a rocket web server with
                      vue as front-end.`,
        image: 'Schimmelbox_overview.jpg',
        languages: ['rust', 'TypeScript', 'HTML/CSS'],
        technologies: ['rocket', 'Vue'],
        other: ['raspberryPi', 'embedded'],
        githubLink: "https://github.com/DanielMauderer/fermentation-pi"
      },
    ];
  }
}
