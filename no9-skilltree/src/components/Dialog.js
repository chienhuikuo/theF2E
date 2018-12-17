import React, { Component } from 'react';
import styled from 'styled-components';


const Dialog = ({ label,content })=>(
  <div className="dialog-block">
    <div className="dialog-cat"></div>
    <p className="data">參考資料</p>
    <h1 className="dialog-label">{label}</h1>
    <span className="dialog-content">{content}</span>
  </div>
)

export default Dialog;