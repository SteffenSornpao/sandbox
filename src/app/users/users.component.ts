import { Component, OnInit } from "@angular/core";
import { User, USERS } from "../user";

@Component({
  selector: "Users",
  styleUrls: ["./users.component.less"],
  // styles: [
  //   `
  //     p {
  //       color: green;
  //       span {
  //         color: red;
  //       }
  //     }
  //   `
  // ],
  templateUrl: "users.component.html"
  // template: `
  //   <ul>
  //     <li *ngFor="let user of users" (click)="onSelect(user)">
  //       <h2>{{ user.id }} - {{ user.name }}</h2>
  //       <div>
  //         <input [(ngModel)]="user.id" placeholder="id" />
  //         <br />
  //         <input [(ngModel)]="user.name" placeholder="name" />
  //       </div>
  //     </li>
  //   </ul>
  // `
})
export class UsersComponent implements OnInit {
  users = USERS;
  selectedUser: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  constructor() {}

  ngOnInit(): void {}
}
