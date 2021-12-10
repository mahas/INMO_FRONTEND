import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloInmueble } from 'src/app/modelos/inmueble.modelo';
import { InmuebleService } from 'src/app/servicios/inmueble.service';

@Component({
  selector: 'app-editar-inmueble',
  templateUrl: './editar-inmueble.component.html',
  styleUrls: ['./editar-inmueble.component.css']
})
export class EditarInmuebleComponent implements OnInit {
id:string = '';
  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'valor': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'tipoInmueble': ['', [Validators.required]],
    'tipoOferta': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'comisionVenta': ['', [Validators.required]],
    'comisionArriendo': ['', [Validators.required]],
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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarInmueble();
  }

  BuscarInmueble(){
    this.servicioInmueble.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloInmueble) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["valor"].setValue(datos.valor);
      this.fgValidador.controls["foto"].setValue(datos.foto);
      this.fgValidador.controls["tipoInmueble"].setValue(datos.foto);
      this.fgValidador.controls["tipoOferta"].setValue(datos.foto);
      this.fgValidador.controls["descripcion"].setValue(datos.foto);
      this.fgValidador.controls["direccion"].setValue(datos.foto);
      this.fgValidador.controls["comisionVenta"].setValue(datos.foto);
      this.fgValidador.controls["comisionArriendo"].setValue(datos.foto);
      this.fgValidador.controls["propietario"].setValue(datos.foto);
      this.fgValidador.controls["dirPropietario"].setValue(datos.foto);
      this.fgValidador.controls["telPropietario"].setValue(datos.foto);
      this.fgValidador.controls["emailPropietario"].setValue(datos.foto);
      this.fgValidador.controls["youtube"].setValue(datos.foto);
      this.fgValidador.controls["estado"].setValue(datos.foto);
      this.fgValidador.controls["fechaRegistro"].setValue(datos.foto);
      
    });
  }

  EditarInmueble() {
    let nombre = this.fgValidador.controls["nombre"].value;
    let valor = parseInt(this.fgValidador.controls["valor"].value);
    let foto = this.fgValidador.controls["foto"].value;
    let tipoInmueble = this.fgValidador.controls["tipoInmueble"].value;
    let tipoOferta = this.fgValidador.controls["tipoOferta"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let comisionVenta = parseInt(this.fgValidador.controls["comisionVenta"].value);
    let comisionArriendo = parseInt(this.fgValidador.controls["comisionArriendo"].value);
    let propietario = this.fgValidador.controls["propietario"].value;
    let dirPropietario = this.fgValidador.controls["dirPropietario"].value;
    let telPropietario = this.fgValidador.controls["telPropietario"].value;
    let emailPropietario = this.fgValidador.controls["emailPropietario"].value;
    let youtube = this.fgValidador.controls["youtube"].value;
    let estado = this.fgValidador.controls["estado"].value;
    let fechaRegistro = this.fgValidador.controls["fechaRegistro"].value;
   
   
    let p = new ModeloInmueble();
    p.fechaRegistro = fechaRegistro;
    p.nombre = nombre;
    p.valor = valor;
    p.foto = foto;
    p.tipoInmueble = tipoInmueble;
    p.tipoOferta = tipoOferta;
    p.descripcion = descripcion;
    p.direccion = direccion;
    p.comisionVenta = comisionVenta;
    p.comisionArriendo = comisionArriendo;
    p.propietario = propietario;
    p.dirPropietario = dirPropietario;
    p.telPropietario = telPropietario;
    p.emailPropietario = emailPropietario;
    p.youtube = youtube;
    p.estado = estado;
    p.id = this.id;
    this.servicioInmueble.ActualizarInmueble(p).subscribe((datos: ModeloInmueble) => {
      alert("Inmueble actualizado correctamente");
      this.router.navigate(["/administracion/listar-inmuebles"]);
    }, (error: any) => {
      alert("Error actualizando el inmueble");
    })
  }


}
