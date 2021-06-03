import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quemsomos',
  templateUrl: './quemsomos.component.html',
  styleUrls: ['./quemsomos.component.css']
})
export class QuemsomosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
