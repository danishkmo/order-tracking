import { createContext, useState } from "react";

export type ICreateOrder = {
    orderType: string;
    customerName: string;
    setCustomerName: (val: any) => void;
    setOrderType: (val: any) => void;
};


export const CreateOrderContext = createContext<ICreateOrder>({
    orderType: "",
    customerName: "",
    setCustomerName: (val) => { },
    setOrderType: (val) => { }
});

export const CreateOrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [customerName, setCustomerName] = useState("");
    const [orderType, setOrderType] = useState("");
    return (
        <CreateOrderContext.Provider value={{
            orderType,
            customerName,
            setCustomerName,
            setOrderType
        }}>
            {children}
        </CreateOrderContext.Provider>
    )
}

