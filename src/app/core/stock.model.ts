//stock model definition

export interface Stock {
    id: number;
    symbol: string;
    quantity: number;
    price: number;
}


export interface StockDto {
    symbol: string;
    quantity: number;
    price: number;
}