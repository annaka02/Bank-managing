export class Request {
    id!: number;
    created!: Date;
    currency!: String;
    amount!: number;
    status!: String;
    sender!: String;
    receiver!: String;
    /*constructor(created : Date, currency : String, amount : number, status: String, sender : String , receiver : string ){
        this.amount = amount;
        this.created = created;
        this.currency = currency;
        this.status = status ;
        this.sender = sender;
        this.receiver = receiver;
    }*/
}
