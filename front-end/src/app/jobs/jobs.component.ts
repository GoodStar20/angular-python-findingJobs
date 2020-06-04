import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { JobsService } from '../services/jobs.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  public searchData;
  public location;
  public resultData = [];
  constructor(
    private router: Router,
    private shardService: SharedService,
    private jobService: JobsService
  ) {
    this.searchData = this.shardService.getData();
    this.location = this.searchData.location;
  }

  ngOnInit(): void {
    if (this.searchData.title) {
      this.jobService.searchJob(this.searchData).subscribe((res: any) => {
        this.resultData = res;
      });
    } else {
      this.jobService.allJobs().subscribe((res: any) => {
        this.resultData = res;
      });
    }
  }
  public backSearch(): void {
    this.router.navigate(['/search']);
  }
  public detailJobs(id): void {
    this.shardService.saveData('jobId', id);
    this.router.navigate(['/detail']);
  }
}
