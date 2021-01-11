import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  uploadFile(formData) {
    const url = 'http://127.0.0.2:5000/predict';
    return this.http.post(url, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

}
