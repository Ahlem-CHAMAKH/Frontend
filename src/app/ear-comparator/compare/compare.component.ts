import { HttpClient} from '@angular/common/http';
import {Component, ElementRef, Renderer2, ViewEncapsulation,} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {UploadServiceService} from "../services/upload-service.service";
import {Folder} from "../tree-nested-overview-example/tree-nested-overview-example.component";

class sourceTargetContent{
  source:string;
  target: string;

  constructor(source:any,target:any) {
    this.source=source;
    this.target=target;

  }

}
class Contents{
 name:string;
source: string;
target:string
  constructor(name:any,source:any,target:any) {
    this.name=name;
    this.source=source;
    this.target=target;

  }
}
@Component({
  selector: 'app-ear-comparator',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CompareComponent{
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
  file:any;
  resultFolder: Folder[] | undefined;

  contents: Contents[] =[];
  hasContent : boolean=false;
  constructor(private http: HttpClient,private router :Router,private  service: UploadServiceService
      ,private formBuilder: FormBuilder, private el:ElementRef) {
    this.file1 = new File([], 'file');
    this.file2 = new File([], 'file');
    this.selectedFile=new File([],'file');
  }

  showContent(event: any){
    this.contents.push( new Contents(event.name, event.source,event.target));
    console.log("contents "+event.source);
    if( event!= ''){
      this.hasContent=true;
    }
  }

  compare(event: { preventDefault: () => void; }){
    event.preventDefault();
    this.resultFolder=[];
    const formData = new FormData();
    formData.append('file1', this.file1);
    formData.append('file2', this.file2);
    this.service.getComparisonResult(formData).subscribe((response)=>{ // @ts-ignore
      let result=(JSON.parse((JSON.stringify(response))));
      this.resultFolder=result.children;
      this.contents=[];
    });
  }
  // @ts-ignore
  transformData(response: Folder[]){
    return  response.map((node: Folder) => ({
      label: node.name,
      children: node.children ? this.transformData(node.children) : [], expanded:true,
    }));
  }
  closeTab(c:Contents){
    this.RemoveElementFromArray(c.name);
  }
  RemoveElementFromArray(name:string) {
    this.contents.forEach((value, index) => {
      if (value.name == name) this.contents.splice(index, 1);
    });
  }
  file1change(event:any){
    this.file1=event;
  }

  file2change(event:any){
    this.file2=event;
  }
}
