import { Routes } from '@angular/router';
import { ManagePatientComponent } from './patient/manage-patient/manage-patient.component';
import { PatientRootComponent } from './patient/patient-root/patient-root.component';
import { NotFountPageComponent } from './common/not-fount-page/not-fount-page.component';

export const routes: Routes = [
  {
    path: 'patient',
    component: PatientRootComponent,
    children: [
      {
        path: '',
        component: ManagePatientComponent,
      },
    ],
  },
  {
    path: '**', //Catches unknown routes (404)
    component: NotFountPageComponent,
  }
];
