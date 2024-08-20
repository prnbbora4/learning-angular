import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Topbar } from "../../components/topbar/topbar.component";
import { Blogs } from "../../interfaces/blogs";
import { BlogServiceService } from "../../services/blog-service.service";

@Component({
  selector: "app-blog-details",
  standalone: true,
  imports: [Topbar],
  templateUrl: "./blog-details.component.html",
  styleUrl: "./blog-details.component.css",
})
export class BlogDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  private blogId: number = 0;
  private blogService: BlogServiceService = inject(BlogServiceService);
  blog_details: Blogs | undefined;

  constructor() {
    this.blogId = this.route.snapshot.params["id"];
    this.blog_details = this.blogService.getBlogsById(Number(this.blogId));
  }
}
