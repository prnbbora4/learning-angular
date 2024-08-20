import { Routes } from "@angular/router";
import { BlogsComponent } from "./pages/blogs/blogs.component";
import { NotFound404Component } from "./pages/not-found404/not-found404.component";
import { HomeComponent } from "./pages/home/home.component";
import { BlogDetailsComponent } from "./pages/blog-details/blog-details.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ReviewsComponent } from "./pages/reviews/reviews.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "blogs", component: BlogsComponent },
  { path: "blogs/details/:id", component: BlogDetailsComponent },
  { path: "contact", component: ContactComponent },
  { path: "reviews", component: ReviewsComponent },
  { path: "**", component: NotFound404Component },
];
