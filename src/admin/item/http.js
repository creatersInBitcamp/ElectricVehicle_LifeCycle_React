import axios from "axios";
import {AWS_PATH} from '../../api/key'

export default axios.create({
    baseURL: `${AWS_PATH}/`,
    mode: 'no-cors'
});