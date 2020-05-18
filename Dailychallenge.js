
class Owner {
    constructor(givenName, familyName, Id) {
        this.givenName = givenName;
        this.familyName = familyName;
        this.Id = Id;
    }
    //q6
    getfullname() {
        return `${this.givenName} ${this.familyName}`;
    }
    static randomowner(number)
    {
        let arry=new Array();
        while(number != 0)
        {
            arry.push(RandomOwner[Math.floor(Math.random() * RandomOwner.length)]);
            number --;
        }
        return arry;
    }
}
const RandomOwner =[
    new Owner("essa" , "abouasali" , 10),
    new Owner("dani ", "abouasali",9),
    new Owner("david ", "abouasali",9),
    new Owner("dave", "abouasali",9),
    new Owner("lucian", "abouasali",9),
]
//let person = new Owner();
console.log(Owner.randomowner(3));
