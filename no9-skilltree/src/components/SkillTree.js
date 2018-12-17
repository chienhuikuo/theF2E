import React, { Component } from "react";
import {withRouter} from 'react-router-dom'

import SkillButton from "./SkillButton";
import skills from "../skills.json";

class SkillTree extends Component {
  constructor(props){
    super(props);
    this.state=skills.reduce((acc,skill)=>({
      [skill.id]: 'locked',  //key:value
      ...acc
    }),{
      'blade-1': 'empty',
      'shield': 'empty'
    })
  }
  componentDidMount(){
    const matched = this.props.location.search.match(/[&?]k=(.+)(&|$)/) 
    //search bar裡的字一開始是,或？，之後接著k＝一串字，接著,或是結尾＄
    if(matched){
      const [,selectedString] = matched;
      const selectedSkills = selectedString.split(',') //獲取到每個分開的id
      this.setState(selectedSkills.reduce((acc, id)=>({
        ...acc,
        [id]: 'selected'
      }),{}
    ),this.updateSkills
  )}
}
  state = {
    blade: "locked",
    axe: "selected",
    meat: "empty"
  };
  //skill解構> ({id})    [skill.id]>[id]
  toggle = ({id})  => {
    if(this.state[id]==='locked') return;
    this.setState({
      [id]: 'selected'
    },this.updateSkills)
  };
  updateSkills=()=>{
    const newState = skills.reduce((acc,skill)=>{
      if(
        this.state[skill.id]==='locked' && 
        skill.prev.every(prevID=>this.state[prevID]==='selected')){
        return {
          ...acc,
          [skill.id]: 'empty'
        }
      }
      return acc
    },{})
    this.setState(newState)
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState!==this.state){
      const selectedSkills = Object.keys(this.state).filter(
        key => this.state[key] === 'selected'
      )
      this.props.history.replace(`/F2E-week9/?k=${selectedSkills.join(',')}`)
    }
  }
  render() {
    return (
      <div className="skill-block">
        {skills.map(skill => (
          <SkillButton
            {...skill}
            onClick={() => this.toggle(skill)}
            onMouseEnter={() => this.props.showInfo(skill)}
            status={this.state[skill.id]}
            key={skill.id}
          />
        ))}
      </div>
    );
  }
}

export default withRouter(SkillTree);
