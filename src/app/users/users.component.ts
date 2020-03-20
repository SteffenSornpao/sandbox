import { Component, OnInit } from "@angular/core";

import { User } from "../user";
import { UserService } from "../user.service";
import { MessageService } from "../message.service";

@Component({
  selector: "Users",
  styleUrls: ["./users.component.less"],
  templateUrl: "users.component.html"
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => (this.users = users));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.userService
      .addUser({ name } as User)
      .subscribe(user => this.users.push(user));
  }
}
