import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header.jsx';
import Search from './home/Search.jsx';
import SearchResultsDisplay from './home/SearchResultsDisplay.jsx';


const mapStateToProps = (store) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
};


class homePage extends Component {

  componentDidMount() {
    console.log('exampleContainer did mount');
  }

  render() {
    return (
      <div>
        <Header />
        <h1 style={{textAlign: 'center'}}>Welcome!</h1>
        <Search />
        <SearchResultsDisplay />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(homePage);