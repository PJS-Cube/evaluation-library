import { IPerson } from "./person";
export interface IClient {
    Oid?: string;
    Name?: string;
    Person?: IPerson;
}
