import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Topbar } from "../../components/topbar/topbar.component";
import { BlogcardComponent } from "../../components/blogcard/blogcard.component";
import { Blogs } from "../../interfaces/blogs";
import { CommonModule } from "@angular/common";
import { BlogServiceService } from "../../services/blog-service.service";

@Component({
  selector: "app-blogs",
  standalone: true,
  imports: [RouterOutlet, CommonModule, Topbar, BlogcardComponent],
  templateUrl: "./blogs.component.html",
  styleUrl: "./blogs.component.css",
})
export class BlogsComponent {
  blogLists: Blogs[] = [];
  blogService: BlogServiceService = inject(BlogServiceService);

  constructor() {
    this.blogLists = this.blogService.getBlogs() || [];
  }
}
