import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { GameServerManagerComponent } from './blogPosts/game-server-manager/game-server-manager.component';
import { GreenhouseManagerComponent } from './blogPosts/greenhouse-manager/greenhouse-manager.component';
import { WildUhrComponent } from './blogPosts/wilduhr/wilduhr.component';
import { PortfolioComponent } from './blogPosts/portfolio/portfolio.component';
import { StarComponent } from './blogPosts/star/star.component';
import { FermentationPiComponent } from './blogPosts/fermentation-pi/fermentation-pi.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'work', component: WorkComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'GameServerManager', component: GameServerManagerComponent },
    { path: 'GreenhouseManager', component: GreenhouseManagerComponent },
    { path: 'WildUhr', component: WildUhrComponent },
    { path: 'Portfolio', component: PortfolioComponent },
    { path: 'star', component: StarComponent },
    { path: 'FermentationPi', component: FermentationPiComponent },
    { path: 'contact', component: ContactComponent },
];
