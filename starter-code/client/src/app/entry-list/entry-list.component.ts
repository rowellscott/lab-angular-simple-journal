import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../journal-entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [JournalEntriesService]
})
export class EntryListComponent implements OnInit {
  entries;
  constructor(private journal: JournalEntriesService) { }

  ngOnInit() {
    this.journal.getList()
    .subscribe((entries)=>{
      this.entries = entries;
    });
  }

}
