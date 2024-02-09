import axios from "axios";
import {urls} from "../constants/urls";

export const apiServices = axios.create({baseURL: urls.cars.base_URL});
