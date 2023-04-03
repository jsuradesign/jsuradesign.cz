import { makeObservable, observable } from "mobx";

export class JobsModel {
    @observable id!:number;
    @observable company!:string;

    constructor() {
        makeObservable(this);
    }
}