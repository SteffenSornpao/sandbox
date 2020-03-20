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

  private usersUrl = "api/users";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

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

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`User-${newUser.id} added`)),
      catchError(this.handleError<User>("addUser"))
    );
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      tap(_ => this.log(`User-${user.id} updated`)),
      catchError(this.handleError<any>("updateUser"))
    );
  }

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === "number" ? user : user.id;
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`User-${id} deleted`)),
      catchError(this.handleError<User>("deleteUser"))
    );
  }

  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) return of([]);
    return this.http
      .get<User[]>(`${this.usersUrl}/?name=${term}`)
      .pipe(
        tap(
          x =>
            x.length
              ? this.log(`Found users matching ${term}`)
              : this.log(`No users matching ${term}`),
          catchError(this.handleError<User[]>("searchUsers", []))
        )
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  // * Log UserService message with MessageService
  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }
}
