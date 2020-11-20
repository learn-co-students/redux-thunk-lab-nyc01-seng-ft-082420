import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import  CatList  from './CatList';

class App extends Component {   
  
  componentDidMount(){
    this.props.fetchCats()
  }

  handleLoading = () => {
    return (
      this.props.loading ? 
    <h2>Loading...</h2> :
    <CatList catPics={this.props.catPics}/>
    )
    
  }

  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {this.handleLoading()}
      </div>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

const msp = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(msp, mdp)(App)

