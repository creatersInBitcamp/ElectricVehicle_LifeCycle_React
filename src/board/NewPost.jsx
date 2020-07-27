import React from 'react';
import './css/boardNewPost.css'

const NewPost = () => {
    return (
        <div>
            <div id="main_container">

                <div className="post_form_container">
                    <form action="#" className="post_form">
                        <div className="title">
                            NEW POST
                        </div>
                        <div className="preview">
                            <div className="upload">
                                <div className="post_btn">
                                    <div className="plus_icon">
                                        <span/>
                                        <span/>
                                    </div>
                                    <p>포스트 이미지 추가</p>
                                    <canvas id="imageCanvas"/>
                                </div>
                            </div>
                        </div>
                        <p>
                            <input type="file" name="photo" id="id_photo" required="required"/>
                        </p>
                        <p>
                    <textarea name="content" id="text_field" cols="50" rows="5" placeholder="140자 까지 등록 가능합니다.
#태그명 을 통해서 검색 태그를 등록할 수 있습니다.
예시 : I # love # insta!"/>

                        </p>
                        <input className="submit_btn" type="submit" value="저장"/>
                    </form>

                </div>

            </div>

        </div>
    );
};

export default NewPost;