import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './features/customers/candidate/candidate-list/candidate-list.component';
import { EmployerListComponent } from './features/customers/employer/employer-list/employer-list.component';
import { CandidateSignComponent } from './features/sign/candidate-sign/sign.component';
import { PositionListComponent } from './features/position/position-list/position-list.component';
import { PositionAddComponent } from './features/position/position-add/position-add.component';
import { UserLoginComponent } from './features/user-login/user-login.component';
import { HomeComponent } from './features/home/home.component';
import { JobAdvertisementComponent } from './job-advertisement/job-advertisement-add/job-advertisement.component';
import { JobAdvertisementListComponent } from './job-advertisement/job-advertisement-list/job-advertisement-list.component';
import { JobAdvertisementListByEmployerComponent } from './job-advertisement/job-advertisement-listByEmployer/job-advertisement-list-by-employer/job-advertisement-list-by-employer.component';
import { EmployerSignComponent } from './features/sign/employer-sign/employer-sign.component';
import { JobAdvertisementGuard } from './guards/job-advertisement/job-advertisement.guard';
import { CandidateSchoolFormComponent } from './features/customers/candidate/candidate-school/candidate-school-form/candidate-school-form.component';
import { CandidateSkillFromComponent } from './features/customers/candidate/candidate-skill/candidate-skill-from/candidate-skill-from.component';
import { CandidateLanguageFormComponent } from './features/customers/candidate/candidate-language/candidate-language-form/candidate-language-form.component';
import { CandidateJobExperinceFormComponent } from './features/customers/candidate/candidate-jobExperince/candidate-job-experince-form/candidate-job-experince-form.component';
import { CvAddComponent } from './features/cv/cv-add/cv-add.component';

import { ImageAddComponent } from './features/customers/candidate/image/image-add/image-add.component';
import { CvAddGuard } from './guards/cv-add/cv-add.guard';
import { PositionAddGuard } from './guards/position-add/position-add.guard';
import { CandidateWebsiteComponent } from './features/customers/candidate/candidate-website/candidate-website/candidate-website.component';
import { CandidateLinkedinAddComponent } from './features/customers/candidate/candidate-linkedinAcount-add/candidate-linkedin-add/candidate-linkedin-add.component';
import { CandidateCvViewComponent } from './features/customers/candidate/candidate-Cv-view/candidate-cv-view/candidate-cv-view.component';
import { CvViewComponent } from './features/cv/cv-view/cv-view/cv-view.component';
import { UnverifiedJobListComponent } from './job-advertisement/job-advertisement-unverifiedJobList/unverified-job-list/unverified-job-list.component';
import { UnverifiedJobListGuard } from './guards/job-advertisement/unverified-job-list/unverified-job-list.guard';
import { FavoriteComponent } from './features/favorite/favorite.component';
import { SchoolUpdateComponent } from './features/customers/candidate/candidate-school/school-update/school-update.component';
import { SystemEmployeeUpdateComponent } from './features/customers/systemEmployee/systemEmployee-update/system-employee-update/system-employee-update.component';
import { UserPasswordUpdateComponent } from './features/user-password-update/user-password-update.component';
import { EmployerUpdateComponent } from './features/customers/employer/employer-update/employer-update.component';
import { EmployerInfoComponent } from './features/customers/employer/employer-info/employer-info.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { CvUpdateComponent } from './features/cv/cv-update/cv-update/cv-update.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', component: HomeComponent },
   { path: "login", component: UserLoginComponent },
  { path: "candidate-sign", component: CandidateSignComponent },
  { path: "employer-sign", component: EmployerSignComponent },
  { path: "positions-add", component: PositionAddComponent, canActivate: [PositionAddGuard] },
  { path: "list-employers", component: EmployerListComponent, canActivate: [PositionAddGuard] },
  { path: "list-candidates", component: CandidateListComponent },
  { path: "list-positions", component: PositionListComponent },
  { path: "job-advertisement-add", component: JobAdvertisementComponent, canActivate: [JobAdvertisementGuard] },
  { path: "job-advertisement-list", component: JobAdvertisementListComponent },
  { path: "jobAdvertisementList/jobAdvertisements/:employerId", component: JobAdvertisementListByEmployerComponent },
  { path: "cv", component: CvAddComponent, canActivate: [CvAddGuard] },
  { path: "job-advertisement-list/jobAdvertisements/:employerId", component: JobAdvertisementListByEmployerComponent },
  { path: "image", component: ImageAddComponent },
  { path: "language", component: CandidateLanguageFormComponent },
  { path: "jobExperience", component: CandidateJobExperinceFormComponent },
  { path: "skill", component: CandidateSkillFromComponent },
  { path: "school", component: CandidateSchoolFormComponent },
  { path: "github", component: CandidateWebsiteComponent },
  { path: "linkedin", component: CandidateLinkedinAddComponent },
  { path: "list-candidates/cv-view/:candidateId", component: CandidateCvViewComponent },
  { path: "cv-view", component: CvViewComponent },
  { path: "unverifiedJobList", component: UnverifiedJobListComponent, canActivate: [UnverifiedJobListGuard] },
  { path: "favorites", component: FavoriteComponent },
  { path: "school-update", component: SchoolUpdateComponent },
  { path: "system-employee-update", component: SystemEmployeeUpdateComponent },
  { path: "password-update", component: UserPasswordUpdateComponent },
  { path: "employer-update", component: EmployerUpdateComponent },
  { path: "view-employer-info", component: EmployerInfoComponent },
  { path: "abuot-us", component: AboutUsComponent },
  { path: "cv-view/job-advertisement-list", component: JobAdvertisementListComponent },
  { path: "login/password", component: UserPasswordUpdateComponent },
   { path: "updateCV", component: CvUpdateComponent }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
