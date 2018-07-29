import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../angularMaterial.module';

import { DataListService } from './dataList.service';

import { DataListComponent } from './dataList.component';
import { SearchDataPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ],
  declarations: [
    DataListComponent,
    SearchDataPipe
  ],
  providers: [
    DataListService
  ],
  exports: [
    DataListComponent,
    AngularMaterialModule
  ]
})
export class DataListModule { }
