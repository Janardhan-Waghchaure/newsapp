import React, { Component } from 'react'
import Loading_spinner from './loading_spinner.gif';

export default class spinner extends Component {
  render() {
    return (
      <div style={{display:"flex" , justifyContent:"center"}}>
        <img  style={{marginTop:"80px"}} src={Loading_spinner} alt="loading" />
      </div>
    )
  }
}
