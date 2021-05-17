import {Component, Input, OnInit} from '@angular/core';
import {RotasService} from "../../services/rotas.service";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  displayedColumns: string[] = ['tarefa', 'equipamento', 'tipo', 'status', 'acoes'];
  dataSource: any;
  data: any;

  constructor(private rotasService: RotasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRota();
  }



  async getRota() {
    let documentId = '';
    this.route.queryParams.subscribe(async value => {
      let res: any = await this.rotasService.getRota(value.id);
      this.data = res;
      console.log(res);
      this.dataSource = new MatTableDataSource(res.tarefas);
      console.log(value);
    })
  }

}
