import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {GalleriaModule} from 'primeng/galleria';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SkeletonModule} from 'primeng/skeleton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

import {AppComponent} from './app.component';
import {AppMainComponent} from './temporal/app.main.component';

import {AppMenuComponent} from './shared/slide-bar/app.menu.component';
import {AppMenuitemComponent} from './shared/slide-bar/app.menuitem.component';
import {AppTopBarComponent} from './shared/top-bar/app.topbar.component';
import {AppFooterComponent} from './shared/footer/app.footer.component';
import {FormLayoutDemoComponent} from './public/Inscription-student/formlayoutdemo.component';

import {MenuService} from './shared/slide-bar/app.menu.service';

import {ParcoursEditComponent} from './admin/learn/parcours-edit/parcours-edit.component';
import {CoursListComponent} from './admin/learn/cours-list/cours-list.component';
import {CoursEditComponent} from './admin/learn/cours-edit/cours-edit.component';
import {SectionListComponent} from './admin/learn/section-list/section-list.component';
import {SectionViewComponent} from './admin/learn/section-view/section-view.component';
import {SectionEditComponent} from './admin/learn/section-edit/section-edit.component';
import {LearnComponent} from './admin/learn/learn.component';
import {ParcoursListComponent} from './admin/learn/parcours-list/parcours-list.component';
import {ConfirmationService, MessageService} from 'primeng/api';
import {QuizViewComponent} from './prof/Classes/profclasses/quiz-view/quiz-view.component';
import {EtudiantssViewComponent} from './prof/etudiants/etudiantss-view/etudiantss-view.component';
import {ClassRoomListComponent} from './prof/Classes/profclasses/class-room-list/class-room-list.component';
import {HomeComponent} from './prof/home/home.component';
import {ProfclassesComponent} from './prof/Classes/profclasses/profclasses.component';
import {EtudiantttViewComponent} from './prof/Classes/profclasses/etudianttt-view/etudianttt-view.component';
import {EtudiantCreateComponent} from './prof/etudiants/etudiant-create/etudiant-create.component';
import {EtudiantEditComponent} from './prof/etudiants/etudiant-edit/etudiant-edit.component';
import {EtudiantListComponent} from './prof/etudiants/etudiant-list/etudiant-list.component';
import {InscriptionCreateComponent} from './admin/validate-inscriptions/inscription-create/inscription-create.component';
import {InscriptionEditComponent} from './admin/validate-inscriptions/inscription-edit/inscription-edit.component';
import {InscriptionListComponent} from './admin/validate-inscriptions/inscription-list/inscription-list.component';
import {InscriptionViewComponent} from './admin/validate-inscriptions/inscription-view/inscription-view.component';
import {InscriptionsComponent} from './admin/validate-inscriptions/inscriptions.component';
import {CategorieProfViewComponent} from './prof/salary-teacher/categorie-prof-view/categorie-prof-view.component';
import {CoursesComponent} from './prof/learn-teacher/courses/courses.component';
import {EdCoursesComponent} from './prof/learn-teacher/parcours/ed-courses.component';
import {SalaryComponent} from './prof/salary-teacher/salary/salary.component';
import {SafePipe2, SectionsComponent} from './prof/learn-teacher/sections/sections.component';
import {EtudiantsComponent} from './prof/etudiants/etudiants.component';
import {QuizPreviewComponent} from './admin/quiz/quiz-preview/quiz-preview.component';
import {QuizConfigComponent} from './admin/quiz/quiz-config/quiz-config.component';
import {ScheduleComponent} from './prof/schedule/schedule.component';
import {FaqAnswerComponent} from './admin/faq-admin/faq-answer/faq-answer.component';
import {NewsAdminListComponent} from './admin/news-admin/news-admin-list/news-admin-list.component';
import {NewsAdminViewComponent} from './admin/news-admin/news-admin-view/news-admin-view.component';
import {NewsAdminCreateComponent} from './admin/news-admin/news-admin-create/news-admin-create.component';
import {NewsTeacherListComponent} from './prof/news/news-teacher-list/news-teacher-list.component';
import {NewsTeacherViewComponent} from './prof/news/news-teacher-view/news-teacher-view.component';
import {FaqListComponent} from './prof/faq/faq-list/faq-list.component';
import {FaqContactComponent} from './prof/faq/faq-contact/faq-contact.component';
import {LoginEtudiantComponent} from './public/login-etudiant/login-etudiant.component';
import {LoginProfComponent} from './public/login-prof/login-prof.component';
import {LoginAdminComponent} from './public/login-admin/login-admin.component';
import {SafePipe1, SectionSimulateComponent} from './prof/learn-teacher/section-simulate/section-simulate.component';
import {ChooseViewComponent} from './prof/learn-teacher/choose-view/choose-view.component';
import {InscriptionAdminComponent} from './public/inscription-admin/inscription-admin.component';
import {ParcoursCreateComponent} from './admin/learn/parcours-create/parcours-create.component';
import {CoursCreateComponent} from './admin/learn/cours-create/cours-create.component';
import {InscriptionProfComponent} from './public/inscription-prof/inscription-prof.component';
import {HomeTeacherComponent} from './prof/home-teacher/home-teacher.component';
import {TeacherRubComponent} from './prof/home-teacher/teacher-rub/teacher-rub.component';
import {ProfNewsComponent} from './prof/home-teacher/prof-news/prof-news.component';
import {NearestComponent} from './prof/home-teacher/nearest/nearest.component';
import {AjoutEtudiantComponent} from './prof/home-teacher/ajout-etudiant/ajout-etudiant.component';
import {RecommendComponent} from './prof/recommend/recommend.component';
import {RecommendationComponent} from './prof/recommend/recommendation/recommendation.component';
import {RecommendEditComponent} from './prof/recommend/recommend-edit/recommend-edit.component';
import {RecommendListComponent} from './prof/recommend/recommend-list/recommend-list.component';
import {RecommendViewComponent} from './prof/recommend/recommend-view/recommend-view.component';
import {QuizCreateComponent} from './admin/quiz/quiz-create/quiz-create.component';
import {QuizEtudiantViewComponent} from './etudiant/Quiz/quiz-etudiant-view/quiz-etudiant-view.component';
import {SessionCoursEditComponent} from './prof/session-cours/session-cours-edit/session-cours-edit.component';
import {SessionCoursCreateComponent} from './prof/session-cours/session-cours-create/session-cours-create.component';
import {SyntheseSessionComponent} from './prof/synthese-session/synthese-session.component';
import {SessionCoursViewComponent} from './prof/session-cours/session-cours-view/session-cours-view.component';
import {SessionCoursListComponent} from './prof/session-cours/session-cours-list/session-cours-list.component';
import {SessionCoursComponent} from './prof/session-cours/session-cours.component';
import {SyntheseSessionCoursListComponent} from './prof/synthese-session/synthese-session-cours-list/synthese-session-cours-list.component';
import {SyntheseSessionCoursEditComponent} from './prof/synthese-session/synthese-session-cours-edit/synthese-session-cours-edit.component';
import {SyntheseSessionCoursCreateComponent} from './prof/synthese-session/synthese-session-cours-create/synthese-session-cours-create.component';
import {ProfesseurListComponent} from './admin/professeur/professeur-list/professeur-list.component';
import {ProfesseurCreateComponent} from './admin/professeur/professeur-create/professeur-create.component';
import {ProfesseurEditComponent} from './admin/professeur/professeur-edit/professeur-edit.component';
import {ProfesseurViewComponent} from './admin/professeur/professeur-view/professeur-view.component';
import {EtudiantParcoursComponent} from './etudiant/learn-etudiant/etudiant-parcours/etudiant-parcours.component';
import {EtudiantCoursesComponent} from './etudiant/learn-etudiant/etudiant-courses/etudiant-courses.component';
import {
    SafePipe,
    StudentSimulateSectionComponent
} from './etudiant/learn-etudiant/student-simulate-section/student-simulate-section.component';
import {RecommendAdminComponent} from './admin/recommend-admin/recommend-admin.component';
import {FaqCreateComponent} from './admin/faq-admin/faq-create/faq-create.component';
import {FaqStudentListComponent} from './etudiant/FAQ-etudiant/faq-student/faq-student-list/faq-student-list.component';
import {FaqAdminListComponent} from './admin/faq-admin/faq-admin-list/faq-admin-list.component';
import {FaqContactListComponent} from './prof/faq/faq-contact-list/faq-contact-list.component';
import {FaqStudentContactComponent} from './etudiant/FAQ-etudiant/faq-student-contact/faq-student-contact.component';
import {FaqStudentContactListeComponent} from './etudiant/FAQ-etudiant/faq-student-contact-liste/faq-student-contact-liste.component';
import {DictionaryCreateComponent} from './etudiant/learn-etudiant/Dictionnary/dictionary-create/dictionary-create.component';
import {NewsEtudiantListComponent} from './etudiant/news-etudiant/news-etudiant-list/news-etudiant-list.component';
import {NewsEtudiantViewComponent} from './etudiant/news-etudiant/news-etudiant-view/news-etudiant-view.component';
import {NewsAdminEditComponent} from './admin/news-admin/news-admin-edit/news-admin-edit.component';
import {NewsAdminDeleteComponent} from './admin/news-admin/news-admin-delete/news-admin-delete.component';
import {PaiementComponent} from './admin/paiement/paiement.component';
import {PaiementListComponent} from './admin/paiement/paiement-list/paiement-list.component';
import {ScheduleAdminComponent} from './admin/schedule-admin/schedule-admin.component';
import {ScheduleStudentComponent} from './etudiant/schedule-student/schedule-student.component';
import {QuizUpdateComponent} from './admin/quiz/quiz-update/quiz-update.component';
import {SectionItemComponent} from './admin/learn/section-item/section-item.component';
import {SectionCreateComponent} from './admin/learn/section-create/section-create.component';
import {QuizTakeComponent} from './etudiant/Quiz/quiz-take/quiz-take.component';
import {ChatComponent} from './prof/learn-teacher/chat/chat.component';
import {Chat1Component} from './etudiant/learn-etudiant/chat/chat1-component.component';
import {DictionaryEditComponent} from './etudiant/learn-etudiant/Dictionnary/dictionary-edit/dictionary-edit.component';
import {ViewQuizEtudiantComponent} from './admin/view-quiz-etudiant/view-quiz-etudiant.component';
import {SectionItemPreviewComponent} from './admin/learn/section-item-preview/section-item-preview.component';
import {ImageItemComponent} from './admin/learn/section-item-preview/image-item/image-item.component';
import { TranslateComponent } from './etudiant/learn-etudiant/Dictionnary/translate/translate.component';
import { EtudiantReviewViewComponent } from './etudiant/learn-etudiant/etudiant-review-view/etudiant-review-view.component';
// tslint:disable-next-line:max-line-length
import {SyntheseSessionHistoryComponent} from './prof/synthese-session/synthese-session-history/synthese-session-history.component';

import { RecommendationTeacherComponent } from './prof/recommendation-teacher/recommendation-teacher.component';
import { VocabularySectionComponent } from './etudiant/learn-etudiant/vocabulary-section/vocabulary-section.component';
import { VocabularySectionItemComponent } from './etudiant/learn-etudiant/vocabulary-section/vocabulary-section-item/vocabulary-section-item.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {DashboardDemoComponent} from './public/landing/dashboarddemo.component';
import { AdminComponent } from './admin/admin.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ProfComponent } from './prof/prof.component';
import { PublicComponent } from './public/public.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TimelineModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        ScrollingModule
    ],
    declarations: [
        AppComponent,
        DashboardDemoComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        FormLayoutDemoComponent,
        LearnComponent,
        ParcoursListComponent,
        ParcoursEditComponent,
        CoursListComponent,
        CoursEditComponent,
        SectionListComponent,
        SectionViewComponent,
        SectionEditComponent,
        ClassRoomListComponent,
        EtudiantssViewComponent,
        HomeComponent,
        QuizViewComponent,
        EtudiantCreateComponent,
        EtudiantEditComponent,
        EtudiantListComponent,
        InscriptionCreateComponent,
        InscriptionListComponent,
        InscriptionViewComponent,
        CategorieProfViewComponent,
        SectionsComponent,
        CoursesComponent,
        EdCoursesComponent,
        SalaryComponent,
        InscriptionEditComponent,
        EtudiantttViewComponent,
        EtudiantsComponent,
        EtudiantssViewComponent,
        EtudiantCreateComponent,
        EtudiantListComponent,
        EtudiantEditComponent,
        InscriptionsComponent,
        ProfclassesComponent,
        QuizPreviewComponent,
        QuizConfigComponent,
        ScheduleComponent,
        FaqAnswerComponent,
        NewsAdminListComponent,
        NewsAdminViewComponent,
        NewsAdminCreateComponent,
        NewsTeacherListComponent,
        NewsTeacherViewComponent,
        FaqListComponent,
        FaqContactComponent,
        LoginEtudiantComponent,
        LoginProfComponent,
        LoginAdminComponent,
        ChooseViewComponent,
        SectionSimulateComponent,
        ParcoursCreateComponent,
        CoursCreateComponent,
        InscriptionAdminComponent,
        HomeTeacherComponent,
        TeacherRubComponent,
        ProfNewsComponent,
        NearestComponent,
        AjoutEtudiantComponent,
        RecommendComponent,
        RecommendationComponent,
        RecommendEditComponent,
        RecommendListComponent,
        RecommendViewComponent,
        QuizCreateComponent,
        InscriptionProfComponent,
        QuizEtudiantViewComponent,
        SessionCoursEditComponent,
        SessionCoursComponent,
        SessionCoursCreateComponent,
        SessionCoursViewComponent,
        SessionCoursListComponent,
        SyntheseSessionComponent,
        SyntheseSessionCoursCreateComponent,
        SyntheseSessionCoursEditComponent,
        SyntheseSessionCoursListComponent,
        // ProfesseurComponent,
        ProfesseurListComponent,
        ProfesseurCreateComponent,
        ProfesseurEditComponent,
        EtudiantParcoursComponent,
        EtudiantCoursesComponent,
        ProfesseurViewComponent,
        StudentSimulateSectionComponent,
        SyntheseSessionHistoryComponent,
        RecommendAdminComponent,
        FaqCreateComponent,
        FaqStudentListComponent,
        FaqAdminListComponent,
        FaqContactListComponent,
        FaqStudentContactComponent,
        FaqStudentContactListeComponent,
        DictionaryCreateComponent,
        NewsEtudiantListComponent,
        NewsEtudiantViewComponent,
        NewsAdminEditComponent,
        NewsAdminDeleteComponent,
        PaiementComponent,
        PaiementListComponent,
        ScheduleAdminComponent,
        ScheduleStudentComponent,
        QuizUpdateComponent,
        SectionCreateComponent,
        SafePipe,
        SafePipe1,
        SafePipe2,
        ChatComponent,
        Chat1Component,
        SectionCreateComponent,
        QuizTakeComponent,
        SectionItemPreviewComponent,
        ImageItemComponent,
        SectionItemComponent,
        DictionaryEditComponent,
        ViewQuizEtudiantComponent,
        TranslateComponent,
        SyntheseSessionCoursListComponent,
        EtudiantReviewViewComponent,
        RecommendationTeacherComponent,
        VocabularySectionComponent,
        VocabularySectionItemComponent,
        AdminComponent,
        EtudiantComponent,
        ProfComponent,
        PublicComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
         MenuService, MessageService, ConfirmationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

