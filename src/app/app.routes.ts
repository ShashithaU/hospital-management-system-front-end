import { Routes } from '@angular/router';
import { ManagePatientComponent } from './patient/manage-patient/manage-patient.component';
import { PatientRootComponent } from './patient/patient-root/patient-root.component';
import { NotFountPageComponent } from './common/not-fount-page/not-fount-page.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { SearchPatientComponent } from './patient/search-patient/search-patient.component';

export const routes: Routes = [
  {
    path: 'patients',
    component: PatientRootComponent,
    children: [
      {
        path: 'manage-all',
        component: ManagePatientComponent,
      },
      {
        path:"add-patient",
        component:AddPatientComponent
      },
      {
        path:"get-patient-details",
        component:SearchPatientComponent
      }
    ],
  },
  {
    path: '**', //Catches unknown routes (404)
    component: NotFountPageComponent,
  }
];
