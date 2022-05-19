import React, { Component } from 'react'
import NoimageAvailable from './no_image_available.jpg';



export default class NewsItem extends Component {



  render() {

    let { title, description, imageUrl , newsUrl} = this.props;

    return (
     <div className="container my-3">
        <div className="card" style={{ width: "18rem" }}>
        { (imageUrl !== null) ? <img src={imageUrl} className="card-img-top" alt="this is image" />:<img src={NoimageAvailable} className="card-img-top" alt="this is image" />}
   
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,45)}</h5>
          <p className="card-text">{description.slice(0,90)}....</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
     </div>
    )
  }
}
