import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormLayoutDemoComponent} from './view/etudiant/Registration-student/Inscription-student/formlayoutdemo.component';

import {AppMainComponent} from './public/app.main.component';
import {LearnComponent} from './view/admin/learn/learn.component';
import {SectionsComponent} from './view/Prof/learn-teacher/sections/sections.component';
import {CoursesComponent} from './view/Prof/learn-teacher/courses/courses.component';
import {EdCoursesComponent} from './view/Prof/learn-teacher/parcours/ed-courses.component';
import {SalaryComponent} from './view/Prof/salary-teacher/salary/salary.component';
import {HomeComponent} from './view/Prof/home/home.component';
import {InscriptionsComponent} from './view/admin/validate-inscriptions/inscriptions.component';
import {EtudiantsComponent} from './view/Prof/etudiants/etudiants.component';
import {ScheduleComponent} from './view/Prof/schedule/schedule.component';
import {QuizPreviewComponent} from './view/admin/quiz/quiz-preview/quiz-preview.component';
import {ClassRoomListComponent} from './view/Prof/Classes/profclasses/class-room-list/class-room-list.component';
import {FaqAnswerComponent} from './view/admin/faq-admin/faq-answer/faq-answer.component';
import {NewsAdminListComponent} from './view/admin/news-admin/news-admin-list/news-admin-list.component';
import {NewsTeacherListComponent} from './view/Prof/news/news-teacher-list/news-teacher-list.component';
import {FaqListComponent} from './view/Prof/faq/faq-list/faq-list.component';
import {LoginAdminComponent} from './public/login-admin/login-admin.component';
import {LoginProfComponent} from './public/login-prof/login-prof.component';
import {LoginEtudiantComponent} from './public/login-etudiant/login-etudiant.component';
import {SectionSimulateComponent} from './view/Prof/learn-teacher/section-simulate/section-simulate.component';
import {InscriptionAdminComponent} from './view/admin/Registration/inscription-admin/inscription-admin.component';
import {InscriptionProfComponent} from './view/Prof/Registration-prof/inscription-prof/inscription-prof.component';
import {HomeTeacherComponent} from './view/Prof/home-teacher/home-teacher.component';
import {RecommendationComponent} from './view/Prof/recommend/recommendation/recommendation.component';
import {RecommendComponent} from './view/Prof/recommend/recommend.component';
import {QuizCreateComponent} from './view/admin/quiz/quiz-create/quiz-create.component';
import {QuizEtudiantViewComponent} from './view/etudiant/Quiz/quiz-etudiant-view/quiz-etudiant-view.component';
import {SessionCoursComponent} from './view/admin/session-cours/session-cours.component';
import {SyntheseSessionComponent} from './view/Prof/synthese-session/synthese-session.component';
import {ProfesseurListComponent} from './view/admin/professeur/professeur-list/professeur-list.component';
import {EtudiantParcoursComponent} from './view/etudiant/learn-etudiant/etudiant-parcours/etudiant-parcours.component';
import {EtudiantCoursesComponent} from './view/etudiant/learn-etudiant/etudiant-courses/etudiant-courses.component';
import {StudentSimulateSectionComponent} from './view/etudiant/learn-etudiant/student-simulate-section/student-simulate-section.component';
import {RecommendAdminComponent} from './view/admin/recommend-admin/recommend-admin.component';
import {FaqCreateComponent} from './view/admin/faq-admin/faq-create/faq-create.component';
import {FaqStudentListComponent} from './view/etudiant/FAQ-etudiant/faq-student/faq-student-list/faq-student-list.component';
import {FaqAdminListComponent} from './view/admin/faq-admin/faq-admin-list/faq-admin-list.component';
import {FaqContactListComponent} from './view/Prof/faq/faq-contact-list/faq-contact-list.component';
import {FaqStudentContactComponent} from './view/etudiant/FAQ-etudiant/faq-student-contact/faq-student-contact.component';
import {FaqStudentContactListeComponent} from './view/etudiant/FAQ-etudiant/faq-student-contact-liste/faq-student-contact-liste.component';
import {DictionaryCreateComponent} from './view/etudiant/learn-etudiant/Dictionnary/dictionary-create/dictionary-create.component';
import {NewsEtudiantListComponent} from './view/etudiant/news-etudiant/news-etudiant-list/news-etudiant-list.component';
import {PaiementComponent} from './view/admin/paiement/paiement.component';
import {ScheduleAdminComponent} from './view/admin/schedule-admin/schedule-admin.component';
import {ScheduleStudentComponent} from './view/etudiant/schedule-student/schedule-student.component';
import {QuizUpdateComponent} from './view/admin/quiz/quiz-update/quiz-update.component';
import {QuizTakeComponent} from './view/etudiant/Quiz/quiz-take/quiz-take.component';
import {SectionItemComponent} from './view/admin/learn/section-item/section-item.component';
import {ViewQuizEtudiantComponent} from './view/admin/view-quiz-etudiant/view-quiz-etudiant.component';
import {SectionItemPreviewComponent} from './view/admin/learn/section-item-preview/section-item-preview.component';
import {RecommendationTeacherComponent} from './view/Prof/recommendation-teacher/recommendation-teacher.component';
import {DashboardDemoComponent} from './public/landing/dashboarddemo.component';
import {AdminComponent} from './view/admin/admin.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {path:'admin',component: AdminComponent,
                children:[
                    {path: 'pages/parcours', component: LearnComponent},
                ]
            },
            {path: '', component: AppMainComponent,
                children: [
                    {path: '', component: DashboardDemoComponent},
                    {path: 'pages/etudiant', component: EtudiantsComponent},
                    {path: 'pages/DictionaryCreate', component: DictionaryCreateComponent},
                    {path: 'pages/recommendAdmin', component: RecommendAdminComponent},
                    {path: 'pages/session', component: SessionCoursComponent},
                    {path: 'pages/synthese', component: SyntheseSessionComponent},
                    {path: 'view/teacherLists', component: ProfesseurListComponent},
                    {path: 'inscriptionAdmin', component: InscriptionAdminComponent},
                    {path: 'inscriptionTeacher', component: InscriptionProfComponent},
                    {path: 'view/inscription', component: InscriptionsComponent},
                    {path: 'view/recommendation', component: RecommendationComponent},
                    {path: 'view/recommendat', component: RecommendComponent},
                    {path: 'view/home-teacher', component: HomeTeacherComponent},
                    {path: 'pages/home', component: HomeComponent},
                    {path: 'pages/classes', component: ClassRoomListComponent},
                    {path: 'pages/salary', component: SalaryComponent},
                    {path: 'pages/courses', component: EdCoursesComponent},
                    {path: 'pages/etudiantcours', component: EtudiantCoursesComponent},
                    {path: 'pages/etudiantparcours', component: EtudiantParcoursComponent},
                    {path: 'pages/etudiantsimulatesections', component: StudentSimulateSectionComponent},
                    {path: 'pages/cours', component: CoursesComponent},
                    {path: 'pages/sections', component: SectionsComponent},
                    {path: 'pages/sectionsSimulate', component: SectionSimulateComponent},
                    {path: 'pages/faq-admin', component: FaqAnswerComponent},
                    {path: 'pages/faq-create', component: FaqCreateComponent},
                    {path: 'pages/faq-admin-list', component: FaqAdminListComponent},
                    {path: 'pages/news-admin', component: NewsAdminListComponent},
                    {path: 'pages/news-teacher', component: NewsTeacherListComponent},
                    {path: 'pages/news-student', component: NewsEtudiantListComponent},
                    {path: 'pages/faq-teacher', component: FaqListComponent},
                    {path: 'pages/faq-teacher-answer', component: FaqContactListComponent},
                    {path: 'pages/faq-student', component: FaqStudentListComponent},
                    {path: 'pages/faq-student-contact', component: FaqStudentContactComponent},
                    {path: 'pages/faq-student-contact-list', component: FaqStudentContactListeComponent},
                    {path: 'pages/login-admin', component: LoginAdminComponent},
                    {path: 'view/Recommendation-teacher', component: RecommendationTeacherComponent},
                    {path: 'pages/login-prof', component: LoginProfComponent},
                    {path: 'pages/login-etudiant', component: LoginEtudiantComponent},
                    {path: 'pages/quiz-create', component: QuizCreateComponent},
                    {path: 'pages/quiz-update', component: QuizUpdateComponent},
                    {path: 'pages/quiz-take', component: QuizTakeComponent},
                    {path: 'pages/quiz-view', component: QuizEtudiantViewComponent},
                    {path: 'pages/view-quiz-etudiant', component: ViewQuizEtudiantComponent},
                    {path: 'pages/paiement', component: PaiementComponent},
                    {path: 'view/quiz-preview', component: QuizPreviewComponent},
                    {path: 'view/schedule', component: ScheduleComponent},
                    {path: 'pages/schedule', component: ScheduleAdminComponent},
                    {path: 'pages/scheduleStudent', component: ScheduleStudentComponent},
                    {path: 'inscriptionEtudiant', component: FormLayoutDemoComponent},
                    {path: 'pages/create-section-items', component: SectionItemComponent},
                    {path: 'pages/preview-section-items', component: SectionItemPreviewComponent},
                ]
            },

            {path: '**', redirectTo: '/404'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
