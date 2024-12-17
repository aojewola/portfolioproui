//stock model definition

export class Stock {
  constructor(
    public id: string,
    public stockName: string,
    public ticker: string,
    public price: number,
    public shares: number,
    public totalCost: number
  ) {

  }
}

export class StockPrice {

  constructor(
    public openPrice: number,

    public closePrice: number,

    public highPrice: number,

    public lowPrice: number
  ) {

  }
}

  export class PortfolioValue {

    constructor(
      public initialPortfolioValue: number,

      public currentPortfolioValue: number
    ) {

    }
}
