// #docregion
import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

import { ClearanceService }  from '../clearance.service';
import { ClearanceItem }         from '../clearance-item';
import { Observable }     from 'rxjs';
import { switchMap }      from 'rxjs/operators';

@Component({
  selector: 'app-clearance-list',
  templateUrl: './clearance-list.component.html',
  styleUrls: ['./clearance-list.component.css']
})
export class ClearanceListComponent implements OnInit {
  clearanceItems$: Observable<ClearanceItem[]>;
  selectedId: number;

  // #docregion ctor
  constructor(
    private service: ClearanceService,
    private route: ActivatedRoute
  ) {}
  // #enddocregion ctor

  ngOnInit() {
    this.clearanceItems$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getClearanceItems();
      })
    );
  }
}
