import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulos/articulo'
import { Router, ActivatedRoute } from '@angular/router';
import { ArticuloService } from '../articulos/articulo.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-codificacion',
  templateUrl: './codificacion.component.html'
})
export class CodificacionComponent implements OnInit {

  public articulo: Articulo = new Articulo();
  esAutor: boolean;
  esCoordinador: boolean;
  esEvaluador: boolean;
  public nuevoNombreArchivo: string;
  public extension: string;
  private nombreAntiguoArchivo:string

  constructor(
    private articuloService: ArticuloService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerMostrar();
    this.cargarArticulo()
  }

  cargarArticulo(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.articuloService.getArticuloCodificacion(id).subscribe(
          (articulo) => {
            this.articulo = articulo
            this.nombreAntiguoArchivo = articulo.nombre_archivo;
          }
        )
      }
    })
  }

  obtenerMostrar(){
    // autor, coordinador, evaluador
    let tipoUsuario = 'coordinador';
    this.esAutor = false;
    this.esCoordinador = false;
    this.esEvaluador = false;
    if(tipoUsuario == 'autor'){
      this.esAutor = true;
    }else if(tipoUsuario == 'coordinador'){
      this.esCoordinador = true;
    }else if(tipoUsuario == 'evaluador'){
      this.esEvaluador= true;
    }
  }

  continuar(): void{

    if(this.nombreAntiguoArchivo == this.articulo.nombre_archivo){
      this.router.navigate(['/gramaticayforma/' + this.articulo.id ])
    }else{
      this.articuloService.actualizarNombreArchivo(this.articulo).subscribe(
        json => {
          this.router.navigate(['/gramaticayforma/' + this.articulo.id ])
          swal.fire(json.cabecera, json.mensaje, 'success')
        }
      )
    }

  }

}
