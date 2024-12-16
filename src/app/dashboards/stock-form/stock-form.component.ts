import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stocks/stock.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-stock-form',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './stock-form.component.html',
  styleUrl: './stock-form.component.css'
})
export class StockFormComponent implements OnInit {
  stock = { stock_name: '', ticker: '', shares: 0, price: ''};
  stockPrice: number | null = null;
  stockName: String = '';
  companyName: String = "";


  constructor(private stockService: StockService) {

  }

  ngOnInit(): void {

  }

  addStock(): void {
    const newStock = {stock_name: this.companyName, ticker: this.stock.ticker, shares: this.stock.shares, price: this.stockPrice };
    this.stockService.addStock(newStock)
    .subscribe(() => {
      this.stock.stock_name = '';
      this.stock.shares = 0;
      this.stock.ticker = '';
    })
  }

  fetchStockPriceAndCompanyName(): void {
    this.stockService.getCompanyName(this.stock.ticker).subscribe(data => this.companyName = data);
    this.stockService.getStockPrice(this.stock.ticker).subscribe(data => {
      this.stockPrice = data.closePrice;
    }
      )
  }

  get stockValue(): number {
    return (this.stockPrice || 0) * (this.stock?.shares || 0);
  }

}
