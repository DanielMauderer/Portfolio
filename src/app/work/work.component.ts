import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

interface WorkItem {
    startDate?: string;
    endDate?: string;
  icon?: string;
  title?: string;
  description?: string;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [TimelineModule, CardModule, ButtonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
    workPlaces: WorkItem[];

  constructor() {
        this.workPlaces = [
          {
            startDate: `2022`, endDate: `today`, icon: `pi pi-briefcase`, title: `Perfood`, description:
`When I started at Perfood worked as a fullstack developer. I developed mobile apps and maintained backend services.

At the moment I also develop an essential intern tool with the Django framework in python. My tasks include maintaining the CI/CD pipelines and managing releases.` },
          {
            startDate: `2017`, endDate: `2022`, icon: `pi pi-briefcase`, title: `AUNOVIS GmbH`, description:
`During my studies I had a look in all departments. I gather experience in many different languages and technologies. The main focus was C#, C++, Typescript/JavaScript and HTML/CSS.

After my studies I first worked as a C++ developer and later switched project to work as a full stack developer. Additionally I automated release processes and created a CI/CD pipeline in Jenkins.`},
          { startDate: `2017`, endDate: `2020`, icon: `pi pi-graduation-cap`, title: `Duale Hochschule Baden-Württemberg (DHBW) Karlsruhe`, description: `Bachelor of Science - BS, Informatik` },
        ];
  }
  
  duration(startDate: string, endDate: string): string {
    return `${startDate} - ${endDate}`;
  }
}
