import React from "react";
import BlogItem from "./BlogItem";
import { BlogData } from "../../data";

function BlogList() {
  return (
    <div className="blog-list">
      {BlogData.map((item, index) => {
        let newClassName = "";
        if (index === 2) newClassName = "adb-css";
        return (
          <BlogItem
            key={item.id}
            image={item.image}
            avatar={item.avatar}
            title={item.title}
            author={item.author}
            className={newClassName}
          ></BlogItem>
        );
      })}
    </div>
  );
}

export default BlogList;
