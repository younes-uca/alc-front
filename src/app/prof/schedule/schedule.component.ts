import {Component, OnInit, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {FullCalendar} from 'primeng/fullcalendar';
import {ScheduleService} from '../../controller/service/schedule.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Etudiant} from '../../controller/model/etudiant.model';
import {EtatEtudiantSchedule} from '../../controller/model/etat-etudiant-schedule.model';
import {CalendrierProf} from '../../controller/model/schedule-prof.model';
import {CalendrierVo} from '../../controller/model/calendrier-vo.model';
import {LoginService} from '../../controller/service/login.service';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss'],
    providers: [MessageService, ConfirmationService]

})
export class ScheduleComponent implements OnInit {
    @ViewChild('fm') calendar: FullCalendar;

    constructor(private service: ScheduleService, private messageService: MessageService, private confirmationService: ConfirmationService, private user: LoginService) {
    }

    get selectedVo(): CalendrierVo {
        return this.service.selectedVo;
    }

    set selectedVo(value: CalendrierVo) {
        this.service.selectedVo = value;
    }

    get itemsVo(): Array<CalendrierVo> {
        return this.service.itemsVo;
    }

    set itemsVo(value: Array<CalendrierVo>) {
        this.service.itemsVo = value;
    }

    get selected(): CalendrierProf {
        return this.service.selected;
    }

    set selected(value: CalendrierProf) {
        this.service.selected = value;
    }

    get items(): Array<CalendrierProf> {
        return this.service.items;
    }

    set items(value: Array<CalendrierProf>) {
        this.service.items = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get displayBasic(): boolean {
        return this.service.displayBasic;
    }

    set displayBasic(value: boolean) {
        this.service.displayBasic = value;
    }

    get events(): any[] {
        return this.service.events;
    }

    set events(value: any[]) {
        this.service.events = value;
    }

    get options(): any {
        return this.service.options;
    }

    set options(value: any) {
        this.service.options = value;
    }

    get header(): any {
        return this.service.header;
    }

    set header(value: any) {
        this.service.header = value;
    }

    get eventDialog(): boolean {
        return this.service.eventDialog;
    }

    set eventDialog(value: boolean) {
        this.service.eventDialog = value;
    }

    get etatEtudiantSchedule(): Array<EtatEtudiantSchedule> {
        return this.service.etatEtudiantSchedule;
    }

    get changedEvent(): any {
        return this.service.changedEvent;
    }

    set changedEvent(value: any) {
        this.service.changedEvent = value;
    }

    get clickedEvent(): any {
        return this.service.clickedEvent;
    }

    set clickedEvent(value: any) {
        this.service.clickedEvent = value;
    }

    get etudiant(): Etudiant {
        return this.service.etudiant;
    }

    set etudiant(value: Etudiant) {
        this.service.etudiant = value;
    }


    get schedule(): CalendrierProf {
        return this.service.selected;
    }

    set schedule(value: CalendrierProf) {
        this.service.selected = value;
    }

    get schedules(): Array<CalendrierProf> {
        return this.service.items;
    }

    set schedules(value: Array<CalendrierProf>) {
        this.service.items = value;
    }

    get scheduleVo(): CalendrierVo {
        return this.service.selectedVo;
    }

    get students(): Array<Etudiant> {
        return this.service.students;
    }

    set students(value: Array<Etudiant>) {
        this.service.students = value;
    }

    ngOnInit() {

        this.selected.prof.id = this.user.prof.id;
        this.service.getStudents().subscribe(data => this.students = data);
        this.service.findByProf();
        this.service.findEtat().subscribe(data => this.service.etatEtudiantSchedule = data);
        this.changedEvent = {title: '', etat: '', titleProf: '', start: null, end: '', allDay: null};

        this.options = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            defaultDate: new Date(),
            header: {
                left: 'prev,next',
                center: 'title ,addEventButton',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
            },
            allDaySlot: false,
            editable: true,
            selectable: true,
            defaultView: 'timeGridWeek',
            events: {
                rendering: 'background'
            },
            eventClick: (e) => {
                // this.editEvent(e.event);
                this.eventDialog = true;

                this.clickedEvent = e.event;

                this.changedEvent.title = this.clickedEvent.title;
                this.changedEvent.start = this.clickedEvent.start;
                this.changedEvent.end = this.clickedEvent.end;
                this.changedEvent.teacher = this.clickedEvent.teacher;
            }
        };
    }

    public editEvent(selectedVo: CalendrierVo) {
        this.selectedVo = {...selectedVo};
        this.eventDialog = true;
    }

    public edit() {
        this.submitted = true;
        this.service.edit().subscribe(data => {
            this.selected.startTime = this.changedEvent.startTime;
            this.selected.endTime = this.changedEvent.endTime;
            this.selected.prof.prenom = this.changedEvent.teacher;
            this.selected = data;
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'EVENT Updated',
                life: 3000
            });
        });
        this.eventDialog = false;
        this.selected = new CalendrierProf();
        this.selectedVo = new CalendrierVo();

    }

    public findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    save() {
        return this.service.save();
    }

    reset() {
        return this.service.reset();
    }

    showBasicDialog() {
        this.displayBasic = true;
    }

    public openCreate() {
        this.submitted = false;
        this.createDialog = true;
    }

    public hideCreateDialog() {
        this.createDialog = false;
        this.submitted = false;
    }

    public addStudent() {
        this.service.addStudent().subscribe(data => {
            this.items.push({...data});
            console.log(this.selected);
            this.selected.prof.id = this.user.prof.id;
            this.service.getStudents().subscribe(data => this.students = data);
            this.service.findByProf();
            this.service.findEtat().subscribe(data => this.service.etatEtudiantSchedule = data);
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Student Created',
                life: 3000
            });
        });
        this.createDialog = false;
        this.selected = new CalendrierProf();
    }

    public delete(selected: CalendrierProf) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + selected.ref + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.delete().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.itemsVo = this.itemsVo.filter(val => val.id !== this.selected.id);
                    this.selected = new CalendrierProf();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Student Deleted',
                        life: 3000
                    });
                });
            }
        });
        this.calendar.getCalendar().getEvents().forEach(event => event.remove());
        this.eventDialog = false;
    }

}
