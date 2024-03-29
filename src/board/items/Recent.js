import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Recent = () => {
    const [recents, setRecents] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/posts/recent')
            .then((res) => {
                setRecents(res.data.content)
            })
            .catch((err) => {
                console.log(err.status)
            })
    },[])
    return (
        <>
            { recents.map( recent => (
                <li key={recent.postId}>
                        <Link to={`${process.env.PUBLIC_URL}/board/details/${recent.postId}`}>
                            <img className="img-fluid" src={recent.img} alt="Generic placeholder image" />
                        </Link>
                </li>
            ) )}
        </>
    );
};

export default Recent;