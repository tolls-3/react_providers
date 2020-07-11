import React from 'react';
import ApiService from '../../utils/apiService'

class NewProviderForm extends React.Component {

  // TASK 5: Add New Provider
  // Add Functionality to the form below
  // On submission it should make a POST request to 
  // the server to create a new provider.
  // Refer to the API documentation for details.
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      state: "",
      rating: "1",
      type: "Hospital",
      image: "https://via.placeholder.com/400x200"
    };
    // this.fileInput = React.createRef();
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...this.state, image: "https://via.placeholder.com/400x200" }

    console.log(data)
    ApiService.post(ApiService.ENDPOINTS.providers, data ).then((data) => {
      console.log(data)
      this.setState({
        name: "",
        address: "",
        state: "",
        rating: "",
        type: "",
      });
    });
  }

  render() {
    const { name, address, state, rating, type } = this.state
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Provider Name:</label>
          <input className="input__style_1" type="text" name="name" value={name} onChange={this.inputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Provider Address:</label>
          <input className="input__style_1" type="text" name="address" value={address} onChange={this.inputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Provider State:</label>
          <input className="input__style_1" type="text" name="state" value={state} onChange={this.inputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Provider Rating:</label>
          <select className="select input__style_1" type="number" name="rating" value={rating} onChange={this.inputChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="type">Provider type:</label>
          <select className="select input__style_1" type="text" name="type" value={type} onChange={this.inputChange}>
            <option value="hospital">Hospital</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="clinic">Clinic</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Provider Image</label>
          <img className="img-responsive" src="https://via.placeholder.com/1500x840" alt="new provider" />
          <input type="file" name="file" onChange={this.inputChange} />
        </div>
        <div className="form-group button-row">
          <button
            type="submit"
            className="btn btn-primary no-margin"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default NewProviderForm;
