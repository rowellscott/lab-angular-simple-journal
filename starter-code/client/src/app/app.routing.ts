import { Routes } from '@angular/router';

import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from 'app/single-entry/single-entry.component';

export const routes: Routes=[
  {path: '', component: EntryListComponent},
  {path: 'entry/:id', component: SingleEntryComponent},
  {path: '**', redirectTo: ''}
]