import { Routes } from '@angular/router';
import { ManagePatientComponent } from './patient/manage-patient/manage-patient.component';
import { PatientRootComponent } from './patient/patient-root/patient-root.component';
import { NotFountPageComponent } from './common/not-fount-page/not-fount-page.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { SearchPatientComponent } from './patient/search-patient/search-patient.component';
import { AppoimentRootComponent } from './appoiment/appoiment-root/appoiment-root.component';
import { AddAppoimentComponent } from './appoiment/add-appoiment/add-appoiment.component';
import { DetailsAppoimentComponent } from './appoiment/details-appoiment/details-appoiment.component';
import { DashboardAppoimentComponent } from './appoiment/dashboard-appoiment/dashboard-appoiment.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

export const routes: Routes = [
  {
    path: 'patients',
    component: PatientRootComponent,
    children: [
      {
        path: '',
        component: ManagePatientComponent,
      },
      {
        path: 'add-patient',
        component: AddPatientComponent,
      },
      {
        path: 'get-patient-details',
        component: SearchPatientComponent,
      },
    ],
  },
  {
    path: '',
    component: UserRegisterComponent,
  },
  {
    path:"login",
    component:UserLoginComponent
  },
  {
    path: 'appointment',
    component: AppoimentRootComponent,
    children: [
      {
        path: 'add-appointment',
        component: AddAppoimentComponent,
      },
      {
        path: 'details-appointment',
        component: DetailsAppoimentComponent,
      },
      {
        path: '',
        component: DashboardAppoimentComponent,
      },
    ],
  },
  {
    path: '**', //Catches unknown routes (404)
    component: NotFountPageComponent,
  },
];
