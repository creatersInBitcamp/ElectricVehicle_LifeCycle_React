import axios from 'axios'
import {AWS_PATH} from '../../api/key'
const sessionUser = JSON.parse(sessionStorage.getItem('user'))
const refreshUserInfo = () => {
    axios.get(`${AWS_PATH}/user/getone/${sessionUser.userSeq}`)
        .then((res) => {
            sessionStorage.setItem('user', JSON.stringify(res.data))
        })
        .catch((err) => {
            console.log(err.status)
        })
}

export default refreshUserInfo