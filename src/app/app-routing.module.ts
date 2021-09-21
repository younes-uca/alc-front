import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormLayoutDemoComponent} from './public/Inscription-student/formlayoutdemo.component';

import {AppMainComponent} from './temporal/app.main.component';
import {LearnComponent} from './admin/learn/learn.component';
import {SectionsComponent} from './prof/learn-teacher/sections/sections.component';
import {CoursesComponent} from './prof/learn-teacher/courses/courses.component';
import {EdCoursesComponent} from './prof/learn-teacher/parcours/ed-courses.component';
import {SalaryComponent} from './prof/salary-teacher/salary/salary.component';
import {HomeComponent} from './prof/home/home.component';
import {InscriptionsComponent} from './admin/validate-inscriptions/inscriptions.component';
import {EtudiantsComponent} from './prof/etudiants/etudiants.component';
import {ScheduleComponent} from './prof/schedule/schedule.component';
import {QuizPreviewComponent} from './admin/quiz/quiz-preview/quiz-preview.component';
import {ClassRoomListComponent} from './prof/Classes/profclasses/class-room-list/class-room-list.component';
import {FaqAnswerComponent} from './admin/faq-admin/faq-answer/faq-answer.component';
import {NewsAdminListComponent} from './admin/news-admin/news-admin-list/news-admin-list.component';
import {NewsTeacherListComponent} from './prof/news/news-teacher-list/news-teacher-list.component';
import {FaqListComponent} from './prof/faq/faq-list/faq-list.component';
import {LoginAdminComponent} from './public/login-admin/login-admin.component';
import {LoginProfComponent} from './public/login-prof/login-prof.component';
import {LoginEtudiantComponent} from './public/login-etudiant/login-etudiant.component';
import {SectionSimulateComponent} from './prof/learn-teacher/section-simulate/section-simulate.component';
import {InscriptionAdminComponent} from './public/inscription-admin/inscription-admin.component';
import {InscriptionProfComponent} from './public/inscription-prof/inscription-prof.component';
import {HomeTeacherComponent} from './prof/home-teacher/home-teacher.component';
import {RecommendationComponent} from './prof/recommend/recommendation/recommendation.component';
import {RecommendComponent} from './prof/recommend/recommend.component';
import {QuizCreateComponent} from './admin/quiz/quiz-create/quiz-create.component';
import {QuizEtudiantViewComponent} from './etudiant/Quiz/quiz-etudiant-view/quiz-etudiant-view.component';
import {SessionCoursComponent} from './prof/session-cours/session-cours.component';
import {SyntheseSessionComponent} from './prof/synthese-session/synthese-session.component';
import {ProfesseurListComponent} from './admin/professeur/professeur-list/professeur-list.component';
import {EtudiantParcoursComponent} from './etudiant/learn-etudiant/etudiant-parcours/etudiant-parcours.component';
import {EtudiantCoursesComponent} from './etudiant/learn-etudiant/etudiant-courses/etudiant-courses.component';
import {StudentSimulateSectionComponent} from './etudiant/learn-etudiant/student-simulate-section/student-simulate-section.component';
import {RecommendAdminComponent} from './admin/recommend-admin/recommend-admin.component';
import {FaqCreateComponent} from './admin/faq-admin/faq-create/faq-create.component';
import {FaqStudentListComponent} from './etudiant/FAQ-etudiant/faq-student/faq-student-list/faq-student-list.component';
import {FaqAdminListComponent} from './admin/faq-admin/faq-admin-list/faq-admin-list.component';
import {FaqContactListComponent} from './prof/faq/faq-contact-list/faq-contact-list.component';
import {FaqStudentContactComponent} from './etudiant/FAQ-etudiant/faq-student-contact/faq-student-contact.component';
import {FaqStudentContactListeComponent} from './etudiant/FAQ-etudiant/faq-student-contact-liste/faq-student-contact-liste.component';
import {DictionaryCreateComponent} from './etudiant/learn-etudiant/Dictionnary/dictionary-create/dictionary-create.component';
import {NewsEtudiantListComponent} from './etudiant/news-etudiant/news-etudiant-list/news-etudiant-list.component';
import {PaiementComponent} from './admin/paiement/paiement.component';
import {ScheduleAdminComponent} from './admin/schedule-admin/schedule-admin.component';
import {ScheduleStudentComponent} from './etudiant/schedule-student/schedule-student.component';
import {QuizUpdateComponent} from './admin/quiz/quiz-update/quiz-update.component';
import {QuizTakeComponent} from './etudiant/Quiz/quiz-take/quiz-take.component';
import {SectionItemComponent} from './admin/learn/section-item/section-item.component';
import {ViewQuizEtudiantComponent} from './admin/view-quiz-etudiant/view-quiz-etudiant.component';
import {SectionItemPreviewComponent} from './admin/learn/section-item-preview/section-item-preview.component';
import {RecommendationTeacherComponent} from './prof/recommendation-teacher/recommendation-teacher.component';
import {DashboardDemoComponent} from './public/landing/dashboarddemo.component';
import {AdminComponent} from './admin/admin.component';
import {PublicComponent} from './public/public.component';
import {ProfComponent} from './prof/prof.component';
import {EtudiantComponent} from './etudiant/etudiant.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {path:'admin',component: AdminComponent,
                children:[
                    {path: 'parcours', component: LearnComponent},
                    {path: 'create-section-items', component: SectionItemComponent},
                    {path: 'preview-section-items', component: SectionItemPreviewComponent},
                    {path: 'quiz-preview', component: QuizPreviewComponent},
                    {path: 'quiz-create', component: QuizCreateComponent},
                    {path: 'quiz-update', component: QuizUpdateComponent},
                    {path: 'view-quiz-etudiant', component: ViewQuizEtudiantComponent},
                    {path: 'inscription', component: InscriptionsComponent},
                    {path: 'teacher-lists', component: ProfesseurListComponent},
                    {path: 'recommend-admin', component: RecommendAdminComponent},
                    {path: 'paiement', component: PaiementComponent},
                    {path: 'faq-admin', component: FaqAnswerComponent},
                    {path: 'faq-admin-list', component: FaqAdminListComponent},
                    {path: 'news-admin', component: NewsAdminListComponent},
                    {path: 'schedule', component: ScheduleAdminComponent},
                    {path: 'faq-create', component: FaqCreateComponent},
                ]
            },
            {path:'prof',component: ProfComponent,
                children:[
                    {path: 'home', component: HomeComponent},
                    {path: 'courses', component: EdCoursesComponent},
                    {path: 'recommendation-teacher', component: RecommendationTeacherComponent},
                    {path: 'salary', component: SalaryComponent},
                    {path: 'classes', component: ClassRoomListComponent},
                    {path: 'synthese', component: SyntheseSessionComponent},
                    {path: 'schedule', component: ScheduleComponent},
                    {path: 'news-teacher', component: NewsTeacherListComponent},
                    {path: 'faq-teacher', component: FaqListComponent},
                    {path: 'faq-teacher-answer', component: FaqContactListComponent},
                    {path: 'sections-simulate', component: SectionSimulateComponent},
                    {path: 'sections', component: SectionsComponent},
                    {path: 'cours', component: CoursesComponent},
                ]
            },
            {path:'etudiant',component: EtudiantComponent,
                children:[
                    {path: 'etudiant-parcours', component: EtudiantParcoursComponent},
                    {path: 'faq-student', component: FaqStudentListComponent},
                    {path: 'news-student', component: NewsEtudiantListComponent},
                    {path: 'schedule-student', component: ScheduleStudentComponent},
                    {path: 'etudiant-simulate-sections', component: StudentSimulateSectionComponent},
                    {path: 'faq-student-contact-list', component: FaqStudentContactListeComponent},
                    {path: 'etudiant-cours', component: EtudiantCoursesComponent},
                    {path: 'quiz-view', component: QuizEtudiantViewComponent},
                    {path: 'quiz-take', component: QuizTakeComponent},


                ]
            },
            {path:'',component: PublicComponent,
                children:[
                    {path: '', component: DashboardDemoComponent},
                    {path: 'public/login-admin', component: LoginAdminComponent},
                    {path: 'public/login-prof', component: LoginProfComponent},
                    {path: 'public/login-etudiant', component: LoginEtudiantComponent},
                    {path: 'public/inscriptionAdmin', component: InscriptionAdminComponent},
                    {path: 'public/inscriptionTeacher', component: InscriptionProfComponent},
                    {path: 'public/inscriptionEtudiant', component: FormLayoutDemoComponent},
                ]
            },

            {path: '**', redirectTo: '/404'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
