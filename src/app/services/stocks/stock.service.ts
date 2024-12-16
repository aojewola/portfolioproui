import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PortfolioValue, Stock, StockPrice } from '../../core/stock.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiUrl = 'http://localhost:8080/api/v1/portfoliopro'

  constructor(private http: HttpClient) { }

  getAllStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.apiUrl}/stocks`);
  }

  addStock(stock: any): Observable<Stock> {
    return this.http.post<Stock>(`${this.apiUrl}/stocks`, stock);
  }

  removeStock(id: string): Observable<Stock> {
    return this.http.delete<Stock>(`${this.apiUrl}/stocks/${id}`);
  }

  getTotalValue(): Observable<PortfolioValue> {
    return this.http.get<PortfolioValue>(`${this.apiUrl}/total-value`);
  }

  getCompanyName(ticker: string): Observable<String> {
    return this.http.get<String>(`${this.apiUrl}/company-info?ticker=${ticker}`, { responseType: 'text' as 'json' });
  }

  getStockPrice(ticker: string): Observable<StockPrice> {
    return this.http.get<StockPrice>(`${this.apiUrl}/stock-price?ticker=${ticker}`);
  }

}
