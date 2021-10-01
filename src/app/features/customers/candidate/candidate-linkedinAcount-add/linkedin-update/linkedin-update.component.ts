import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-linkedin-update',
  templateUrl: './linkedin-update.component.html',
  styleUrls: ['./linkedin-update.component.css']
})
export class LinkedinUpdateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
