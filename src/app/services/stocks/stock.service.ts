import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../../core/stock.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiUrl = 'http://localhost:8080/api/portfoliopro/v1/stocks'

  constructor(private http: HttpClient) { }

  getAllStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.apiUrl);
  }

  addStock(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.apiUrl, stock);
  }

  removeStock(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getTotalValue(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total-value`);
  }
 
}
