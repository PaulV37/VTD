export class TabModel {
    constructor(
        public title: string,
        public date: Date,
        public read: Boolean,
        public link: string
    ){}

    get dateobj(): Date{
        return this.date;
    }
}