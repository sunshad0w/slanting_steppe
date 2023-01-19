import { Route } from '@angular/router';
import { MainPageComponent } from './pages/main/main.component';
import { HistoryPageComponent } from './pages/history/history.component';
import { _404PageComponent } from './pages/404/404.component';
import { NewsPageComponent } from './pages/news/news.component';
import { ConceptPageComponent } from './pages/concept/concept.component';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      { path: '', component: MainPageComponent },
      { path: 'history', component: HistoryPageComponent },
      { path: 'news', component: NewsPageComponent },
      { path: 'concept', component: ConceptPageComponent },
      {
        path: '**',
        component: _404PageComponent,
      },
    ],
  },
];
