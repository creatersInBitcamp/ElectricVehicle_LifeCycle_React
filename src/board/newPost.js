import React, {useState} from 'react';
import './css/boardNewPost.css'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NewPost = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (

        <>
            <Button onClick={handleShow}>New Post</Button>
            <Modal
                size={'lg'}
                show={show}
                onHide={handleClose}
                backdrop={"static"}
                keyboard={false}
                centered
            >
                <Modal.Body>
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
                                <Button onClick={handleClose}>Close</Button>
                                <Button onClick={e=>{alert(`photo: ${document.getElementById('id_photo').value}, comment: ${document.getElementById('text_field').value}`)}}>Save</Button>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};
export default NewPost;