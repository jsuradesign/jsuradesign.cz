import React from "react";
import {observer} from "mobx-react";
import { observable } from "mobx";
import { Article } from "@root/components/Article";
import { Logic } from "@root/logic/Logic";
import { ArticleModel } from "@root/model/ArticleModel";
import * as uuid from "uuid";

interface Props {
    logic:Logic;
}

@observer
export class Blog extends React.Component<Props> {
    @observable loading:boolean = true;

    componentDidMount(): void {
        this.props.logic.getArticles();
        this.loading = false;
    }
    
    render() {
        const {articles} = this.props.logic;

        return (
        <section>
            <div className="container">
                <div className="articles">
                    {articles && articles.map((article:ArticleModel) => {
                        return (
                            <Article
                                key={uuid.v4()}
                                slug={article.slug}
                                title={article.title}
                                excerpt={article.excerpt}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
        );
    }
}