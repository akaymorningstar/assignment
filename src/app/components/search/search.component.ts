import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  firstName: string = '';
  lastName: string = '';
  position: string = '';
  @Output() searchEvent = new EventEmitter<any>();

  onSearch() {
    this.searchEvent.emit({
      firstName: this.firstName,
      lastName: this.lastName,
      position: this.position,
    });
  }

  onReset() {
    this.firstName = '';
    this.lastName = '';
    this.position = '';
    this.onSearch(); // Optional: emit empty search
  }
}
