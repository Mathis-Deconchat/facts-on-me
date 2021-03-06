import { Component, OnInit } from '@angular/core';
import { FactsFetcherService } from '../facts-fetcher.service';
import { Fact } from '../fact';
@Component({
  selector: 'app-fact-all',
  templateUrl: './fact-all.component.html',
  styleUrls: ['./fact-all.component.css']
})
export class FactAllComponent implements OnInit {

  constructor(private FactsFetcherService: FactsFetcherService) { }

  arrayoffacts?: Fact[];
  ngOnInit(): void {
    this.FactsFetcherService.getAllFacts()
      .subscribe(e => {
        this.arrayoffacts = e
        console.log(e)
      })
  }

}
