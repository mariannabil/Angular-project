import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users = [
  {
    id : 1,
    name: 'mrmr'
  },
  {
    id:2,
    name: 'marina'
  },
  {
    id : 3,
    name : 'mina'
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}
