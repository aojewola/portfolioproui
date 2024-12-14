import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stocks/stock.service';

@Component({
  selector: 'app-porfolio-summary',
  standalone: true,
  imports: [],
  templateUrl: './porfolio-summary.component.html',
  styleUrl: './porfolio-summary.component.css'
})
export class PorfolioSummaryComponent  implements OnInit {
  totalValue: number = 0;

  constructor(private stockService: StockService) {

  }

  ngOnInit(): void {
    this.loadTotalValue();
    
  }

  loadTotalValue(): void {
    this.stockService.getTotalValue()
    .subscribe(value => this.totalValue = value);
  }

}
