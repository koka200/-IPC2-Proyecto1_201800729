import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  data: any[] = [];
  RegistrarUsuario:any[] = [];
  RegistrarUsers:any[] = [];
  formRegistro: FormGroup;

  uri: string;
  Usuario: any={
    IdUsuario:0,
    Nombre:'',
    correo:'',
    Contra: '',
    Tipo:''
  }

  notificacion:any = {
    estado: false,
    mensaje: ""
  }
  notificacionError:any = {
    estado: false,
    mensaje: ""
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private activateRouter: ActivatedRoute
    ) { }

  ngOnInit() {
    this.formRegistro= new FormGroup({
      "correo":  new FormControl(''),
      "contrasena":  new FormControl(''),
      "nombre": new FormControl(''),
      "tipo": new FormControl
    })
  }

  public registrar(){
    this.formRegistro= new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'correo': new FormControl('', Validators.required),
      'contrasena': new FormControl('', Validators.required),
      'tipo': new FormControl('', Validators.required)
    });
   }

   getUsuarios(){
    this.authService.getAll()
    .subscribe(response => {
      this.data = response;
      console.log(response)
    })
  }

  public initializeAdministradores() {
    this.RegistrarUsers.splice(0);
    this.authService.getAll().subscribe(data => {
      this.RegistrarUsers = data;
      for(let x of this.RegistrarUsers) {
        if(x.IdUsuario === 1) {
          this.RegistrarUsers.push(x);
        }
      }
    });
  }

  public agregar(){
    this.authService.crear(this.formRegistro.value)
    .subscribe((response) => {
      console.log(response)
      if(response.estado){
        console.log(response.estado);
        console.log(response.mensaje);
        this.notificacion.mensaje = response.mensaje;
        this.notificacion.estado = response.estado;
        setTimeout(()=>{
           this.notificacion.mensaje = '';
           this.notificacion.estado = false;
        }, 1500);
      }else{
        this.notificacionError.mensaje = response.mensaje;
        this.notificacionError.estado = response.estado;
      }
  });
}

   regresar() {
    this.router.navigate(["/login"])
  }
}
