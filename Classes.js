class person {
    constructor (givenName ,familyName, age) {
        this.givenName =givenName ;
        this.familyName = familyName;
        this.age = age;
    }
    getfullName() {
        return `${this.givenName} ${this.familyName}`
    }
    static creatpersonfromobject(obj)
    {
        return new person(obj.firstname , obj.lastname ,obj.age);
    }
}
let me = new person("essa","abouasali","20");
console.log(me.getfullName());
let dan = person.creatpersonfromobject({
    firstname : "dan",
    lastname : "wilson",
    age : 23
});
console.log(dan);

