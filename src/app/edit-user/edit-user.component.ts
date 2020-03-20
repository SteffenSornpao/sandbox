import { Component, OnInit, Input } from "@angular/core";
import { User } from "../user";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { UserService } from "../user.service";

@Component({
  selector: "EditUser",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.less"]
})
export class EditUserComponent implements OnInit {
  @Input() user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.userService.getUser(id).subscribe(user => (this.user = user));
  }

  goBack(): void {
    this.location.back();
  }
}
