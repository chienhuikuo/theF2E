import React, { Component } from 'react';
import styled from 'styled-components';


class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <div className="footer-cat"><img src={require(`../assets/img_hexcat@2x.png`)}/></div>
        <div className="footer-rocket"><img src={require(`../assets/img_rocket@2x.png`)}/></div>
      </div>
    )
  }
}
  

export default Footer;