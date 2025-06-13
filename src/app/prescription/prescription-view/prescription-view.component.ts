import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Precription } from '../../../models/prescription';
import { PrescriptionSearchComponent } from '../prescription-search/prescription-search.component';

@Component({
  selector: 'app-prescription-view',
  standalone: true,
  imports: [PrescriptionSearchComponent],
  templateUrl: './prescription-view.component.html',
  styleUrl: './prescription-view.component.css',
})
export class PrescriptionViewComponent implements OnInit , OnChanges {
  ngOnInit(): void {
    this.loaddata();
  }
  // ✅ Getter
  get precriptions(): Precription[] {
    return this.precriptions;
  }

  // ✅ Setter - This will trigger every time the value changes
  @Input() 
  set precriptions(value: Precription[]) {
    console.log("precriptions changed!", value?.length || 0, "items");
    this.precriptions = value;
    // this.onPrecriptionsChange(); // Custom method to handle changes
  }

  constructor(private http: HttpClient) {}
  ngOnChanges(changes: SimpleChanges): void {
    
    if(changes['precriptions']){
      console.log("precriptions changed")
    }
  }

  precriptions: Precription[] = [];
  isLoading: boolean = false;
  isError: boolean = false;
  apiUrl: string = 'http://localhost:8080/prescription/view-precriptions';
  deleteApiURL: string = 'http://localhost:8080/prescription/';
  isShowAllResults: boolean = true;

  

  loaddata() {
    if (this.isShowAllResults) {
      this.http.get<Precription[]>(this.apiUrl).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.precriptions = response;
          console.log(response);
        },

        error(error) {
          console.log(error);
        },
      });
    }
  }

  onSearchResults(searchResults: Precription[]) {
    console.log('Received search results from child:', searchResults);
    if (searchResults && searchResults.length > 0) {
      this.precriptions = searchResults;
      console.log('Table updated with search results');
      this.isShowAllResults = true;
      this.loaddata();
    } else {
      console.log('No search results found');
      this.precriptions = [];
      this.isShowAllResults = false;
      this.loaddata();
    }
  }


}
