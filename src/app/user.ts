export interface User {
  id: number;
  name: string;
}

const generateNum = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const USERS: User[] = [
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
