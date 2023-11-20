import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/advert-location.service';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';
import { SuccessMessageToggleService } from 'src/app/services/success-message-toggle.service';

@Component({
  selector: 'app-popup-create-content',
  templateUrl: './popup-create-content.component.html',
  styleUrls: ['./popup-create-content.component.scss'],
})
export class PopupCreateContentComponent {
  @ViewChild('selectedDistrict')
  selectedDistrict!: ElementRef<HTMLSelectElement>;
  @ViewChild('selectedNeighbourhood')
  selectedNeighbourhood!: ElementRef<HTMLSelectElement>;
  @ViewChild('selectedCity')
  selectedCity!: ElementRef<HTMLSelectElement>;
  @Input()
  popup!: { status: boolean; type: string; target: string };
  header!: string;
  gender!: string;
  cities: string[] = [];
  districts: string[] = [];
  neighbourhoods: string[] = [];
  errorMessage: string = '';
  selectedFiles: FormData = new FormData();
  previewedImages: string[] = [];

  constructor(
    private locationService: LocationService,
    private httpService: HttpService,
    private router: Router,
    private popupService: PopupService,
    private successMessageToggleService: SuccessMessageToggleService,
    private http: HttpClient
  ) {}

  reloadCurrentRoute() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/adverts']);
    });
  }
  onSubmit(form: NgForm) {
    form.value.city = this.selectedCity.nativeElement.value;
    form.value.district = this.selectedDistrict.nativeElement.value;
    form.value.neighbourhood = this.selectedNeighbourhood.nativeElement.value;
    form.value.floorArea = +form.value.floorArea;
    form.value.rooms = +form.value.rooms;
    console.log(form.value);

    let data = {
      header: form.value.header,
      description: form.value.description,
      location: {
        city: form.value.city,
        district: form.value.district,
        neighbourhood: form.value.neighbourhood,
      },
      floorArea: form.value.floorArea,
      rooms: form.value.rooms,
      price: form.value.price,
    };

    /*this.httpService.createHttpRequest('api/adverts', 'POST', data)?.subscribe(
      (res) => {
        console.log(res);
        this.errorMessage = '';
        this.successMessageToggleService.openMessageBox(
          'You registered successfully!'
        );
        // close popup
        this.popupService.changePopupStatus(false, '-', '-');
        this.reloadCurrentRoute();
      },
      (error) => {
        console.log(error);
        /*if (error.status == 400) {
            this.errorMessage = 'Not valid!';
          }
      }
    );*/

    /************************************/
    if (this.selectedFiles.has('files')) {
        this.httpService.createHttpRequest('api/adverts/upload','POST',this.selectedFiles)
        ?.subscribe( (res) => {
          console.log(res);
    
        },
        (error) => {
    
          console.log(error);
        });
      }

   /* this.httpService
    .createHttpRequest('api/adverts/upload', 'POST', formData)
    ?.subscribe(
      (res) => {
        console.log(res);

      },
      (error) => {

        console.log(error);
      }
    );*/
  
    /*if (this.selectedFile) {
      this.uploadService.uploadFile(this.selectedFile).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.progress = Math.round((event.loaded / event.total) * 100);
            break;
          case HttpEventType.Response:
            console.log('File uploaded successfully!');
            this.selectedFile = null;
            this.progress = 0;
            break;
        }
      });
    }*/
  }
  async ngOnInit() {
    this.cities = await this.locationService.getAllCities();
  }
  async selectCity(event: Event) {
    let selectedCity = (event.target as HTMLInputElement).value.toString();
    this.neighbourhoods = [];
    if (selectedCity.length == 0) {
      this.districts = [];
    } else {
      this.districts = await this.locationService.getAllDistricts(selectedCity);
    }
  }

  async selectDistrict(event: Event) {
    let selectedDistrict = (event.target as HTMLInputElement).value.toString();
    if (selectedDistrict.length == 0) {
      this.neighbourhoods = [];
    } else {
      this.neighbourhoods = await this.locationService.getAllNeighbourhoods(
        selectedDistrict
      );
    }
  }
  async selectNeighbourhood(event: Event) {
    let selectedNeighbourhood = (
      event.target as HTMLInputElement
    ).value.toString();
  }
  selectGender(event: Event) {
    this.gender = (event.target as HTMLInputElement).value.toString();
  }

  onSelectFile(event: any) {

    let files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.readAsDataURL(files[i]);

      reader.onload = (_event) => {
        // Process each file here
        this.previewedImages.push(reader.result as string);
        console.log(this.previewedImages)
       // const url = reader.result as string;
       // console.log('File URL:', url);
      };
    }
    //this.files = event.target.files;
//console.log(this.files)
    /*for (const file of this.files) {
      this.selectedFiles.append('files', file);
    }*/
    
  }
  /*var upload = document.getElementById('upload');

function onFile() {
    var me = this,
        file = upload.files[0],
        name = file.name.replace(/\.[^/.]+$/, '');

    if (file.type === '' ||
        file.type === 'audio/mp3' ||       
        file.type === 'file/text' ||
        file.type === 'audio/mpeg' ||
        file.type === 'audio/wav' ||
        file.type === 'audio/x-wav' ||
        file.type === 'audio/wave' ||
        file.type === 'audio/x-pn-wav') {
        if (file.size < (3000 * 1024)) {
            upload.parentNode.className = 'area uploading';
        } else {
            window.alert('File size is too large, please ensure you are uploading a file of less than 3MB');
        }
    } else {
        window.alert('File type ' + file.type + ' not supported');
    }
}
*/
}
