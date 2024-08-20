import { Component } from "@angular/core";

@Component({
  selector: "team",
  standalone: true,
  templateUrl: "./team.component.html",
  styleUrl: "./team.component.css",
})
export class Team {
  team_members = [
    { name: "john", age: 33 },
    { name: "doe", age: 13 },
    { name: "robert", age: 23 },
    { name: "x", age: 13 },
  ];
}
