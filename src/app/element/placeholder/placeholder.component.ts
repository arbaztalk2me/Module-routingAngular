import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  @Input() show: boolean = true;
  @Input() line: number = 5;

  arr = new Array(this.line);

  constructor() {}

  ngOnInit(): void {}
}
