import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { JournalEntriesService } from '../journal-entries.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [JournalEntriesService]
})
export class SingleEntryComponent implements OnInit {
  entry: any;
  constructor(private journalService: JournalEntriesService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.getEntry(params['id']);
    });
  }

  getEntry(id): void{
    this.journalService.get(id)
    .subscribe((entry)=>{
      this.entry = entry;
    });
  }

}
