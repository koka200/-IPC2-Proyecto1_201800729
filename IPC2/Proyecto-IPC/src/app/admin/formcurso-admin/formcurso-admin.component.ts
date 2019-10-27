import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formcurso-admin',
  templateUrl: './formcurso-admin.component.html',
  styleUrls: ['./formcurso-admin.component.css']
})

export class FormcursoAdminComponent implements OnInit {
  data: any[] = [];
  RegistrarCurso:any[] = [];
  RegistrarCurse:any[] = [];
  formCrearCurso: FormGroup;

  uri: string;
  Curso: any={
    Idcurso:0,
    Nombre:'',
    seccion:'',
    estado: ''
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
    this.formCrearCurso = new FormGroup({
      "nombre": new FormControl(''),
      "codigo": new FormControl(''),
      "seccion": new FormControl(''),
      "estado": new FormControl('')
    })
  }

  public registrar(){
    this.formCrearCurso= new FormGroup({
      'codigo': new FormControl('', Validators.required),
      'nombre': new FormControl('', Validators.required),
      'seccion': new FormControl('', Validators.required),
      'estado': new FormControl('', Validators.required)
    });
   }

   getCursos(){
    this.authService.getAllCursos()
    .subscribe(response => {
      this.data = response;
      console.log(response)
    })
  }

  public initializeAdministradores() {
    this.RegistrarCurse.splice(0);
    this.authService.getAllCursos().subscribe(data => {
      this.RegistrarCurse = data;
      for(let x of this.RegistrarCurse) {
        if(x.IdUsuario === 1) {
          this.RegistrarCurse.push(x);
        }
      }
    });
  }

  public agregarCurso(){
    this.authService.crearCurso(this.formCrearCurso.value)
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

}
