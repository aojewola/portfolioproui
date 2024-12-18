import { Component, OnInit } from '@angular/core';
import { Stock } from '../../core/stock.model';
import { StockService } from '../../services/stocks/stock.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.css'
})
export class StockListComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService) {

  }

  ngOnInit(): void {
    this.loadStocks();

  }

  loadStocks(): void {
    this.stockService.getAllStocks()
    .subscribe(data => this.stocks = data);
  }

  removeStock(id: string): void {
    this.stockService.removeStock(id)
    .subscribe(() => this.loadStocks());
  }
}
