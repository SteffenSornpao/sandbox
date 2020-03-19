import { Component, OnInit, Input } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "EditUser",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.less"]
})
export class EditUserComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit(): void {}
}
