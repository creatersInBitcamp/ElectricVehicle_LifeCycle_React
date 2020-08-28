import React, {useState} from 'react';
import {Divider} from "@material-ui/core";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {InputGroup} from "reactstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import axios from 'axios'
import {BACK_PATH} from "../../api/key";

const BoardSearch = ({searchedPosts}) => {
    const [title, setTitle] = useState("검색조건")
    const [searchWord, setSearchWord] = useState("")
    const kepressChange = event =>{
        if (event.key === 'Enter') {
            alert(`title: ${title},searchWord : ${searchWord}`)
            axios.get(`http://${BACK_PATH}/posts/search/${searchWord}`)
                .then((res)=>{
                    searchedPosts(res.data)
                })
                .catch((err)=>{
                    console.log(err.status)
                })
        }
    }
    return (
        <>
            <Container>
                <Row>
                    <Col/>
                    <Col md={"auto"}>
                    </Col>
                    <Col xs lg={3}>
                        <InputGroup>
                            <DropdownButton
                                title={title}
                                as={InputGroup.Prepend}
                                variant={"outline-secondary"}>
                                <Dropdown.Item onClick={(e) => {setTitle("title")}}>제목</Dropdown.Item>
                                <Dropdown.Item onClick={(e)=>{setTitle("content")}}>내용</Dropdown.Item>
                                <Dropdown.Item onClick={(e)=>{setTitle("userId")}}>작성자</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={(e) => {setTitle("검색조건")}}>통합검색</Dropdown.Item>
                            </DropdownButton>
                            <FormControl placeholder="Search" aria-label="Search" onChange={(e)=>{setSearchWord(e.target.value)}} onKeyPress={(e)=>{kepressChange(e)}}/>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Divider/>
        </>
    );
};

export default BoardSearch;