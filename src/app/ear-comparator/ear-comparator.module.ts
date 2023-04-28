import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarComparatorRoutingModule } from './ear-comparator-routing.module';
import { CompareComponent } from './compare/compare.component';
import { DisplayComponent } from './display/display.component';
import {UploadServiceService} from "./services/upload-service.service";
import { TreeViewComponent } from './tree-view/tree-view.component';
import {MatTreeModule} from "@angular/material/tree";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import { UploadComponentComponent } from './upload-component/upload-component.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    CompareComponent,
    DisplayComponent,
    TreeViewComponent,
    UploadComponentComponent
  ],
  imports: [
    CommonModule,
    EarComparatorRoutingModule,
    MatTreeModule,
    MatProgressBarModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [UploadServiceService],
})
export class EarComparatorModule { }
