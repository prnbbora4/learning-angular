import { Component } from "@angular/core";
import { Topbar } from "../../components/topbar/topbar.component";
import { Hero } from "../../components/hero/hero.component";
import { Team } from "../../components/team/team.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [Topbar, Hero, Team],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
