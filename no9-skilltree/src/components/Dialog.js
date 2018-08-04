import React, { Component } from 'react';
import styled from 'styled-components';


const font = `
  font-family: 'Noto Sans CJK TC','微軟正黑體',Arial, Helvetica, sans-serif;
  font-size: 35px;
  line-height: 52px;
`
const DialogBlock = styled.div`
  width: 65vw;
  min-width: 600px;
  height: auto;
  background: #fff;
  border: 10px solid rgba(0, 147, 255, 0.76);
  border-radius: 65px;
  padding: 0 95px 40px 100px;
  top: 750px;
  left: 15%;
`
const DialogLabel = styled.h1`
  ${font};
  font-weight: bold;
  color: #505050;
  margin-top: 40px;
`
const DialogContent = styled.span`
  ${font};
  font-weight: normal;
  color: #7B7B7B;
  margin-top: 4px;
`

const Dialog = ({ label,content })=>(
  <DialogBlock>
    <div className="dialog-cat"></div>
    <p className="data">參考資料</p>
    <DialogLabel>{label}</DialogLabel>
    <DialogContent>{content}</DialogContent>
  </DialogBlock>
)

export default Dialog;