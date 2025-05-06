import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchComponent,SearchResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  searchQuery = {
    firstName: '',
    lastName: '',
    position: ''
  };
  
  onSearch(query: any) {
    this.searchQuery = query;
  }
  
}
