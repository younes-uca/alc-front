import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {LoginService} from '../../../controller/service/login.service';


@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./tabledemo.scss']
})
export class DashboardDemoComponent implements OnInit {

    products: any[];

    items: MenuItem[];



    events: any[];

    fullcalendarOptions: any;

    home: any[];
    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor( private login: LoginService) {
    }

    get model(): any[] {
        return this.login.model;
    }

    set model(value: any[]) {
        this.login.model = value;
    }

    ngOnInit() {


        this.login.etudiant = null;
        this.login.admin = null;
        this.login.prof = null;
        this.model = [];
        this.fullcalendarOptions = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            defaultDate: '2017-02-12',
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: true
        };

        this.home = [
            {
                label: 'assets/layout/images/home1.jpg',
                icon: 'pi pi-check',
                titre: 'HOME',
                descreption: 'We have been serving the Casablanca community for over 40 consecutive years. We are located on Moulay Youssef Boulevard across from the Place de la Liberté. In addition to the administration and our modern classrooms, our facility includes a large multimedia lab, a study center, a bookstore and a student café. Our classes are designed to help students improve their communication skills in English. We also offer business English, TOEFL preparation, BULATS preparation, TOEIC preparation courses. The American Language Center exists to give all of our students the best teaching and learning experience in Casablanca'
            },
            {
                label: 'assets/layout/images/home.jpg',
                icon: 'pi pi-check',
                titre: 'Registration Open',
                descreption: 'WINTER SESSION 2021 ONLINE',
                descreption2: 'January 12 – March 22'
            },
            {
                label: 'assets/layout/images/winter.jpg',
                icon: 'pi pi-check',
                titre: 'Free activities Winter 2020',
                descreption: 'To provide our students with practice using English in a relaxed and friendly setting, we offer free club activities for each session. Our club activities include music club, public speaking club, personal development club, talk club, business club, reading club, critical thinking club, community club, writing club, and journalism club. All our English Clubs are moderated by professional English teachers and are free of charge. In addition to these free clubs, the ALC also offers free beginning 1 and beginning 2 reinforcement classes.'
            },
            {
                label: 'assets/layout/images/contact.jpg',
                icon: 'pi pi-check',
                titre: 'CONTACT US',
                descreption: '> Tel: (+212) 522 277 765 – (+212) 522 275 270',
                descreption2: '> Fax: (+212) 522 207 457',
                descreption3: '> Postal: 1, place de la fraternité, boulevard Moulay Youssef, Casablanca, Morocco ',
                descreption4: '> Instagram: @alccasablanaofficial',
                descreption5: '> Facebook: @alccasablanaofficial'
            }
        ];
    }
}
