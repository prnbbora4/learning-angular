import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "topbar",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./topbar.component.html",
  styleUrl: "./topbar.component.css",
})
export class Topbar {
  public company_name = "Angular Tutorial";
}
