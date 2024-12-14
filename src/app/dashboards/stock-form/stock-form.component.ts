import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stocks/stock.service';
import { Stock} from '../../core/stock.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stock-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './stock-form.component.html',
  styleUrl: './stock-form.component.css'
})
export class StockFormComponent implements OnInit {
  symbol: string = '';
  quantity: number = 0;
  price: number = 0;

  constructor(private stockService: StockService) {

  }

  ngOnInit(): void {
    
  }

  addStock(): void {
    const newStock: Stock = { id: 2, symbol: this.symbol, quantity: this.quantity, price: this.price };
    this.stockService.addStock(newStock)
    .subscribe(() => {
      this.symbol = '';
      this.quantity = 0;
    })
  }
}
