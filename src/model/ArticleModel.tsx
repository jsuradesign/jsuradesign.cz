import { makeObservable, observable } from "mobx";

export class ArticleModel {
    @observable id!:number;
    @observable slug!:string;
    @observable title!:string;
    @observable excerpt!:string;
    @observable content!:string;

    constructor() {
        makeObservable(this);
    }
}