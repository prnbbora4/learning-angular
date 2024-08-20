import { Component, inject } from "@angular/core";
import { Topbar } from "../../components/topbar/topbar.component";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ContactFormControllerService } from "../../services/contact-form-controller.service";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [Topbar, ReactiveFormsModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {
  contactFormService: ContactFormControllerService = inject(
    ContactFormControllerService
  );

  contactForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    message: new FormControl(""),
  });

  onSubmit() {
    console.log(this.contactForm.value);
    this.contactFormService.contactFormHandler(
      this.contactForm.value.name || "",
      this.contactForm.value.email || "",
      this.contactForm.value.phone || "",
      this.contactForm.value.message || ""
    );
  }
}
