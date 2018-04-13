import { Requirements } from "./Requirements";

export interface Order {

  "id": number,
  "managerName": string,
  "organization": string,
  "numberOfAthlets": number,
  "requirements": Requirements,
  "country": string,
  "status": string

}