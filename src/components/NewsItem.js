import React, { Component } from 'react'

export default class NewsItem extends Component {



  render() {

    let { title, discription, imageUrl } = this.props;


    return (
     <div className="container my-3">
        <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="this is image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <a href="#" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
     </div>
    )
  }
}