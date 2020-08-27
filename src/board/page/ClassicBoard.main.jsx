import React, {useEffect, useState} from 'react';
import {Breadcrumb} from "../../common";
import {Recent, Media, Popular} from "../items";
import {Link, useRouteMatch} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "@material-ui/lab/Pagination";
import {makeStyles} from '@material-ui/core/styles'
import axios from "axios";
import {InputGroup} from "reactstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import {Divider} from "@material-ui/core";
import {AWS_PATH} from '../../api/key'

const initialUser = JSON.parse(sessionStorage.getItem('user'))

const useStyles = makeStyles((theme) => ({
    pagination: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const ClassicBoardMain = () => {
        const classes = useStyles()
        const [posts, setPosts] = useState([])
        const [user, setUser] = useState(initialUser)
        const match = useRouteMatch('/board/main/:category').params.category
        const [page, setPage] = useState(1)
        const [count, setCount] = useState(10)
        const [title, setTitle] = useState("검색조건")
        const [searchWord, setSearchWord] = useState("")
        const [search, setSearch] = useState(false)
        const postAxios = () => {
            axios.get(`${AWS_PATH}/posts/pages/${match}/${page}`)
                .then((res) => {
                    console.log(res.data)
                    setPosts(res.data.content)
                    setCount(res.data.totalPages)
                })
                .catch((error)=> {
                    console.log(error)
                })
        }
        const handleChange = (event, value) => { (search) ? searchFun(value) : generic(value) }
        function searchFun(value){
            setPage(value)
            searchMethod()
        }
        function generic(value){
            setPage(value)
            postAxios()
        }
        useEffect(()=>{(search) ? searchMethod() : postAxios()} , [match, page])
        const searchMethod = () => {
            axios.get(`${AWS_PATH}/posts/search/${match}/${title}/${searchWord}/${page}`)
                .then((res)=>{
                    console.log(res.data)
                    setPosts(res.data.content)
                    setCount(res.data.totalPages)
                })
                .catch((err)=>{
                    console.log(err.status)
                })
        }
        const kepressChange = (event) =>{
            if (event.key === 'Enter') {
                setSearch(true)
                searchMethod()
            }
        }
        return (
            <div>
                <Breadcrumb title={'Board'}/>
                    <div className="text-md-center">
                        <h2 style={{color:'red'}}>DB 데이터 수 : {count * 8} 건</h2>
                        <h3>크롤링 데이터 출처 : EV POST, 링크주소 : https://www.evpost.co.kr/wp/</h3>
                        <h3>크롤링 후 DB에 저장하여 지속 조회되지 않습니다.</h3>
                    </div>
                {/*Blog Details section*/}

                <section className="section-b-space blog-page">
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
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-5">
                                <div className="blog-sidebar">
                                    <div className="theme-card">
                                        <h4>Recent Post</h4>
                                        <ul className="recent-blog">
                                            <Recent/>
                                        </ul>
                                    </div>
                                    <div className="theme-card">
                                        <h4>Popular Post</h4>
                                        <ul className="popular-blog">
                                            <Popular/>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-7 order-sec">
                                <div className="row blog-media">
                                    <Container>
                                        <Row>
                                            <Media posts={posts} />
                                        </Row>
                                        <Row>
                                            <Col/>
                                            <Col xs lg={2}>
                                                {(user !== null)?
                                                    (match !== 'notice')?
                                                        <Link to={`${process.env.PUBLIC_URL}/board/input/${match}`}><button className="btn btn-solid">글쓰기</button></Link>:""
                                                    :
                                                    (match === 'notice')? "":
                                                <button className="btn btn-solid" onClick={(e)=>{alert('로그인이 필요합니다.')}}>글쓰기</button>
                                                }
                                            </Col>
                                        </Row>
                                        <Row>
                                           <Col md={{ span: 6, offset: 3 }}>
                                                <Pagination
                                                    size="large"
                                                    className={classes.pagination}
                                                    variant={"outlined"}
                                                    count={count}
                                                    page={page}
                                                    onChange={handleChange} />
                                           </Col>
                                        </Row>
                                        <Row>
                                        </Row>
                                    </Container>
                                    {/*<MediaTable/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
}

export default ClassicBoardMain