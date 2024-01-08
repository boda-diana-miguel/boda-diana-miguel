export class Registration {

    constructor(
        private _name: string,
        private _confirmation: boolean,
        private _namePlusOne: string,
        private _hasAllergies: boolean,
        private _myAllergies: string,
        private _otherAllergies: string
        
    ) {}

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get confirmation(): boolean {
        return this._confirmation;
    }
    public set confirmation(value: boolean) {
        this._confirmation = value;
    }
    public get namePlusOne(): string {
        return this._namePlusOne;
    }
    public set namePlusOne(value: string) {
        this._namePlusOne = value;
    }
    public get hasAllergies(): boolean {
        return this._hasAllergies;
    }
    public set hasAllergies(value: boolean) {
        this._hasAllergies = value;
    }
    public get myAllergies(): string {
        return this._myAllergies;
    }
    public set myAllergies(value: string) {
        this._myAllergies = value;
    }
    public get otherAllergies(): string {
        return this._otherAllergies;
    }
    public set otherAllergies(value: string) {
        this._otherAllergies = value;
    }
    
}