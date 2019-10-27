import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  data={
    usuario: '',
    contra: '',
    tipo:'' 
  }
  Login:any[] = [];
  formLogin: FormGroup;

  constructor(private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      "correo":  new FormControl(''),
      "contrasena":  new FormControl('')
    })
  }
  public login(){
   this.authService.autenticar(this.formLogin.value)
   .subscribe((response) => {
    console.log(response)
    if(response.data.tipo=="usuario") {
      this.router.navigate(["/usuario"])
    }
  }, (error) => {

  })
   
  }

  registrar() {
    this.router.navigate(["/registro"])
  }
}
