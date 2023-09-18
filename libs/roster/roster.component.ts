import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorStatsService } from './roster.service';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'realworld-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [AuthorStatsService],
})
export class RosterComponent implements OnInit {
  authorStats$!: Observable<any[]>; // Declare it as an Observable

  constructor(private authorStatsService: AuthorStatsService) {}

  ngOnInit(): void {
    this.authorStats$ = this.authorStatsService.getAuthorStats(); // Assign the Observable to the property
  }
}
