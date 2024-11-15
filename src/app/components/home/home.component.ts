import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public cubos!: Array<Cubo>;

  constructor(private _service: ServiceCubos) {}

  getCubos(): void {
    this._service.getCubos().subscribe((response) => {
      this.cubos = response;
    });
  }

  ngOnInit(): void {
    this.getCubos();
  }
}
