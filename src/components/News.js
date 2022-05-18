import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      news: [],
      loading: false,
      page: 1,
      TotalnumberOfArticles: 0,
      numberOfPages: 20// this much of pages will be loaded ones when we make an https request
    };
    // console.log("hello , iam constructor ");
  }

  // function with async keyword returns a promise
  async componentDidMount() {

    // componentDidMount will run after the render methode
    // console.log("component did mount running");



    // pageSize is set to 20 set number of news for one html page will be 20.
    let url = `https://newsapi.org/v2/top-headlines?page=${this.state.page}&country=in&apiKey=52a48f3c30b644f49951a1729c6533aa&pageSize=${this.state.numberOfPages}`;

    // programme will wait here until data gets fetched from the given url
    let data = await fetch(url);
    // console.log(data);

    // parsing the data into json format(converting data from key:value format into json format)
    let parsedData = data.json();
    parsedData
      .then(output => {
        // console.log("output is = ");
        // console.log(output.articles[0]);

        this.setState({
          news: output.articles,
          TotalnumberOfArticles: output.totalResults
        });

        // console.log(this.state);
      })
      .catch();


    //console.log(parsedData); //=> this will print the promise in console.

    // console.log(this.state);

  }


  onNextClick = async () => {

    // fetching the next page only if there is some news remained inside the next page of news

    if (this.state.page + 1 > Math.ceil(this.state.TotalnumberOfArticles / this.state.numberOfPages)) {


    } else {
      let url = `https://newsapi.org/v2/top-headlines?page=${this.state.page + 1}&country=in&apiKey=52a48f3c30b644f49951a1729c6533aa`;

      let data = await fetch(url);

      let parsedData = data.json();
      parsedData
        .then(output => {


          this.setState({
            news: output.articles,
            page: this.state.page + 1
          });

        })
        .catch();
    }


  }

  onPreviousClick = async () => {


    let url = `https://newsapi.org/v2/top-headlines?page=${this.state.page - 1}&country=in&apiKey=52a48f3c30b644f49951a1729c6533aa`;

    let data = await fetch(url);

    let parsedData = data.json();
    parsedData
      .then(output => {


        this.setState({
          news: output.articles,
          page: this.state.page - 1
        });

      })
      .catch();

  }




  render() {

    // to show that component did mount is running after render methode see below text in console will get printed first
    // console.log("render methode running");


    return (
      <div className='container my-3'>
        <h2> Top Headlines </h2>



        <div className="row">
          {this.state.news.map((article) => {
            return <div className="col-md-4" key={article.url}>
              {/* note that unique key needs to be attached to the html/JSX element which we are returning hence passsing key to outer div and not to NewsItem element  */}
              <NewsItem title={(article.title != null) ? article.title : "Unknown"} description={(article.description != null) ? article.description : "Unknown"} imageUrl={(article.url !== null) ? article.urlToImage : "https://images.hindustantimes.com/img/2022/05/17/1600x900/Gyanvapi_Mosque_in_Varanasi_1652804779123_1652804779296.JPG"} newsUrl={article.url} />
            </div>

          })}
        </div>

        <div className="ceter-container" style={{ display: "flex", justifyContent: "space-evenly", margin: "50px 0px" }}>
          <button type="button" disabled={this.state.page - 1 < 1} className="btn btn-outline-primary " onClick={this.onPreviousClick}>Page {this.state.page - 1}</button>
          <span> Page {this.state.page} </span>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.TotalnumberOfArticles / this.state.numberOfPages) } className="btn btn-outline-primary " onClick={this.onNextClick}>Page {this.state.page + 1}</button>
        </div>



      </div>
    )
  }
}
