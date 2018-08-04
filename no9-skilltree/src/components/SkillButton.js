import React, { Component } from 'react';
import styled from 'styled-components';

const SkillButtonBackground = styled.div`
  position: absolute;
  left: ${props=>props.x}px;
  top: ${props=>props.y}px;
  width: 104px;
  height: 104px;
  background: rgba(0, 147, 255, 0.35);
  box-shadow: 0 3px 6px rgba(0, 147, 255, 0.44);
  border-radius: 39px;
  margin: 10px;
  cursor: pointer;
  border: 12px solid ${props=>{
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
const SkillButtonImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) scale(.5);
  &:hover{
    transform: translate(-50%,-50%) scale(.6);
  }
  transition: .3s cubic-bezier(0.55, 2.35, 0.71, 0.41);
`

const SkillButton = ({ id, x, y, label, status, onClick, onMouseEnter}) =>{return(
  <SkillButtonBackground status={status} x={x} y={y} a={id} onClick={onClick} onMouseEnter={onMouseEnter}>
    <SkillButtonImage src={require(`../assets/img_${id}@2x.png`)}/>
  </SkillButtonBackground>
)}


export default SkillButton;