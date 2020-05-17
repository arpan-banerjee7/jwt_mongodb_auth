import { Component, OnInit } from "@angular/core";
import { EventsService } from "../service/events.service";

@Component({
  selector: "app-special-events",
  templateUrl: "./special-events.component.html",
  styleUrls: ["./special-events.component.css"],
})
export class SpecialEventsComponent implements OnInit {
  specialEvents = [];
  constructor(private _eventsService: EventsService) {}

  ngOnInit() {
    this._eventsService.getSpecialEvents().subscribe(
      (res) => {
        console.log(res), (this.specialEvents = res);
      },
      (err) => console.log(err)
    );
  }
}
