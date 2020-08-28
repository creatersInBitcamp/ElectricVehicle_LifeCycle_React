import axios from "axios";
import {BACK_PATH} from "../../api/key";

export default axios.create({
    baseURL: `http://${BACK_PATH}/`,
    mode: 'no-cors'
});