import { Injectable } from '@angular/core';
import { Iname } from './data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {
 
  
  constructor() { }
  
  getRecords(): Observable<string[]> {
    const records: string[] = [];
    for(let a = 0; a < 2; a++){
      records.push('vishakha')
    }
    for(let x = 3; x < 12; x++){
      records.push('dhammpal');
    }
    for (let i = 2; i < 50; i++) {
      records.push('swati');
    }
    for(let j = 50; j < 100; j++){
      records.push('rupesh')
    }
    return of(records);
    
  }

}
