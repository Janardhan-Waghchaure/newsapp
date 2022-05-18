import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      news: [],
      loading: false,
    };
    // console.log("hello , iam constructor ");
  }

  // function with async keyword returns a promise
  async componentDidMount() {

    // componentDidMount will run after the render methode
    // console.log("component did mount running");

    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=52a48f3c30b644f49951a1729c6533aa";

    // programme will wait here until data gets fetched from the given url
    let data = await fetch(url);
    // console.log(data);

    // parsing the data into json format(converting data from key:value format into json format)
    let parsedData = data.json();
    parsedData
      .then(output => {
        // console.log("output is = ");
        // console.log(output.articles[0]);

        this.setState({ news: output.articles });
        // console.log(this.state);
      })
      .catch();


    //console.log(parsedData); //=> this will print the promise in console.

    // console.log(this.state);

  }

  render() {

    // to show that component did mount is running after render methode see below text in console will get printed first
    // console.log("render methode running");

    return (
      <div className='container my-3'>
        <h2> Top Headlines </h2>



        <div className="row">
          {this.state.news.map((article) => {
            console.log(article.urlToImage !== null);
            return <div className="col-md-4" key={article.url}>
              {/* note that unique key needs to be attached to the html/JSX element which we are returning hence passsing key to outer div and not to NewsItem element  */}
              <NewsItem title={(article.title != null) ? article.title : "Unknown"} description={(article.description != null) ? article.description : "Unknown"} imageUrl={(article.url !== null)?article.urlToImage:"https://images.hindustantimes.com/img/2022/05/17/1600x900/Gyanvapi_Mosque_in_Varanasi_1652804779123_1652804779296.JPG"} newsUrl={article.url} />
            </div>

          })}
        </div>



      </div>
    )
  }
}
