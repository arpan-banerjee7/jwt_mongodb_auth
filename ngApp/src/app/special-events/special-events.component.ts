import { Component, OnInit } from "@angular/core";
import { EventsService } from "../service/events.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-special-events",
  templateUrl: "./special-events.component.html",
  styleUrls: ["./special-events.component.css"],
})
export class SpecialEventsComponent implements OnInit {
  specialEvents = [];
  constructor(private _eventsService: EventsService, private _router: Router) {}

  ngOnInit() {
    this._eventsService.getSpecialEvents().subscribe(
      (res) => {
        console.log(res), (this.specialEvents = res);
      },
      (err) => {
        console.log(err);
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(["/login"]);
          }
        }
      }
    );
  }
}
