import axios from 'axios';
import {HOST} from "../constants";

const rzhdAxios = axios.create({
	baseURL: 'https://webhook.site/741d9d4d-0615-4f85-b0b2-9cd07014de33' || HOST,
})

export {
	rzhdAxios
}
