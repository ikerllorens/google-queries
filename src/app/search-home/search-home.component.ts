import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from '../search-service.service';
import {forEach} from '@angular/router/src/utils/collection';

class SearchResult {
  name: string;
  type: Array<string>;
  description: string;
  contentUrl: string;
  url: string;
}

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent implements OnInit {

  public Results: Array<SearchResult>;

  constructor(private searchService: SearchServiceService) { }

  ngOnInit() {

  }

  public searchInput(event) {
    this.searchService.searchFor(event.target.value).subscribe((response: Object) => {
      this.Results = [];
      let objects = response['itemListElement'] as Array<Object>;
      console.log((objects.length));

      for (let i = 0; i < objects.length; i++) {
        const object = objects[i] as Object;
        const res = object['result'];

        const element = new SearchResult();
        element.name = res['name'];
        element.description = res['description'];

        this.Results.push(element);
      }
    });
  }
}

