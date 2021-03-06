import { Component, OnInit } from '@angular/core';
import { FactsFetcherService } from '../facts-fetcher.service';
import { Fact } from '../fact';



@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {

  constructor(private FactsFetcherService: FactsFetcherService) { }

  fact?: Fact

  ngOnInit(): void {
    this.getRandom();

  }
  clicks = 0;

  getRandom() {
    this.FactsFetcherService.getRandomFact()
      .subscribe(f => {
        this.fact = f;
      })
  }

  newClick() {
    this.clicks = this.clicks + 1;
  }

}
