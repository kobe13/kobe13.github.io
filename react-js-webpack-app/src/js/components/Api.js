import * as React from 'react';
import AstronautCrew from './ApiElements';

class Api extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      error: false,
      number: '',
      people: [],
    };
  }

  componentWillMount() {
    window.fetch('https://kobe13.github.io/react-js-webpack-app/api/api.json')
      .then(res => res.json())
      .then(json => this.setState({ ...json, loaded: true }))
      .catch((err) => {
        this.setState({ error: true });
        console.log(err);
      });
  }

  render() {
    return (
      <section>
        <h3>Astronaut Counter</h3>
        {(!this.state.loaded && !this.state.error) && <p>Loading...</p>}
        {this.state.error && <p>Error...</p>}
        {this.state.loaded &&
          <AstronautCrew
            number={this.state.number}
            people={this.state.people}
          />
        }
      </section>
    );
  }
}

export default Api;
