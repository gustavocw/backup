interface IMailMessageDetails {
    name:string,
    address:string
};

export interface IMailMessage {
    to:IMailMessageDetails,
    from:IMailMessageDetails,
    subject:string,
    body:string,
};

export abstract class AMailTransporter{
    abstract findByEmail(email:string): Promise<void>;
    abstract sendCodeForEmail(details:IMailMessage, email:string, code:number, codeDate:number): Promise<void>;
};
