import { IPerson } from "./Interfaces";

export default class Person implements IPerson {
	private _first_name: string;
	private _last_name: string;
	private _age: number;

	constructor(first_name?: string, last_name?: string, age?: number){
		this.first_name = first_name;
		this.last_name = last_name;
		this.age = age;
	}

	get first_name(): string{
		return this._first_name
	}

	set first_name(value: string) {
		this._first_name = value;
	}

	get last_name(): string{
		return this._last_name
	}

	set last_name(value: string) {
		this._last_name = value;
	}

	get age(): number{
		return this._age;
	}

	set age(value: number) {
		this._age = value;
	}

	public isAnAdult(): boolean {
		return this._age >= 18;
	}

}
