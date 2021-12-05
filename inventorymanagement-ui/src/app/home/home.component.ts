import {Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  fifthcolumn:string;
  unit:String;
  tax:string;
  taxtrs:string;
  amount:string;


  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', fifthcolumn: '5', unit: '6',tax: '7',taxtrs:'8',amount:'9'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', fifthcolumn: '5', unit: '6',tax: '7',taxtrs:'8',amount:'9'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', fifthcolumn: '5', unit: '6',tax: '7',taxtrs:'8',amount:'9'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', fifthcolumn: '5',unit: '6',tax: '7',taxtrs:'8',amount:'9'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', fifthcolumn: '5',unit: '6',tax: '7',taxtrs:'8',amount:'9'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', fifthcolumn: '5',unit: '6',tax: '7',taxtrs:'8',amount:'9'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', fifthcolumn: '5',unit: '6',tax: '7',taxtrs:'8',amount:'9'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', fifthcolumn: '5',unit: '6',tax: '7',taxtrs:'8',amount:'9'},
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','fifthcolumn','unit','tax','taxrs','amount'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
