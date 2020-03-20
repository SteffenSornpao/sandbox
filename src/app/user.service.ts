import { Injectable } from "@angular/core";
import { User, USERS } from "./user";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getUsers(): Observable<User[]> {
    this.messageService.add("UserService: Users fetched");
    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(_ => this.log("Users fetched")),
      catchError(this.handleError<User[]>("getUsers", []))
    );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    // this.messageService.add(`UserService: Fetched User-${id}`);
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`User-${id} fetched`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private usersUrl = "api/users";

  // * Log UserService message with MessageService
  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }
}
