import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private http: HttpClient, private router: Router) {}
  // login(data) {
  //   const { serverUrl } = environment;
  //   return this.http.post(`${serverUrl}/login`, data);
  // }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  searchJob(data) {
    const { serverUrl } = environment;
    return this.http.post(`${serverUrl}/api/jobs/`, data, this.httpOptions);
  }
  allJobs() {
    const { serverUrl } = environment;
    return this.http.get(`${serverUrl}/api/jobs/`, this.httpOptions);
  }
  detailJob(jobId) {
    const { serverUrl } = environment;
    return this.http.get(`${serverUrl}/api/job/${jobId}/`, this.httpOptions);
  }
  detailSearchJob(jobId, location) {
    const { serverUrl } = environment;
    const data = { location: location };
    return this.http.post(
      `${serverUrl}/api/job/${jobId}/`,
      data,
      this.httpOptions
    );
  }
}
