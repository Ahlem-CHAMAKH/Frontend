import {Component, Input} from '@angular/core';
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import {FolderStruct} from "../entity/folder-struct";


@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent  {
@Input("tree")  TREE_DATA: FolderStruct | undefined
  treeControl = new NestedTreeControl<FolderStruct>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FolderStruct>();
  constructor() {
    // @ts-ignore
    this.dataSource.data = this.TREE_DATA?.children;
  }
  hasChild =true;



}
