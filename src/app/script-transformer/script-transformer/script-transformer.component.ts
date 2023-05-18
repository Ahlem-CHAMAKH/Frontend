import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ScriptTransformerServiceService} from "../script-transformer-service.service";

@Component({
  selector: 'app-script-transformer',
  templateUrl: './script-transformer.component.html',
  styleUrls: ['./script-transformer.component.css']
})
export class ScriptTransformerComponent implements OnInit {
  form!: UntypedFormGroup;
  selectedFile: File = new File([], 'file');
  notValidExtension: Boolean = true;
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  thirdFormGroup: FormGroup = this._formBuilder.group({thirdCtrl: ['']});
  forthFormGroup: FormGroup = this._formBuilder.group({forthCtrl: ['']});
  userFormGroup: FormGroup = this._formBuilder.group({userCtrl: ['']});

  constructor(private service:ScriptTransformerServiceService,private _formBuilder: FormBuilder) {

    this.form = new UntypedFormGroup({
      BaseDeDonnées: new UntypedFormControl('', Validators.required),
      DSUtilisateur: new UntypedFormControl('', Validators.required),
      HistoriqueUtilisateur: new UntypedFormControl('', Validators.required)});
  }

  onFileSelected(event:any): void {
    this.selectedFile = event.target.files[0];
  }

  transformer(){

  }
  downloadFile() {
   /* let formData=new FormData();
    formData.append("file",this.selectedFile);
    this.service.getResult(formData).subscribe(response => {
          const blob = new Blob([response.], { type: 'application/octet-stream' });
          const url = window.URL.createObjectURL(blob);
          const anchor = document.createElement('a');
          anchor.download = 'file.pdf';
          anchor.href = url;
          anchor.click();
          window.URL.revokeObjectURL(url);
        }, error => {
         // this.snackBar.open('Failed to download file', 'Close', { duration: 3000 });
        });*/
  }
  ngOnInit(): void {
  }

  reset() {

  }

}
