import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bestSellingProducts: any[] = [];
  dailyDeals: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getBestSellingProducts().subscribe(data => {
      this.bestSellingProducts = data;
    });

    this.apiService.getDailyDeals().subscribe(data => {
      this.dailyDeals = data;
    });
  }
}
