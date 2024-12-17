import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stocks/stock.service';
import { CommonModule } from '@angular/common';
import { PortfolioValue, Stock } from '../../core/stock.model';

@Component({
  selector: 'app-porfolio-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './porfolio-summary.component.html',
  styleUrl: './porfolio-summary.component.css'
})
export class PorfolioSummaryComponent  implements OnInit {
  totalValue: number = 0;
  portfolio: Stock[] = [];
  portfolioValue: PortfolioValue = {initialPortfolioValue: 0.00, currentPortfolioValue: 0.00};

  constructor(private stockService: StockService) {

  }

  ngOnInit(): void {
    this.loadTotalValue();
    this.loadStocks();

  }

  loadStocks(): void {
    this.stockService.getAllStocks()
    .subscribe(data => this.portfolio = data);
  }

  loadTotalValue(): void {
    this.stockService.getTotalValue()
    .subscribe(value => {
      this.portfolioValue = value;
      console.log(this.portfolioValue)
    })
  }

}
