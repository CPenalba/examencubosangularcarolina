import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-detalles-cubo',
  templateUrl: './detalles-cubo.component.html',
  styleUrl: './detalles-cubo.component.css',
})
export class DetallesCuboComponent implements OnInit {
  public cubo!: Cubo;
  public comentario!: null;
  constructor(
    private _activeRoute: ActivatedRoute,
    private _service: ServiceCubos
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this._service.findCuboById(id).subscribe((result) => {
        this.cubo = result;
      });
      this._service.getComentariosCuboById(id).subscribe((result) => {
        this.comentario = result;
      });
    });
  }
}
