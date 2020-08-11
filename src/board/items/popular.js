import React, {useEffect, useState} from 'react';
import axios from "axios";

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
                        <div className="blog-date">
                            <span>{popular.date}</span>
                        </div>
                        <div className="media-body align-self-center">
                            <h6>{popular.content}</h6>
                            <p>{popular.hits} hits</p>
                        </div>
                    </div>
                </li>
            ))}
        </>
    );
};

export default Popular;