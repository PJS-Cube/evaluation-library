import {IClient} from "./client";
import {IPerson} from "./person";
import {IContact} from "./contact";

export interface IPersonToContact {
  Oid?: string;

  Client?: IClient;

  Person?: IPerson;

  Contact?: IContact;
}
