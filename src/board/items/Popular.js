import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Popular = () => {
    const [populars, setPopulars] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/posts/popular')
            .then((res) => {
                setPopulars(res.data.content)
            })
            .catch((err) => {
                console.log(err.status)
            })
    },[])
    return (
        <>
            { populars.map(popular => (
                <li key={popular.postId}>
                    <div className="media" >
                        <Link to={`${process.env.PUBLIC_URL}/board/details/${popular.postId}`}>
                            <img className="img-fluid" src={popular.img} alt="Generic placeholder image" />
                        </Link>
                    </div>
                </li>
            ))}
        </>
    );
};

export default Popular;