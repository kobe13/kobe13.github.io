import * as React from "react";
import {Component} from "react";
import {PageTemplate} from "../common/pageTemplate"

class View extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <PageTemplate>
          <section>
            <h1>HOME</h1>
          </section>
        </PageTemplate>
    );
  }
}

export const Home = View;