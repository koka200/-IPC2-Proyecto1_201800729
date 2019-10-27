import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-admin',
  templateUrl: './curso-admin.component.html',
  styleUrls: ['./curso-admin.component.css']
})
export class CursoAdminComponent implements OnInit {
  data: any[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getCursos();
  }

  getCursos(){
    this.authService.getAllCursos()
    .subscribe(response =>{
      this.data=response;
      console.log(response);
    })
  }

}
