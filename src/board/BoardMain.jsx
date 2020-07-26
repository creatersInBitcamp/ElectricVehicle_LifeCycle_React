import React from 'react';
import demo from '../assets/images/portfolio/25.jpg'

const BoardMain = () => {
    return (
        <div>
            <div className={"card"}>
                <div className={"card-title"}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/avtar.jpg`} alt="board avatar"/>

                    // profile image, nickname, manu-button
                </div>
                <divider></divider>
                <div className={"images"}>
                    <img src={demo}/>
                </div>
                <div className={"toggle-buttons"}>

                </div>
                <div className={"likers"}>
                    0 명이 이 글을 좋아합니다.
                </div>
                <div className={"card-content"}>
                    <b>nick name</b> 오랜만에 세차~ 근데 비온다며??
                </div>
                <divider></divider>
                <div className={"input-box"}>
                    <input className={"input"} type={"text"} aria-label={"댓글 달기..."}/>
                    <button className={"input-button"}>게시</button>
                </div>
            </div>
        </div>
    );
};

export default BoardMain;