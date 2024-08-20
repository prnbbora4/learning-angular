import { Component, Input } from "@angular/core";
import { Blogs } from "../../interfaces/blogs";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-blogcard",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./blogcard.component.html",
  styleUrl: "./blogcard.component.css",
})
export class BlogcardComponent {
  @Input() blog!: Blogs;
}
