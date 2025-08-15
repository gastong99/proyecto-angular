import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: '../create/create.component.html',
  styleUrl: './edit.component.css',
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit{

  public url: string;
  public title: string;
  public project!: Project;
  public save_project: any;
  public status: string | undefined;
  public filesToUpload: Array<File> = [];

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ){ 
    this.url = Global.url;
    this.title = "Editar proyecto";
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this.getProject(id);
    });
  }

  getProject(id: any) {
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  onSubmit(form: any) {

    // Guardar datos básicos
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if (response.project){

          // Subir la imagen
          if (this.filesToUpload.length > 0) {
            this._uploadService.makeFileRequest(Global.url + 'upload-image/' + response.project._id, [], this.filesToUpload, 'image')
            .then((result:any) => {
                
                this.save_project = result.project;
  
                this.status = 'success';
            });
          } else {
              this.save_project = response.project;
              this.status = 'success';
          }
        } else {
            this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
