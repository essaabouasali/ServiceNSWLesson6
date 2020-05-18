// classes 
// Q1 , q2, q3

class Pet {
    constructor(givenName, age, ownerid) {
        this.givenName = givenName;
        this.age = age;
        this.ownerid = ownerid;
    }
    static getownerbyid(petobject, owners) {
        let foundOwner;
        for(let i =0; i<owners.length ; i++)
        {
            
            const owner = owners[i];
            if(petobject.ownerid == owner.Id)
            {
                foundOwner = owner;
                break;
            }
            
        }
        if(!foundOwner)
        {
            return "Error : OWNER NOT FOUND";
        }
        return foundOwner.getfullname() ;

    }
}

// q4 , q5 
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

}

let mypet = new Pet("rex",12,"10");
let arryofowner =[
    new Owner("essa" , "aboasali", "10"),
    new Owner("dan","welson","14"),
    new Owner("lucke","parker","12")
];
let ownermatches = Pet.getownerbyid(mypet ,arryofowner);
console.log(ownermatches);

// Q8
class Square
{
    constructor(sidelen)
    {
        this.sidelen = sidelen;
    }
    getter()
    {
        return this.sidelen * this.sidelen ;
    }
    setter(sidelen1)
    {
        this.sidelen = sidelen1 ;
    }
}
// q9
let mysquare = new Square(10);
//console.log(mysquare.getter());

// q10 
mysquare.setter(5);
//console.log(mysquare.getter());