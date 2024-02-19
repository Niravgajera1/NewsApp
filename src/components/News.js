import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updatedata = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6adcafee1afb43948d644977bfde06f6&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    //console.log(parsedData);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updatedata();
  }, []);
  // async componentDidMount() {
  //     this.updatedata();
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6adcafee1afb43948d644977bfde06f6&page=1&pageSize=${props.pageSize}`;
  // this.setState({loading:true});
  // let data = await fetch(url);
  // let parsedData = await data.json()
  // //console.log(parsedData);
  // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false   })

  //}

  //    const handlePrevClick = async () => {
  //         setpage(page - 1)
  //         updatedata();
  //     }

  //      const handleNextClick = async () => {
  //         console.log("Next");
  //         setpage(page + 1)
  //         updatedata();
  //     }
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apikey=6adcafee1afb43948d644977bfde06f6&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };
  return (
    <>
      <div className="container my-4" style={{ maxHeight: "400px" }}>
        <h1
          className="text-center"
          style={{ margin: "30px 0px", marginTop: "90px", color: "black" }}
        >
          <strong style={{ fontFamily: "serif", fontVariant: "petite-caps" }}>
            Top Headlines From {capitalizeFirstLetter(props.category)}{" "}
          </strong>
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 30) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 70)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defalutProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
