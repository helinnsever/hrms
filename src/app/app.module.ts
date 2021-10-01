import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateSignComponent } from './features/sign/candidate-sign/sign.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployerSignComponent } from './features/sign/employer-sign/employer-sign.component';
import { NaviEmployerInfoComponent } from './features/navi/navi-employer-info/navi-employer-info.component';
import { NaviSignComponent } from './features/navi/navi-sign/navi-sign.component';
import { FooterComponent } from './features/footer/footer.component';
import { EmployerListComponent } from './features/customers/employer/employer-list/employer-list.component';
import { CandidateListComponent } from './features/customers/candidate/candidate-list/candidate-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NaviSystemEmployeeInfoComponent } from './features/navi/navi-system-employee-info/navi-system-employee-info.component';
import { PositionAddComponent } from './features/position/position-add/position-add.component';
import { PositionListComponent } from './features/position/position-list/position-list.component';
import { NaviCandidateInfoComponent } from './features/navi/navi-candidate-info/navi-candidate-info.component';
import { NaviComponent } from './features/navi/navi/navi.component';
import { UserLoginComponent } from './features/user-login/user-login.component';
import { HomeComponent } from './features/home/home.component';
import { JobAdvertisementComponent } from './job-advertisement/job-advertisement-add/job-advertisement.component';
import { JobAdvertisementListComponent } from './job-advertisement/job-advertisement-list/job-advertisement-list.component';
import { JobAdvertisementListByEmployerComponent } from './job-advertisement/job-advertisement-listByEmployer/job-advertisement-list-by-employer/job-advertisement-list-by-employer.component';
import { AccordionModule } from 'primeng/accordion';
import { CvAddComponent } from './features/cv/cv-add/cv-add.component';
import { CandidateSchoolFormComponent } from './features/customers/candidate/candidate-school/candidate-school-form/candidate-school-form.component';
import { CandidateSkillFromComponent } from './features/customers/candidate/candidate-skill/candidate-skill-from/candidate-skill-from.component';
import { CandidateLanguageFormComponent } from './features/customers/candidate/candidate-language/candidate-language-form/candidate-language-form.component';
import { CandidateJobExperinceFormComponent } from './features/customers/candidate/candidate-jobExperince/candidate-job-experince-form/candidate-job-experince-form.component';
import { ImageAddComponent } from './features/customers/candidate/image/image-add/image-add.component';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { CandidateWebsiteComponent } from './features/customers/candidate/candidate-website/candidate-website/candidate-website.component';
import { CandidateLinkedinAddComponent } from './features/customers/candidate/candidate-linkedinAcount-add/candidate-linkedin-add/candidate-linkedin-add.component';
import { CandidateCvViewComponent } from './features/customers/candidate/candidate-Cv-view/candidate-cv-view/candidate-cv-view.component';
import { CvViewComponent } from './features/cv/cv-view/cv-view/cv-view.component';
import { CvUpdateComponent } from './features/cv/cv-update/cv-update/cv-update.component';
import { UnverifiedJobListComponent } from './job-advertisement/job-advertisement-unverifiedJobList/unverified-job-list/unverified-job-list.component';
import { TableModule } from 'primeng/table';
import { FavoriteComponent } from './features/favorite/favorite.component';
import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from './store/reducers/favorite-reducer';
import { GithubViewComponent } from './features/customers/candidate/candidate-website/github-view/github-view.component';
import { SkillViewComponent } from './features/customers/candidate/candidate-skill/skill-view/skill-view.component';
import { SchoolViewComponent } from './features/customers/candidate/candidate-school/school-view/school-view.component';
import { LinkedinViewComponent } from './features/customers/candidate/candidate-linkedinAcount-add/linkedin-view/linkedin-view.component';
import { LanguageViewComponent } from './features/customers/candidate/candidate-language/language-view/language-view.component';
import { JobExperienceViewComponent } from './features/customers/candidate/candidate-jobExperince/job-experience-view/job-experience-view.component';
import { SchoolUpdateComponent } from './features/customers/candidate/candidate-school/school-update/school-update.component';
import { SystemEmployeeUpdateComponent } from './features/customers/systemEmployee/systemEmployee-update/system-employee-update/system-employee-update.component';
import { UserPasswordUpdateComponent } from './features/user-password-update/user-password-update.component';
import { EmployerUpdateComponent } from './features/customers/employer/employer-update/employer-update.component';
import { EmployerInfoComponent } from './features/customers/employer/employer-info/employer-info.component';
import { SidebarComponent } from './features/sidebar/sidebar/sidebar.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { CardModule } from 'primeng/card';
import { CvInfoComponent } from './features/cv/cv-view/cv-info/cv-info.component';
import { CandidateSidebarInfoComponent } from './features/sidebar/candidate-sidebar-info/candidate-sidebar-info.component';
import { EmployerSidebarInfoComponent } from './features/sidebar/employer-sidebar-info/employer-sidebar-info.component';
import { SystemEmployeeSidebarInfoComponent } from './features/sidebar/systemEmployee-sidebar-info/system-employee-sidebar-info.component';
  
  @NgModule({
 
  declarations: [
    AppComponent,
    NaviComponent,
    CandidateSignComponent,
    EmployerSignComponent,
    NaviEmployerInfoComponent,
    NaviSignComponent,
    FooterComponent,
    PositionAddComponent,
    EmployerListComponent,
    CandidateListComponent,
    PositionListComponent,
    NaviSystemEmployeeInfoComponent,
    NaviCandidateInfoComponent,
    UserLoginComponent,
    HomeComponent,
    JobAdvertisementComponent,
    JobAdvertisementListComponent,
    JobAdvertisementListByEmployerComponent,
    CvAddComponent,
    CandidateSchoolFormComponent,
    CandidateSkillFromComponent,
    CandidateLanguageFormComponent,
    CandidateJobExperinceFormComponent,
    ImageAddComponent,
    FilterPipe,
    CandidateWebsiteComponent,
    CandidateLinkedinAddComponent,
    CandidateCvViewComponent,
    CvViewComponent,
    CvUpdateComponent,
    UnverifiedJobListComponent,
    FavoriteComponent,
    GithubViewComponent,
    SkillViewComponent,
    SchoolViewComponent,
    LinkedinViewComponent,
    LanguageViewComponent,
    JobExperienceViewComponent,
    SchoolUpdateComponent,
    SystemEmployeeUpdateComponent,
    UserPasswordUpdateComponent,
    EmployerUpdateComponent,
    EmployerInfoComponent,
    SidebarComponent,
    CandidateSidebarInfoComponent,
    EmployerSidebarInfoComponent,
    SystemEmployeeSidebarInfoComponent,
    AboutUsComponent,
    CvInfoComponent,
    




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot({ positionClass: "toast-bottom-right" }),
    AccordionModule,
    ToolbarModule,
    PanelMenuModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    CardModule,
    FormsModule, 
   

      StoreModule.forRoot(
      { favoriteReducer },
      {
        runtimeChecks: {
          strictStateImmutability: false,
        },
      }
    ),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
