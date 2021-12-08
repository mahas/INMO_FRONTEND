import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloInmueble } from 'src/app/modelos/inmueble.modelo';
import { InmuebleService } from 'src/app/servicios/inmueble.service';

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'valor': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'tipoInmueble': ['', [Validators.required]],
    'tipoOferta': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'comisionVenta': ['', ],
    'comisionArriendo': ['', ],
    'propietario': ['', [Validators.required]],
    'dirPropietario': ['', [Validators.required]],
    'telPropietario': ['', [Validators.required]],
    'emailPropietario': ['', [Validators.required]],
    'youtube': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'fechaRegistro': ['', [Validators.required]]

  });

  constructor(private fb: FormBuilder,
    private servicioInmueble: InmuebleService,
    private router: Router) { }

  ngOnInit(): void {
  } 

  GuardarInmueble() {
    
    let fechaRegistro = this.fgValidador.controls["fechaRegistro"].value;
    let tipoInmueble = this.fgValidador.controls["tipoInmueble"].value;
    let tipoOferta = this.fgValidador.controls["tipoOferta"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let valor = parseInt(this.fgValidador.controls["valor"].value);
    let comisionVenta = parseInt(this.fgValidador.controls["comisionVenta"].value);
    let comisionArriendo = parseInt(this.fgValidador.controls["comisionArriendo"].value);
    let propietario = this.fgValidador.controls["propietario"].value;
    let dirPropietario = this.fgValidador.controls["dirPropietario"].value;
    let telPropietario = this.fgValidador.controls["telPropietario"].value;
    let emailPropietario = this.fgValidador.controls["emailPropietario"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let youtube = this.fgValidador.controls["youtube"].value;
    let estado = this.fgValidador.controls["estado"].value;


    
    



    let p = new ModeloInmueble();
    p.fechaRegistro = fechaRegistro;
    p.tipoInmueble = tipoInmueble;
    p.tipoOferta = tipoOferta;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.direccion = direccion;
    p.valor = valor;
    p.comisionVenta = comisionVenta;
    p.comisionArriendo = comisionArriendo;
    p.propietario = propietario;
    p.dirPropietario = dirPropietario;
    p.telPropietario = telPropietario;
    p.emailPropietario = emailPropietario;
    p.foto = foto;
    p.youtube = youtube;
    p.estado = estado;
   
    this.servicioInmueble.CrearInmueble(p).subscribe((datos: ModeloInmueble) => {
      alert("Inmueble almacenado correctamente");
      this.router.navigate(["/administracion/listar-inmuebles"]);
    }, (error: any) => {
      alert("Error almacenando el inmueble");
    })
  }

}
