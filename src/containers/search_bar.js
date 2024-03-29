import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{

  constructor(props) {
    
    super(props);
    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    let a = 10;
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"
          onChange={this.onInputChange}
          value={this.state.term}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
 
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
