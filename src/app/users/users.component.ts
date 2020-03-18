import { Component, OnInit } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styles: [
    `
      p {
        color: green;
        span {
          color: red;
        }
      }
    `
  ]
  // styleUrls: ["./users.component.less"]
})
export class UsersComponent implements OnInit {
  user: User = {
    id: 1,
    name: "Me"
  };
  constructor() {}

  ngOnInit(): void {}
}
