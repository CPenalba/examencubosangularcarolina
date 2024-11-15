import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-cubos-marca',
  templateUrl: './cubos-marca.component.html',
  styleUrl: './cubos-marca.component.css',
})
export class CubosMarcaComponent implements OnInit {
  public cubos!: Array<Cubo>;
  public marca!: string;

  constructor(
    private _service: ServiceCubos,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.marca = params['marca'];
      this._service.getCubosMarca(this.marca).subscribe((response) => {
        console.log(response);
        this.cubos = response;
      });
    });
  }
}
