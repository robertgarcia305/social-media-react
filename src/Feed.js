import React, { useState } from "react";
import data from "./data";
import Post from "./Post";
// this is where you will map all the posts,
// and add the logic for handilng comments and likes
const Feed = () => {
    const posts = data.map((item) => {
        return <Post key={item.id} item={item} />;
    });

    return <div className="feed-wrap">{posts}</div>;
};

export default Feed;