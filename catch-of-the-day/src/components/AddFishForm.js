import React from "react";

class AddFishForm extends React.Component {
  constructor() {
    super();
    this.nameRef = React.createRef();
    this.priceRef = React.createRef();
    this.statusRef = React.createRef();
    this.descRef = React.createRef();
    this.imageRef = React.createRef();
    this.createFish = this.createFish.bind(this);
  }
  createFish(event) {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addFish(fish);
    event.currentTarget.reset();
  };

  render () {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" ref={this.nameRef} name="name" placeholder="Name" />
        <input type="text" ref={this.priceRef} name="price" placeholder="Price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Description"/>
        <input type="text" name="image" ref={this.imageRef} placeholder="Image" />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;