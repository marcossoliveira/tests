import { Component, OnInit } from '@angular/core';
import {RotasService} from "../../services/rotas.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rotas',
  templateUrl: './rotas.component.html',
  styleUrls: ['./rotas.component.scss']
})
export class RotasComponent implements OnInit {

  displayedColumns: string[] = ['rota', 'auditorias', 'coletas', 'os', 'status', 'acoes'];
  dataSource: any;

  constructor(private rotasService: RotasService, private router: Router) { }

  ngOnInit(): void {
    this.getRotas();
  }



  async getRotas() {
    let res = await this.rotasService.getRotas();
    console.log(res);
    this.dataSource = new MatTableDataSource(res);
  }

}
