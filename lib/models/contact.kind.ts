import {IClient} from "./client";
import {IContact} from "./contact";

export interface IContactKind {
  Oid?: string;
  Code?: string;
  Name?: string;
  ContactKindType?: number;
  Inactive?: boolean;
  Client?: IClient;
  Contacts?: IContact[];
}
