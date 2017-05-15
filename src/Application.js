import React, { Component } from 'react';
import ButtonContainer from './containers/ButtonContainer';
import FormContainer from './containers/FormContainer';


require('./Application.scss');

class App extends Component {
  render() {
    return (
      <div className="Top-component">
        <div className="Top-component__content">
          <FormContainer/>
          <FormContainer/>
          <FormContainer/>
          <FormContainer/>
    
        </div>
      </div>
    );
  }
}

export default App;
