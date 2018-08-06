import React from "react";
import {getFunName} from '../helpers';
class StorePicker extends React.Component {
  constructor(props) {
    super(props);
    this.storeNameRef = React.createRef();
    this.goToStore = this.goToStore.bind(this);
  }
  goToStore(event) {
    event.preventDefault();
    this.props.history.push(`/store/${this.storeNameRef.current.value}`)
  }

  render () {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please select a store!</h2>
          <input required type="text" ref={this.storeNameRef} placeholder="Store name" defaultValue={getFunName()}/>
          <button type="submit">Visit Store</button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
