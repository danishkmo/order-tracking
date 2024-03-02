import axios from "axios";
import { BASE_URL, API_KEY } from "./constants";

export const fetchTrackingOrder = () => {
    return axios.get(BASE_URL, {
        headers: {
            ApiKey: API_KEY
        }
    })
}

export const deleteTrackingOrder = (orderId: Array<string>) => {
    return axios.post(`${BASE_URL}/Delete`, orderId, {
        headers: {
            ApiKey: API_KEY
        }
    })
}

export const createOrderTrackingOrder = (payload: Record<string, unknown>) => {
    return axios.post(`${BASE_URL}`, payload, {
        headers: {
            ApiKey: API_KEY
        }
    })
}