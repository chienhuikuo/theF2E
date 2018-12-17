import React, { Component } from 'react';
import styled from 'styled-components';

const SkillButtonBackground = styled.div`
  left: ${props=>props.x}px;
  top: ${props=>props.y}px;
  border: 7px solid ${props=>{
    switch(props.status){
      case 'locked':
        return 'rgba(92, 92, 92, 0.62)'
      case 'empty':
        return 'rgba(255, 255, 255, 0.62)'
      case 'selected':
      default:
        return 'rgba(87, 145, 255, 0.62)'
    }
  }};
`

const SkillButton = ({ id, x, y, label, status, onClick, onMouseEnter}) =>{return(
  <SkillButtonBackground className="skillbuttonbg" status={status} x={x} y={y} a={id} onClick={onClick} onMouseEnter={onMouseEnter}>
    <img className="skillimg" src={require(`../assets/img_${id}@2x.png`)}/>
  </SkillButtonBackground>
)}


export default SkillButton;