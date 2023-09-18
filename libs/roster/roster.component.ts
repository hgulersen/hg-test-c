import { Component, OnInit } from '@angular/core';
import { AuthorStatsService } from './roster.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
})
export class RosterComponent implements OnInit {
  authorStats: any[] = [];

  constructor(private authorStatsService: AuthorStatsService) {}

  ngOnInit(): void {
    this.authorStatsService.getAuthorStats().subscribe((data) => {
      this.authorStats = data;
    });
  }
}
