import Person from './Person';
import { IPerson } from './Interfaces';
let app = document.getElementById("app");
let form = document.getElementById("form");

function jello(person: IPerson, isAnAdult: boolean) {
	let elm = document.createElement('div');
	// if(isAnAdult){
	// 	person.innerHTML = "Jello Bello " + first_name + " " + last_name + " à " + age + " ans. C'est un adulte";
	// }
	// else{
	// 	person.innerHTML = "Jello Bello " + first_name + " " + last_name + " à " + age + " ans. Ce n'est pas un adulte";
	// }
	elm.innerHTML = "Jello Bello " + person.first_name + " " + person.last_name + " à " + person.age + " ans." + (isAnAdult ? "c'est un adulte" : "ce n'est pas un adulte");
	app.appendChild(elm);
}

form.addEventListener("submit", function(event) {
	event.preventDefault();
	let first_name = (<HTMLInputElement>document.getElementById('first_name')).value;
	let last_name = (<HTMLInputElement>document.getElementById('last_name')).value;
	let age = (<HTMLInputElement>document.getElementById('age')).value;
	let newPerson = new Person(first_name, last_name, parseInt(age));

	jello(newPerson, newPerson.isAnAdult());
})



// interface IPlant {
// 	name: string;
// 	color: string;
// }

// class Plant implements IPlant {
// 	private _name: string
// 	color: string

// 	get name(){
// 		return this._name;
// 	}

// 	set name(value: string){
// 		this._name = value;
// 	}
// }

let p1 = new Person("michel", "drucker", 76);
let p2 = new Person("francisse", "drucker", 12);
let p3 = new Person();
p3.first_name = "Véronique";
p3.last_name = "Drucker";
p3.age = 76;

jello(p1, p1.isAnAdult());
jello(p2, p2.isAnAdult());
jello(p3, p3.isAnAdult());