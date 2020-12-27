import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showSecret = false;
  log = [];

  onToggleDetails(): void {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  getColor(item): string {
    if (this.log.length >= 5) {
      return "blue";
    } else {
      return "transparent";
    }
  }
}
