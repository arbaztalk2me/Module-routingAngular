import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home-component',
  templateUrl: './collection-home-component.component.html',
  styleUrls: ['./collection-home-component.component.css']
})
export class CollectionHomeComponentComponent implements OnInit {

  constructor() { }
  addClass="striped celled "
  
  data :any= [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Jill', age: 26, job: 'Engineer', employed: false },
    { name: 'Elyse', age: 25, job: 'Engineer', employed: true }
  ];
  headers:any = [
    { key: 'employed', label: 'Has a Job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

  ngOnInit(): void {
  }

}
