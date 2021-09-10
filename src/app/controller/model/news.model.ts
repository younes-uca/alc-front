export class News {
    public id: number;
    public ref: string;
    public libelle: string;
    public image: string;
    public description: string;
    public destinataire: string;
    public numeroOrdre: number;
    public date: Date = new Date();
    public dateDebut: Date = new Date();
    public dateFin: Date = new Date();
}
