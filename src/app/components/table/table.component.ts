import {Component, Input, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import {ExportToCsv} from 'export-to-csv';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;
  @Input() data: any;

  public showSpinner = false;

  constructor() {
  }

  ngOnInit() {
  }

  export() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('table'));
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'export-data.xlsx');
    // Csv exporter
        // const data = this.data;
    //
    // const options = {
    //   fieldSeparator: '',
    //   quoteStrings: '',
    //   decimalSeparator: 'locale',
    //   filename: 'export-csv',
    //   showLabels: true,
    //   showTitle: true,
    //   title: 'My Awesome CSV',
    //   useTextFile: false,
    //   useBom: true,
    //   useKeysAsHeaders: true,
    //   // headers: ['Name', 'Address', 'Country', 'Postal Code', 'Phone', 'Website']
    // };
    //
    // const csv = new ExportToCsv(options);
    //
    // data.forEach(el => {
    //   delete el.search;
    // });
    //
    // csv.generateCsv(data);
    // this.showSpinner = false;
  }
}
