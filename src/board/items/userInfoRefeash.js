import axios from "axios";

const userInfoRefeash = () => {
    const userInfo = {
        userId : "tedd911",
        password : 1234
    }
        axios.post(`http://localhost:8080/user/login`, userInfo)
            .then((res) => {
                sessionStorage.setItem("user", JSON.stringify(res.data))
            })
            .catch(() => {
                window.location.reload()
            });
}
export default userInfoRefeash()
