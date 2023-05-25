import { Component, OnInit } from '@angular/core';
import { MockService } from '../mock.service';
import { Iname } from '../data';
import { Observable, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  records: string[] = [];
  distinctNames: string[] = [];
  nameCounts:Map<string,number> = new Map<string,number>()

  constructor(private mockservice: MockService) { }

  ngOnInit(): void {
    this.mockservice.getRecords().pipe(
      distinctUntilChanged()
    ).subscribe((data: string[]) => {
      this.records = data;
      this.calculateDistinctNames();
    });
  }
  calculateDistinctNames(): void {
    this.distinctNames = Array.from(new Set(this.records));
    this.distinctNames.forEach(name => {
      const count = this.records.filter(record => record === name).length;
      this.nameCounts.set(name, count);
    });
  }
  
  getCellStyle(count: number | undefined): any {
    if (count !== undefined) {
      if (count > 0 && count < 3) {
        return { 'background-color': 'red' };
      } else if (count >= 3 && count < 10) {
        return { 'background-color': 'yellow' };
      } else if (count >= 10) {
        return { 'background-color': 'green' };
      }
    }
  
    return {};
  }
}