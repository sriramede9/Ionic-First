import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-testone",
  templateUrl: "./testone.page.html",
  styleUrls: ["./testone.page.scss"],
})
export class TestonePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onClick() {
    console.log("Button Clicked!");

    this.router.navigate(["/tab/tabs/tab1"]);
  }
}
