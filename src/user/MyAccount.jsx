import React, {useEffect, useState} from 'react';
import {Breadcrumb} from "../common";
import {Link, useRouteMatch} from "react-router-dom";
import {RefreshInfo} from '../board/items'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MyAccount2 from "./MyAccount2";
import MyPost from "./MyPost";
import MyComment from "./MyComment";
import {MyCarRegister} from "./MyCarRegister";
import TableBookmark from "../map/items/TableBookmark";
import MyOrder from "./MyOrder";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export const MyAccount = () => {
    // const match = useRouteMatch('/pages/profile/:index').params.index

    const [value, setValue] = useState(0)
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [bookmarks, setBookmarks] = useState([])
    const [used, setUsed] = useState([])
    const [purchase, setPurchase] = useState([])
    const [userSession, setUserSession] = useState(JSON.parse(sessionStorage.getItem("user")))


    useEffect(() => {
        RefreshInfo()
        setUserSession(JSON.parse(sessionStorage.getItem("user")))
        // setValue(match)
    },[value])
    useEffect(()=> {
        setPosts(userSession.postList)
        setComments(userSession.commentList)
        setBookmarks(userSession.bookmarkList)
        setUsed(userSession.usedCarList)
        setPurchase(userSession.purchasesList)
    }, [userSession])

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
    return (
            <div>
                <Breadcrumb title={'MyAccount'}/>
                {/*Dashboard section*/}
                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="account-sidebar">
                                    <a className="popup-btn">
                                        my account
                                    </a>
                                </div>
                                <div className="dashboard-left">
                                    <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"/> back
                                    </span>
                                    </div>
                                    <div className="block-content">
                                        <Tabs
                                            orientation="vertical"
                                            variant="scrollable"
                                            value={value}
                                            onChange={handleChange}
                                            aria-label="Vertical tabs example"
                                        >
                                            <Tab label="My Account" {...a11yProps(0)} />
                                            <Tab label="My Order" {...a11yProps(1)} />
                                            <Tab label="My Car" {...a11yProps(2)} />
                                            <Tab label="My Post" {...a11yProps(3)} />
                                            <Tab label="My Comment" {...a11yProps(4)} />
                                            <Tab label="My Bookmark" {...a11yProps(5)} />
                                            <Tab label="Change Password" {...a11yProps(6)} />
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="dashboard-right">
                                    <div className="dashboard">
                                        <div className="container-fluid">
                                                <TabPanel value={value} index={0}>
                                                    <MyAccount2 user={userSession} />
                                                </TabPanel>
                                                <TabPanel value={value} index={1}>
                                                    <MyOrder/>
                                                </TabPanel>
                                                <TabPanel value={value} index={2}>
                                                    <MyCarRegister used={used}/>
                                                </TabPanel>
                                                <TabPanel value={value} index={3}>
                                                    <MyPost posts={posts}/>
                                                </TabPanel>
                                                <TabPanel value={value} index={4}>
                                                    <MyComment comments={comments}/>
                                                </TabPanel>
                                                <TabPanel value={value} index={5}>
                                                    <TableBookmark/>
                                                </TabPanel>
                                                <TabPanel value={value} index={6}>
                                                    Change password
                                                </TabPanel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    )
}

export default MyAccount