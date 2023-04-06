import {action, observable} from "mobx";
import {observer} from "mobx-react";
import React from "react";

interface Props {
    name:string;
}

@observer
export class Home extends React.Component<Props> {

    render():JSX.Element {
        return (
            <section>
                <div className="container">
                    <h1>Home {this.props.name}</h1>
                </div>
            </section>
        );
    }
}
