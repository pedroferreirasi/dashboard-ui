import { Component, OnInit } from '@angular/core';
import { BodyWeight } from 'src/app/data/domain/entities/body-weight.model';
import { PageableModel } from 'src/app/data/domain/entities/Pageable.model';
import { BodyWeightService } from 'src/app/data/services/body-weight.service';

@Component({
  selector: 'app-body-weight-list',
  templateUrl: './body-weight-list.component.html',
  styleUrls: ['./body-weight-list.component.scss']
})
export class BodyWeightListComponent implements OnInit {

  listEntity: BodyWeight[] = [];

  constructor(private service: BodyWeightService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.service.findAll().subscribe((page: PageableModel<BodyWeight>) => {
      this.listEntity = page.content;
    })
  }

}
