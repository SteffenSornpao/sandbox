import { Injectable } from "@angular/core";
import { User, USERS } from "./user";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private messageService: MessageService) {}
  getUsers(): Observable<User[]> {
    this.messageService.add("UserService: Users fetched");
    return of(USERS);
  }
}
