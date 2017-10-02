import { Routes } from '@angular/router';

import {ThreadComponent} from './thread/thread.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {IsLoggedInService} from './services/is-logged-in.canactivate.service';
import {NewThreadComponent} from './new-thread/new-thread.component';

export const routes: Routes = [
    { path: '', component: ThreadComponent },
    { path: 'user',
      component: UserprofileComponent,
      canActivate: [ IsLoggedInService ]  },
    { path: 'login',
      component: LoginformComponent,
    },
    { path: 'threads/new',
      component: NewThreadComponent,
    },
    { path: '**', redirectTo: '' }
];
