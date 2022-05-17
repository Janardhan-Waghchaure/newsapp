import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2> Top Headlines </h2>

        <div className="row">
          <div className="col-md-4">
            <NewsItem title="hello this is poop title " discription="this is some description , which we are having" imageUrl="https://media.wired.com/photos/627a89e3e37e715cb7d760d2/191:100/w_1280,c_limit/Bitcoin_Miami_Biz_GettyImages-1239817123.jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="hello this is poop title " discription="this is some description , which we are having" />
          </div>
          <div className="col-md-4">
            <NewsItem title="hello this is poop title " discription="this is some description , which we are having" />
          </div>
          <div className="col-md-4">
            <NewsItem title="hello this is poop title " discription="this is some description , which we are having" />
          </div>
          <div className="col-md-4">
            <NewsItem title="hello this is poop title " discription="this is some description , which we are having" />
          </div>

        </div>



      </div>
    )
  }
}
