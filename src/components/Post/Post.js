import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from "react";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import './Post.css'
import Modal from "react-modal";


const Post = ({id, question, image, timestamp, quoraUser}) => {
    return (
        <div className="post">
            <div className="post__info">
                <Avatar 
                    // src={quoraUser.photo}
                />
                {/* <h5>{quoraUser.displayName}</h5> */}
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            </div>

            <div className="post__body">
                <div className="post__question">
                   <p>Question</p>
                   <button className="post__btnAnswer">Answer</button>
                    
                </div>

                <div className="post_Answer">
                   <p></p>
                </div>
                <img src="https://endivesoftware.com/blog/wp-content/uploads/2019/08/How-to-Develop-a-Question-Answer-Mobile-app-like-Quora.jpg"
                 alt="" />
            </div>

            <div className="post__footer">
                <div className="post__footerAction">

                </div>
                <div className="post__footerAction">
                    <ArrowUpwardOutlinedIcon />
                    <ArrowDownwardOutlinedIcon />
                </div>

                    <RepeatOutlinedIcon />
                    <ChatBubbleOutlineOutlinedIcon />
                <div className="post__footerLeft">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div>
    );
};

export default Post;