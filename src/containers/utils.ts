import { IOrderData } from "../interface";
export const parseData = (data: IOrderData[]) => {
    return data.map(d => {
        d.id = d.orderId
        return d;
    });
}