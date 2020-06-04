import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private router: Router, private service: SharedService) {}
  public searchForm: FormGroup;
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      title: new FormControl(''),
      location: new FormControl(''),
    });
  }
  public goAllJobs(): void {
    this.router.navigate(['/jobs']);
  }
  public search() {
    this.service.saveData('title', this.searchForm.value.title);
    this.service.saveData('location', this.searchForm.value.location);
    this.router.navigate(['/jobs']);
  }
}
