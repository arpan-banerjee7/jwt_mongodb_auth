import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventsComponent } from "./events/events.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SpecialEventsComponent } from "./special-events/special-events.component";
import { AuthGuard } from "./rout-guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "events", pathMatch: "full" },
  { path: "events", component: EventsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "special",
    component: SpecialEventsComponent,
    //canActivate: [AuthGuard],
  },
  { path: "**", redirectTo: "/login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
