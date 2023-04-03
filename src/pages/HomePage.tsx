import { Article } from "@root/components/Article";
import { Logic } from "@root/logic/Logic";
import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import { JobsModel } from "@root/model/JobsModel";
import * as uuid from "uuid";

interface Props {
    logic:Logic;
}

@observer
export class HomePage extends React.Component<Props> {
    componentDidMount(): void {
        this.props.logic.getJobs();
    }
  render() {
    const {jobs} = this.props.logic;
    return (
      <section>
        <div className="container">
        HomePage <br />
        {jobs && jobs.map((job:JobsModel) => {
            return (
                <div key={uuid.v4()}>{job.company}</div>
            )
        })}
        <Link to={"/about"}>About</Link>
        </div>
      </section>
    );
  }
}