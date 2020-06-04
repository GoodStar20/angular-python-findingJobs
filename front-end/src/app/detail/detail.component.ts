import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { JobsService } from '../services/jobs.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public searchData;
  public location;
  public resultData = { jobTitle: '', location: '', data: '' };
  constructor(
    private router: Router,
    private shardService: SharedService,
    private jobService: JobsService
  ) {
    this.searchData = this.shardService.getData();
    this.location = this.searchData.location;
  }

  ngOnInit(): void {
    const jobId = this.searchData.jobId;
    const location = this.searchData.location;
    if (jobId) {
      if (this.searchData.title) {
        this.jobService
          .detailSearchJob(jobId, location)
          .subscribe((res: any) => {
            this.resultData = res;
            console.log(this.resultData);
          });
      } else {
        this.jobService.detailJob(jobId).subscribe((res: any) => {
          this.resultData = res;
          console.log(this.resultData);
        });
      }
    } else {
      this.router.navigate(['/jobs']);
    }
  }

  public backSearch(): void {
    this.router.navigate(['/search']);
  }
  public goAllJobs(): void {
    this.shardService.saveData('title', '');
    this.shardService.saveData('location', '');
    this.router.navigate(['/jobs']);
  }
}
