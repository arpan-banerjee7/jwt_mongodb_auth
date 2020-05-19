import { Component, OnInit } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}
  loginUser() {
    //console.log(this.loginUserData);
    this._auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this._router.navigate(["/special"]);
      },
      (err) => console.log(err)
    );
  }
}
