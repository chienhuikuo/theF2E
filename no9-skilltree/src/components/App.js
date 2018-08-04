import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dialog from './Dialog'
import SkillTree from './SkillTree';

class App extends Component{
  state = {
    info: null,
  }
  showInfo = skill =>{
    this.setState({
      info:skill
    })
  }
  render(){
    const { info } = this.state
    return(
      <Router>
        <div>
          <SkillTree showInfo={this.showInfo}/>
          {info && <Dialog {...info} />}
        </div>
      </Router>
    )
    
  }
}


export default App;
