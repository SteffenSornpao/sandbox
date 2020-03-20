import { InMemoryDbService } from "angular-in-memory-web-api";
import { User } from "./user";
import { Injectable } from "@angular/core";

const generateNum = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: generateNum(99999, 10000), name: `User` },
      { id: generateNum(99999, 10000), name: `User` },
      { id: generateNum(99999, 10000), name: `User` },
      { id: generateNum(99999, 10000), name: `User` },
      { id: generateNum(99999, 10000), name: `User` },
      { id: generateNum(99999, 10000), name: `User` },
      { id: generateNum(99999, 10000), name: `User` },
      { id: generateNum(99999, 10000), name: `User` },
      { id: generateNum(99999, 10000), name: `User` }
    ];
    return { users };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0
      ? Math.max(...users.map(user => user.id)) + 1
      : 10000;
  }
}
