import React from 'react';

const Comment = ({comment}) => {
    return (
        <>
            <div className="row section-b-space">
                <div className="col-sm-12">
                    <ul className="comment-section">
                      {comment.map( item => (
                          <li key={item.commentId}>
                              <div className="media">
                                   <img src={`${process.env.PUBLIC_URL}/assets/images/avtar.jpg`}
                                        alt="Generic placeholder image"/>
                                      <div className="media-body">
                                          <h6>{item.userName} <span>( {item.date} )</span></h6>
                                              <p> { item.content } </p>
                                      </div>
                              </div>
                          </li>
                      ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Comment;