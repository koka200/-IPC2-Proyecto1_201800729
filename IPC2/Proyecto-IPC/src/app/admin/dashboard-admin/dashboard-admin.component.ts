import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  regresar() {
    this.router.navigate(["/login"])
  }

}
