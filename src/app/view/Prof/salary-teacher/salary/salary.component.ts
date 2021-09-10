import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {ClassRoomService} from '../../../../controller/service/class-room.service';
import {SalaryVo} from '../../../../controller/model/salary-vo.model';
import {LoginService} from '../../../../controller/service/login.service';


@Component({
    selector: 'app-salary',
    templateUrl: './salary.component.html',
    styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {
    data: any;
    items: MenuItem[];
    activeItem: MenuItem;
    mois: '';
    annee: '';

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: ClassRoomService, private serviceUser: LoginService) {
        this.data = {
            labels: ['Lesson profit', 'bonus', 'Plan shortage'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF8C69',
                        '#43CD60',
                        '#3A5FCD'
                    ],
                    hoverBackgroundColor: [
                        '#FF8C69',
                        '#43CD60',
                        '#3A5FCD'
                    ]
                }]
        };
    }

    get selectedsalaryVo(): SalaryVo {
        return this.service.selectedsalaryVo;
    }

    set selectedsalaryVo(value: SalaryVo) {
        this.service.selectedsalaryVo = value;
    }

    get itemssalaryVo(): Array<SalaryVo> {
        return this.service.itemssalaryVo;
    }

    set itemssalaryVo(value: Array<SalaryVo>) {
        this.service.itemssalaryVo = value;
    }

    get selectessalaryVo(): Array<SalaryVo> {
        return this.service.selectessalaryVo;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set selectessalaryVo(value: Array<SalaryVo>) {
        this.service.selectessalaryVo = value;
    }

    get viewDialogCategorie(): boolean {
        return this.service.viewDialogCategorie;
    }

    set viewDialogCategorie(value: boolean) {
        this.service.viewDialogCategorie = value;
    }

    public findSalaryByDate() {
        this.selectedsalaryVo.prof.id = this.serviceUser.prof.id;
        this.service.findSalaryByDateAndProf().subscribe(data => {
            this.selectedsalaryVo = data;
        });
    }

    public findSalary() {
        this.selectedsalaryVo.prof.id = this.serviceUser.prof.id;
        this.selectedsalaryVo.mois = this.mois;
        this.selectedsalaryVo.annee = this.annee;
        this.service.findSalaryByDate().subscribe(data => {
            this.selectedsalaryVo = data;
        });
    }

    ngOnInit() {
        this.findSalaryByDate();
        this.items = [
            {label: '5 lesson Complete'},
            {label: '300$  workload bonus'},
            {label: '150$ lifeTime bonus'},
            {label: '30$ Class Average bonus'},
        ];
        this.activeItem = this.items[0];
    }

    public view() {
        this.viewDialogCategorie = true;
    }

    public Console() {
        console.log(this.itemssalaryVo);
    }
}
