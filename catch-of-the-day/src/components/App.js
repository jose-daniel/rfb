import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order  from "./Order";
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {}
    };
    this.addFish = this.addFish.bind(this);
    this.loadSampleFishes = this.loadSampleFishes.bind(this);
  }
  addFish(fish) {
    let fishes = {...this.state.fishes};
    fishes[`fish${Object.keys(fishes).length}`] = fish;
    this.setState({
      fishes: fishes
    });
  }

  loadSampleFishes() {
    console.log(sampleFishes);
    this.setState({
      fishes: sampleFishes
    });
    console.log(this.state.fishes);
    console.log(Object.keys(this.state.fishes));
  }

  render () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market"/>
          <ul className="fishes">
            { Object.keys(this.state.fishes).map((fishKey) => {
              <Fish key={fishKey} details={this.state.fishes[fishKey]}/>
            })}
          </ul>
        </div>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
        <Order/>
      </div>
    );
  }
}

export default App;