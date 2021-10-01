import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateSkill } from 'src/app/models/candicated/candidate-skill/candidate-skill';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { Skill } from 'src/app/models/skill/skill';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-skill-update',
  templateUrl: './skill-update.component.html',
  styleUrls: ['./skill-update.component.css']
})
export class SkillUpdateComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }

}
