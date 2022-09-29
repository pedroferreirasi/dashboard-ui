import { Component, OnInit, Pipe } from '@angular/core';
import { BodyMeasure } from 'src/app/data/domain/entities/body-measure.model';
import { BodyMeasureService } from 'src/app/data/services/body-measure.service';
import { PageableModel } from 'src/app/data/domain/entities/Pageable.model';

@Component({
  selector: 'app-body-mesure-list',
  templateUrl: './body-mesure-list.component.html',
  styleUrls: ['./body-mesure-list.component.scss']
})
export class BodyMesureListComponent implements OnInit {

  constructor(private measureService: BodyMeasureService) { }

  listBodyMeasure: BodyMeasure[] = [];

  ngOnInit(): void {
    this.loadBodyMeasure();
  }

  loadBodyMeasure() {
    this.measureService.findAll().subscribe((dados: PageableModel<BodyMeasure>) => {
      this.listBodyMeasure = dados.content;
    });
  }

}
