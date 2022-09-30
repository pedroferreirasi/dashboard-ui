import { ActivitiesService } from './../../../data/services/activities.service';
import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/data/domain/entities/activities.model';
import { PageableModel } from 'src/app/data/domain/entities/Pageable.model';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnInit {

  listEntity: Activities[] = [];

  constructor(private service: ActivitiesService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.service.findAll().subscribe((page: PageableModel<Activities>) => {
      this.listEntity = page.content;
    })
  }

}
