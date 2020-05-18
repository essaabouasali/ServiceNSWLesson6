
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
            //arry.push(RandomOwner[Math.floor(Math.random() * RandomOwner.length)]);
            let myowner = new Owner(getRandomGivenName(),getRandomFamilyName(),Math.floor(Math.random() * 100));
            arry.push(myowner);
            number --;
        }
        
        return arry;
    }
}
const getRandomGivenName = function () {
    const RANDOM_FIRST_NAMES = ["Charlotte", "Olivia", "Ava", "Amelia", "Mia", "Isla", "Oliver", "William", "Jack", "Noah", "Thomas", "James"];
    return RANDOM_FIRST_NAMES[Math.floor(Math.random() * RANDOM_FIRST_NAMES.length)];
}

const getRandomFamilyName = function () {
    const RANDOM_LAST_NAMES = ["Smith", "Jones", "Williams", "Brown", "Wilson", "Johnson", "Taylor", "White", "Martin", "Anderson", "Thompson", "Nguyen"];
    return RANDOM_LAST_NAMES[Math.floor(Math.random() * RANDOM_LAST_NAMES.length)];
}
//const RandomOwner =[
  //  new Owner("essa" , "abouasali" , 10),
    //new Owner("dani ", "abouasali",9),
    //new Owner("david ", "abouasali",9),
    //new Owner("dave", "abouasali",9),
    //new Owner("lucian", "abouasali",9),
//]
//let person = new Owner();
console.log(Owner.randomowner(3));
