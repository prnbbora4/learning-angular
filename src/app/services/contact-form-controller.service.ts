import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ContactFormControllerService {
  constructor() {}

  contactFormHandler(
    name: string,
    email: string,
    phone: string,
    message: string
  ) {
    console.log("submitted", { name, email, phone, message });
  }
}
