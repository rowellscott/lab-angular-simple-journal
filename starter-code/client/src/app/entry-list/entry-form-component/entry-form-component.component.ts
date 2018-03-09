import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from 'app/journal-entries.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-entry-form-component',
  templateUrl: './entry-form-component.component.html',
  styleUrls: ['./entry-form-component.component.css'],
  providers: [JournalEntriesService]
})
export class EntryFormComponentComponent implements OnInit {
  form: any;
  isVisible: boolean = true;
  title;
  content;
  constructor(private journalService: JournalEntriesService, private router: Router) { }
  
  ngOnInit() {
  }

  toggleVis(){
    this.isVisible=!this.isVisible;
   
  }

  submitForm(myForm){
    console.log(myForm)
    this.journalService.add({title: this.title, content: this.content })
    .subscribe(()=> {
      this.router.navigate(['']);
    });
    this.title="";
    this.content=""

  }
}
