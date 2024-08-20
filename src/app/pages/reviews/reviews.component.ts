import { Component, inject } from "@angular/core";
import { Topbar } from "../../components/topbar/topbar.component";
import { ApiHandlerService } from "../../services/api-handler.service";

@Component({
  selector: "app-reviews",
  standalone: true,
  imports: [Topbar],
  templateUrl: "./reviews.component.html",
  styleUrl: "./reviews.component.css",
})
export class ReviewsComponent {
  reviewsList: any;
  apiHandler: ApiHandlerService = inject(ApiHandlerService);
  constructor() {
    this.getReviews();
  }

  getReviews() {
    this.apiHandler.reviews().subscribe((data) => {
      this.reviewsList = data;
    });
  }
}
