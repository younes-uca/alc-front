import {Component, OnInit} from '@angular/core';
import {Cours} from '../../controller/model/cours.model';
import {RecommendTeacher} from '../../controller/model/recommend-teacher.model';
import {Prof} from '../../controller/model/prof.model';
import {RecommendTeacherService} from '../../controller/service/recommend-teacher.service';
import {ParcoursService} from '../../controller/service/parcours.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Etudiant} from '../../controller/model/etudiant.model';
import {ClassRoomService} from '../../controller/service/class-room.service';
import {SalaryVo} from '../../controller/model/salary-vo.model';
import {EtudiantService} from '../../controller/service/etudiant.service';
import {LoginService} from '../../controller/service/login.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    lastUpdate = new Date();

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                // tslint:disable-next-line:max-line-length
                private service: ParcoursService,
                private servicerecommend: RecommendTeacherService, private seviceClass: ClassRoomService,
                private serviceetudiant: EtudiantService, public serviceUser: LoginService
    ) {
    }

    get selectedProf(): Prof {
        return this.serviceetudiant.selectedProf;
    }

    set selectedProf(value: Prof) {
        this.serviceetudiant.selectedProf = value;
    }

    get Selectedprof(): Prof {
        return this.servicerecommend.prof;
    }

    set Selectedprof(value: Prof) {
        this.servicerecommend.prof = value;
    }

    get prof(): Prof {
        return this.serviceUser.prof;
    }

    set prof(value: Prof) {
        this.serviceUser.prof = value;
    }

    get items(): Array<Etudiant> {
        return this.serviceetudiant.items;
    }

    set items(value: Array<Etudiant>) {
        this.serviceetudiant.items = value;
    }

    get selectessalaryVo(): Array<SalaryVo> {
        return this.seviceClass.selectessalaryVo;
    }

    set selectessalaryVo(value: Array<SalaryVo>) {
        this.seviceClass.selectessalaryVo = value;
    }

    get selectedsalaryVo(): SalaryVo {
        return this.seviceClass.selectedsalaryVo;
    }

    set selectedsalaryVo(value: SalaryVo) {
        this.seviceClass.selectedsalaryVo = value;
    }

    get itemsprof(): Array<Prof> {
        return this.servicerecommend.itemsprof;
    }

    set itemsprof(value: Array<Prof>) {
        this.servicerecommend.itemsprof = value;
    }

    get selected(): RecommendTeacher {
        return this.servicerecommend.selected;
    }

    set selected(value: RecommendTeacher) {
        this.servicerecommend.selected = value;
    }

    get createDialogEtud(): boolean {
        return this.serviceetudiant.createDialog;
    }

    set createDialogEtud(value: boolean) {
        this.serviceetudiant.createDialog = value;
    }

    get submitted(): boolean {
        return this.serviceetudiant.submitted;
    }

    set submitted(value: boolean) {
        this.serviceetudiant.submitted = value;
    }

    get submittedetudiant(): Etudiant {
        return this.serviceetudiant.submittedetudiant;
    }

    set submittedetudiant(value: Etudiant) {
        this.serviceetudiant.submittedetudiant = value;
    }

    set submittedCours(value: boolean) {
        this.service.submittedCours = value;
    }

    get selectedcours(): Cours {
        return this.service.selectedcours;
    }

    set selectedcours(value: Cours) {
        this.service.selectedcours = value;
    }

    get createDialogCours(): boolean {
        return this.service.createDialogCours;
    }

    set createDialogCours(value: boolean) {
        this.service.createDialogCours = value;
    }

    get itemsetudiant(): Array<Etudiant> {
        return this.servicerecommend.itemsetudiant;
    }

    set itemsetudiant(value: Array<Etudiant>) {
        this.servicerecommend.itemsetudiant = value;
    }

    ngOnInit(): void {
        this.findSalary();
        this.findEtudiant();
    }

    public findEtudiant() {
        this.serviceetudiant.findetudiantProf().subscribe(data => this.items = data);
    }

    public findSalary() {
        this.selectedsalaryVo.prof.id = this.serviceUser.prof.id;
        this.seviceClass.findSalary().subscribe(data => {
            this.selectedsalaryVo = data;
        });
        this.Selectedprof.id = this.serviceUser.prof.id;
        this.serviceetudiant.findetudiantProf().subscribe(data => this.items = data);
    }

    public FindAllProf() {
        console.log(this.selected);
        this.servicerecommend.findAllProf().subscribe(data => this.itemsprof = data);
    }

    public save() {
        this.servicerecommend.save().subscribe(data => {
            console.log(this.selected);
            console.log('meryem');
        });
    }

    public openCreateCours() {
        this.selectedcours = new Cours();
        this.submittedCours = false;
        this.createDialogCours = true;
    }

    public openCreateEtud() {
        this.submittedetudiant = new Etudiant();
        this.submitted = false;
        this.createDialogEtud = true;
    }
}
