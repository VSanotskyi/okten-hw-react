import axios from "axios";

import {baseURL} from "../constants";

export const apiServices = axios.create({baseURL});

