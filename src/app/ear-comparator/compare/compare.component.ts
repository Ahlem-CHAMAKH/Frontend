import { HttpClient} from '@angular/common/http';
import {Component,  } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {FolderStruct} from "../entity/folder-struct";
import {UploadServiceService} from "../services/upload-service.service";
import {Folder} from "../entity/folder";


@Component({
  selector: 'app-ear-comparator',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent {
  selectedFile:File;
  file1Name: string | undefined;
  file2Name: string | undefined;
  file1: File;

  file2: File;
  [key: string]: any;
  modified: any;
  removed:any;
  added:any;
  report:any
  validFile1Extension: boolean=true;
  validFile2Extension: boolean=true;
  file:any;
  elements: string[];
  elementsString: string ;
  resultFolder: FolderStruct | undefined;
  //resultFolder: TreeNode[];
  constructor(private http: HttpClient,private router :Router,private  service: UploadServiceService
      ,private formBuilder: FormBuilder) {
    this.file1 = new File([], 'file');
    this.file2 = new File([], 'file');
    this.elementsString="";
    this.elements=[];
    this.selectedFile=new File([],'file');
    this.added="";
    this.removed="";
    this.modified="";

    //   database.dataChange.subscribe(data => this.nestedDataSource.data = data);


  }

  compare(event: { preventDefault: () => void; }){
    event.preventDefault();
    const formData = new FormData();
    formData.append('file1', this.file1);
    formData.append('file2', this.file2);
    this.service.getComparisonResult(formData).subscribe((response)=>{ // @ts-ignore
      this.resultFolder=(response as FolderStruct);
    });
  }
  // @ts-ignore
  transformData(response: Folder[]){
    return  response.map((node: Folder) => ({
      label: node.name,
      children: node.children ? this.transformData(node.children) : [], expanded:true,
    }));
  }

  file1change(event:any){
    this.file1=event;
  }

  file2change(event:any){
    this.file2=event;
  }
}