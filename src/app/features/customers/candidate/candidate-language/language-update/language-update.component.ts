import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateLanguage } from 'src/app/models/candicated/candidate-language/candidate-language';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { Language } from 'src/app/models/language/language';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-language-update',
  templateUrl: './language-update.component.html',
  styleUrls: ['./language-update.component.css']
})
export class LanguageUpdateComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

}
