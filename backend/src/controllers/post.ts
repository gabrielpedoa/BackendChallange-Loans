import { Request, Response } from "express";
import { app } from "../server";
import existsInBody from "../ultils/existsInBody";

export interface Costumer {
  age: number;
  cpf: string;
  name: string;
  income: number;
  location: string;
}

export default (req: Request, res: Response) => {
  const { age, cpf, name, income, location } = req.body as Costumer;
  existsInBody(age, "age");
  existsInBody(cpf, "cpf");
  existsInBody(name, "name");
  existsInBody(income, "income");
  existsInBody(location, "location");


};
