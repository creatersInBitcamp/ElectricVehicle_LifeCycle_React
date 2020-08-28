import axios from 'axios'
import {BACK_PATH} from "../../api/key";
const sessionUser = JSON.parse(sessionStorage.getItem('user'))
const refreshUserInfo = () => {
    axios.get(`http://${BACK_PATH}/user/getone/${sessionUser.userSeq}`)
        .then((res) => {
            console.log((res.data))
            sessionStorage.setItem('user', JSON.stringify(res.data))
        })
        .catch((err) => {
            console.log(err.status)
        })
}

export default refreshUserInfo