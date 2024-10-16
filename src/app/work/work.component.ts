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
          { startDate: '2022', endDate: 'today', icon: 'pi pi-briefcase', title: 'Perfood', description: 'Worked as a software engineer at a company.' },
          { startDate: '2017', endDate: '2022', icon: 'pi pi-briefcase', title: 'AUNOVIS GmbH', description: 'Worked as a junior software engineer at a company.' },
          { startDate: '2017', endDate: '2020', icon: 'pi pi-graduation-cap', title: 'Duale Hochschule Baden-Württemberg (DHBW) Karlsruhe', description: 'Bachelor of Science - BS, Informatik' },
        ];
  }
  
  duration(startDate: string, endDate: string): string {
    return `${startDate} - ${endDate}`;
  }
}
