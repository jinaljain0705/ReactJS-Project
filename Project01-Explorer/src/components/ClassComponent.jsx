import { Component } from "react";
import SectionTitle from "./SectionTitle";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <>
        <SectionTitle title="Class Components" />
        <div className="card">
          <h3>Class Counter</h3>
          <p style={{fontSize:"24px"}}>{this.state.count}</p>

          <button className="btn" style={{marginRight:"12px"}} onClick={() => this.setState({ count: this.state.count + 1 })}>
            Increase
          </button>
           <button className="btn" onClick={() => this.setState({ count: this.state.count - 1 })}>
            Decrement
          </button>
        </div>
      </>
    );
  }
}

export default ClassComponent;
