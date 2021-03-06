import { Component, OnInit, Input } from '@angular/core';
import { FactsFetcherService } from '../facts-fetcher.service';
import { Fact } from '../fact';



@Component({
  selector: 'app-fact-adder',
  templateUrl: './fact-adder.component.html',
  styleUrls: ['./fact-adder.component.css']
})
export class FactAdderComponent implements OnInit {

  constructor(private FactsFetcherService: FactsFetcherService) { }

  ngOnInit(): void {
  }

  LastPostid?: number;
  errorMessage?: string;
  content: string = '';


  postNewFact() {
    this.FactsFetcherService.postfact(this.content)
      .subscribe({
        next: data => {
          if (data) {
            this.LastPostid = data;
          }

        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        }
      })
  }


}
