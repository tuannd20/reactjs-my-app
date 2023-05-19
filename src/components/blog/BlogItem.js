import React from "react";

function BlogItem(props) {
  return (
    <div className="">
      <div className="blog-image">
        <img src={props.image} alt="" className="blog-image-link" />
      </div>
      <div className="blog-footer">
        <div className="blog-avatar-author">
          <img src={props.avatar} alt="" className="blog-link-avatar" />
        </div>
        <div className="detail">
          <div className="blog-title">
            <h3 className="blog-title-element">
              {props.title || "This is example of title"}
            </h3>
          </div>
          <div className="blog-author">
            <h4 className="blog-author-element">
              {props.author || "This is example of author"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
