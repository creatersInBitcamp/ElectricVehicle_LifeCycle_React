import axios from 'axios'
const sessionUser = JSON.parse(sessionStorage.getItem('user'))
const refreshUserInfo = () => {
    axios.get(`http://localhost:8080/user/getone/${sessionUser.userSeq}`)
        .then((res) => {
            console.log((res.data))
            sessionStorage.setItem('user', JSON.stringify(res.data))
        })
        .catch((err) => {
            console.log(err.status)
        })
}

export default refreshUserInfo