export class User {
    private userId:number;
    public userName:string;
    public userPassword:string;
    public userImgUrl:string;

    constructor(
        userName:string,
        userPassword:string
    ) {
        this.userName = userName;
        this.userPassword = userPassword;

        // l'argument photo est facultatif (ajout du ?), s'il est fourni au constructeur on hydrate la propriété this.photo
        //if (photo) this.photo = photo;
    }
}