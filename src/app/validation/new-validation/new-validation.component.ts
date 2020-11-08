import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit,Inject, ViewChild } from '@angular/core';
import { event } from 'jquery';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'new-validation',
  templateUrl: './new-validation.component.html',
  styleUrls: ['./new-validation.component.css']
})
export class NewValidationComponent implements OnInit {
  form_newValidation: FormGroup;
  validFileTypes =['txt','TXT'];
  types: any =['Member','Provider','Auth','OHI','837 Inbound'];
  files: any = [];
  isSubmitted = false;
  
  constructor(private http: HttpClient,private fb: FormBuilder) { }

  ngOnInit(): void {
     this.form_newValidation = new FormGroup({
       dataType: new FormControl('', Validators.required),
       fileUpload: new FormControl('', Validators.required)        
     });
    // this.form_newValidation = this.fb.group({
    //    dataType: ['', [Validators.required]]
      
    // })
    // fileUpload: new FormControl('', Validators.required)
  }

  // Choose city using select dropdown
  changeDataType(e) {
    console.log(e);
    //console.log(this.formControls);
    console.log(this.form_newValidation);
    console.log(this.form_newValidation.valid);
    this.dataType.setValue(e.target.value, {
      onlySelf: true
    })
  }

  uploadFile(event) {
    console.log(">>>>>>>>>>" + event);
    //var ext = this.event.match(/\.([^\.]+)$/)[1];
    let fileName = event[0].name;    
    let fileEntension = fileName.split('.').pop();
    console.log(fileName + " file exten " + fileEntension);

    if (this.validFileTypes.indexOf(fileEntension) > -1) {      
      this.fileUpload.setErrors(null);
      let element = event[0];
      this.files.push(element.name)
    } else {      
      this.fileUpload.setErrors({ inValidFileType: true });      
      return;
    }
    

  }

  onSubmit() {
    
    
    this.isSubmitted = true;
    if (!this.form_newValidation.valid) {
      return false;
    } else {
      console.log("On Submit");
      console.log(this.form_newValidation);
      alert(JSON.stringify(this.form_newValidation.value))
    }
  };

  // checkifSaveEnabled() {
  //   if (this.newValidation_form.pristine || !this.newValidation_form.valid) {
  //     return true;
  //   }
  //   return false;
  // }

  deleteAttachment(index) {
    this.files.splice(index, 1);
    this.fileUpload.value='';
    this.fileUpload.setErrors({ required: true });      


  }

  get fileUpload():any {
    return this.form_newValidation.get('fileUpload');
  }
  get dataType():any {
    return this.form_newValidation.get('dataType');
  }
 // get formControls() { return this.form_newValidation.controls; }


  /////////////
  selectedFile=null;
  onFileSelected(event){
    //console.log(event);
    this.selectedFile = event.target.files[0];
  }
  onUpload(){
    const fd= new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('https://us-central1-fb-cloud-functions-demo.cloudfunctions.net/uploadFile', fd,{
      reportProgress: true,
      observe: 'events'
    })
    .subscribe(event => {
      if(event.type === HttpEventType.UploadProgress){
        console.log('Upload Process: ' + Math.round(event.loaded/event.total *100));
      }
      else if (event.type === HttpEventType.Response){
        console.log(event);
      }
      
    })

  }


}
