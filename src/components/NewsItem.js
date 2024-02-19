import React from "react";

const NewsItem = (props) => {
  let {
    title,
    description,
    imageUrl,
    newsUrl,
    author,
    date = new Date(date).toGMTstring,
    source,
  } = props;
  return (
    <div className="d-flex h-100 py-2">
      <div className="card card-block h-100">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-dark">{source}</span>
        </div>

        <img
          src={
            imageUrl
              ? imageUrl
              : "https://i.insider.com/65c2516c43bb77284ba3f7dd?width=1200&format=jpeg"
          }
          className="card-img-top img-fluid"
          alt="..."
          style={{ height: "180px" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title" style={{ fontFamily: "initial" }}>
            {title}...
          </h5>
          <p
            className="card-text"
            style={{ flexGrow: 1, fontFamily: "sans-serif" }}
          >
            {description}...
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} On {date}{" "}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-outline-info">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
