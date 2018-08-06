import React from "react";

class StorePicker extends React.Component {
  render () {
    return (
      <React.Fragment>
        <form className="store-selector">
          <h2>Please select a store!</h2>
          <input type="text" placeholder="Store name"/>
          <button type="submit">Visit Store</button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
