import React, { Component } from 'react';
import './App.css';
import ButtonContainer from './containers/ButtonContainer';
import FormContainer from './containers/FormContainer';

class Application extends Component {
  render() {
    return (
      <div className="top-component">
          <ButtonContainer/>
          <FormContainer/>
      </div>
    );
  }
}

export default Application;
