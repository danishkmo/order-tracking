export interface IOrderData {
    id?: string;
    orderId: string;
    createdDate: string;
    createdByUserName: string;
    orderType: string;
    customerName: string;
}

export interface IOrderTypeDropdown {
    selectedType: string;
    setSelectedType: (val: string) => void;
    noneOption?: boolean;
    width?: string
}