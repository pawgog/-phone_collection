import { Component, OnInit } from '@angular/core';
import { DataListService } from './dataList.service';


@Component({
  selector: 'data-list',
  templateUrl: './dataList.component.html',
  styleUrls: ['./dataList.component.css'],
})
export class DataListComponent implements OnInit {

    public dataList: any;
    public searchText: string;
    public selectedItem: string;

    constructor(private dataListService: DataListService) {

    }

    ngOnInit() {
        this.getDataList();
    }

    public getDataList() {
        this.dataListService.getData()
        .subscribe((data) => {
            console.log(data);
            this.dataList = data;
        },
        error => console.log(error)
        );
    }
    public clearText() {
        this.searchText = '';
    }

    public sortData(selectedItem: string) {
      console.log(selectedItem);

      switch (selectedItem) {
        case 'producerAZ':
          this.dataList.sort((a, b) => {
            if (a.make < b.make) {
              return -1;
            }else if (a.make > b.make) {
              return 1;
            }else {
              return 0;
            }
          });
            break;
        case 'producerZA':
          const sortedProd = this.dataList.sort((a, b) => {
            if (a.make < b.make) {
              return -1;
            }else if (a.make > b.make) {
              return 1;
            }else {
              return 0;
            }
          });
          sortedProd.reverse();
            break;
        case 'modelAZ':
        this.dataList.sort((a, b) => {
          if (a.model < b.model) {
            return -1;
          }else if (a.model > b.model) {
            return 1;
          }else {
            return 0;
          }
        });
          break;
        case 'modelZA':
          const sortedModel = this.dataList.sort((a, b) => {
            if (a.model < b.model) {
              return -1;
            }else if (a.model > b.model) {
              return 1;
            }else {
              return 0;
            }
          });
          sortedModel.reverse();
            break;
        case 'internet_min_max':
        this.dataList.sort((a, b) => {
          if (Number(a.tar_data) < Number(b.tar_data)) {
            return -1;
          }else if (Number(a.tar_data) > Number(b.tar_data)) {
            return 1;
          }else {
            return 0;
          }
        });
          break;
        case 'internet_max_min':
        this.dataList.sort((a, b) => {
          if (Number(a.tar_data) < Number(b.tar_data)) {
            return 1;
          }else if (Number(a.tar_data) > Number(b.tar_data)) {
            return -1;
          }else {
            return 0;
          }
        });
          break;
        default:
          break;
    }
  }
}
