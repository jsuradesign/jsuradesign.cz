import { ArticleModel } from "@root/model/ArticleModel";
import { JobsModel } from "@root/model/JobsModel";
import axios, { AxiosResponse } from "axios";
import { makeObservable, observable } from "mobx";

export class Logic {
    @observable articles!:ArticleModel [];
    @observable jobs!:JobsModel [];

    constructor() {
        makeObservable(this);
    }

    getArticles = () => {
        axios.get("https://admin.jsuradesign.cz/wp-json/wp/v2/posts")
            .then((response:AxiosResponse) => {
                // console.log(response.data)
                if (response.data) {
                    const articles:ArticleModel [] = [];
                    
                    (response.data as Array<any>).forEach(item => {
                        const article:ArticleModel = new ArticleModel();

                        article.id = item.id;
                        article.title = item.title.rendered;
                        article.slug = item.slug;
                        article.excerpt =  item.excerpt.rendered;

                        // dangerouslySetInnerHTML={{__html: this.props.excerpt}}

                        articles.push(article);
                    });
                    this.articles = articles;
                }
            })
    }

    getJobs = () => {
        axios.get("https://admin.jsuradesign.cz/wp-json/wp/v2/jobs")
            .then((response:AxiosResponse) => {
                // console.log(response.data)
                if (response.data) {
                    const jobs:JobsModel [] = [];
                    
                    (response.data as Array<any>).forEach(item => {
                        const job:JobsModel = new JobsModel();

                        job.id = item.id;
                        job.company = item.title.rendered;

                        // dangerouslySetInnerHTML={{__html: this.props.excerpt}}

                        jobs.push(job);
                    });
                    this.jobs = jobs;
                }
            });
    }
}