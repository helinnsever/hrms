import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-github-update',
  templateUrl: './github-update.component.html',
  styleUrls: ['./github-update.component.css']
})
export class GithubUpdateComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }



}
