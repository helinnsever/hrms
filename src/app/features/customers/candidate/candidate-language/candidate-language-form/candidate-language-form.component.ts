
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateLanguage } from 'src/app/models/candicated/candidate-language/candidate-language';
import { Language } from 'src/app/models/language/language';
import { LanguageLevels } from 'src/app/models/language/languageLevels';
import { CandidateLanguageService } from 'src/app/services/candidate-language/candidate-language.service';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-candidate-language-form',
  templateUrl: './candidate-language-form.component.html',
  styleUrls: ['./candidate-language-form.component.css']
})
export class CandidateLanguageFormComponent implements OnInit {

  languages: Language[] = [];
  languageLevels=LanguageLevels;
  candidateLanguageForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private candidateLanguageService: CandidateLanguageService,
    private router: Router,
    private toastrService: ToastrService,
    private languageService: LanguageService
    
  ) {}

  ngOnInit(): void {
    this.createLanguageAddForm();
    this.getLanguages();
  
  }

  createLanguageAddForm() {
    this.candidateLanguageForm=this.formBuilder.group({
      languageId: ["",Validators.required],
     languageLevel: ["",Validators.required],
  })
}

  candidateLanguageAdd() {
    let user=JSON.parse(localStorage.getItem("user"))
    let candidateLanguage: CandidateLanguage={candidateId:user.data.id,languageId:this.candidateLanguageForm.value.languageId,languageLevel:this.candidateLanguageForm.value.languageLevel}
    if (this.candidateLanguageForm.valid) {
      this.candidateLanguageService.add(candidateLanguage).subscribe(
        (response: any) => {
          console.log(this.candidateLanguageForm.value);
          this.toastrService.success(response.message, 'Dil eklendi');
        },
        (responseError) => {
          this.toastrService.error(
            JSON.stringify(responseError.error.data.errors),
            'Doğrulama hatası'
          );
        }
      );
    } else {
      this.toastrService.error('iki kere aynı pozisyon eklenemez');
    }
  }

  getLanguages() {
    this.languageService.getLanguages().subscribe((data: any) => {
      this.languages= data.data;
    });
  }
  

}
