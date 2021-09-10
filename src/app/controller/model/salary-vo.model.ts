import {Prof} from './prof.model';

export class SalaryVo {
    public id: number;
    public montantMensuel: number;
    public montantGlobale: number;
    public nbrSessionMensuel: number;
    public nbrSessionGlobale: number;
    public responsable = new Prof();
    public mois: string;
    public annee: string;
    public prof = new Prof();
}
