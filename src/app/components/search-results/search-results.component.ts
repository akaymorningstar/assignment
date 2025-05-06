import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  @Input() query: { firstName: string; lastName: string; position: string } = {
    firstName: '',
    lastName: '',
    position: '',
  };
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      console.log("Search data: ", data);
      this.users = data;
      this.filterUsers();
    });
  }

  ngOnChanges(): void {
    this.filterUsers();
  }

  private filterUsers() {
    const { firstName, lastName, position } = this.query;
    this.filteredUsers = this.users.filter(e => {
      return (
        e.firstName.toLowerCase().includes(firstName.toLowerCase()) &&
        e.lastName.toLowerCase().includes(lastName.toLowerCase()) &&
        e.position.toLowerCase().includes(position.toLowerCase())
      );
    });
  }
}
