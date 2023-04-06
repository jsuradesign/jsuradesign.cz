import {observable} from "mobx";
import {observer} from "mobx-react";
import React from "react";

@observer
export class Footer extends React.Component {

    @observable appName = process.env.REACT_APP_NAME;
    @observable appVersion = process.env.REACT_APP_VERSION;
    @observable githubUrl = process.env.REACT_APP_GITHUB_URL;

    render():JSX.Element {
        return (
            <footer>
                <div className="copyright">
                    <div className="container">
                        <p>
                            © 2021 {this.appName}
                            / APP Version {this.appVersion}
                            / SourceCode on <a href={this.githubUrl} target='_blank' rel="noreferrer">GitHub</a></p>
                    </div>
                </div>
            </footer>
        );
    }
}
