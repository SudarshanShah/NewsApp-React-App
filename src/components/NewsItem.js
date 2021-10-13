import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              !imageurl
                ? "https://t3.ftcdn.net/jpg/00/88/43/58/360_F_88435847_HhglbcoGP5qOX3DfudP3hN5z95eTrHqz.jpg"
                : imageurl
            }
            className="card-img-top"
            height="170px"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
