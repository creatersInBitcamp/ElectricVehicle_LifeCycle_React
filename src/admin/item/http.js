import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/",
    headers:{ authorization: "JWT fefege..",
        Accept:  "multipart/form-data" ,
        "Content-Type": "multipart/form-data" }
});