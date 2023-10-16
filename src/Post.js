import React, { useState } from "react";

// import the hearts

import redHeart from "./img/heartLiked.png";
import greyHeart from "./img/heartNotLiked.png";
import trash from "./img/trash.png";
const Post = (props) => {
    let currentHeartState = props.item.liked;
    const [like, setLike] = useState(currentHeartState);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const addLike = () => {
        setLike(!like);
        console.log(like);
    };

    const addComment = () => {
        if (newComment.trim() !== "") {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    const removeComment = (index) => {
        const updatedComments = [...comments];
        //splice, looks for index, then the delete count
        updatedComments.splice(index, 1);
        setComments(updatedComments);
    };

    // const textOfComment = () => {
    //     console.log(comments);
    //     if (comments.length >= 1) {
    //         setCommentText(true);
    //     } else {
    //         setCommentText(false); // Set to false if there are no comments
    //     }
    // };

    return (
        <div className="post-wrap">
            <div className="top">
                <p>@{props.item.userName}</p>
            </div>
            <div className="post-image-wrap">
                <img className="pic-img" alt="post" src={props.item.img}></img>
            </div>
            <div className="post-like">
                <img
                    className="heart"
                    onClick={addLike}
                    alt="post"
                    src={like ? redHeart : greyHeart}
                ></img>
                <p>{like ? "Unlike" : "Like"}</p>
            </div>
            <div className="comments-wrap">
                <div className="comments-top">
                    <input
                        placeholder="Write Something"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    ></input>
                    <button
                        onClick={() => {
                            addComment();
                        }}
                    >
                        Send
                    </button>
                </div>
                <div className="comments-bottom">
                    <p>Comments</p>
                    <ul className="comments-wrap">
                        {/* {comments.map((comment, index) => {
                            return <li key={index}>{comment}</li>;
                        })} */}
                        {comments.map((comment, index) => {
                            return (
                                <div className="comment-wrap" key={index}>
                                    <li>{comment}</li>
                                    <div
                                        className="trash-wrap"
                                        onClick={() => {
                                            removeComment(index);
                                        }}
                                    >
                                        <img src={trash} alt="trash-icon"></img>
                                    </div>
                                </div>
                            );
                        })}
                        {/* add the li with a trhash can that you click and the index gets deleted */}
                    </ul>
                    {/* the li that is going in the  */}
                </div>
            </div>
        </div>
    );
};

export default Post;
