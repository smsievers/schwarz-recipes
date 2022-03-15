import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is just a test.', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2.cdn.turner.com%2Fmoney%2Fdam%2Fassets%2F160602080907-walmart-smiley-returns-340xa.jpg&imgrefurl=https%3A%2F%2Fmoney.cnn.com%2F2016%2F06%2F02%2Fnews%2Fcompanies%2Fwalmart-smiley%2Findex.html&tbnid=jAT88jm7GpxS0M&vet=12ahUKEwj40unBi8n2AhV1B50JHddkBNYQMygAegUIARDgAQ..i&docid=txB6LFrL3RpL7M&w=340&h=340&q=walmart%20smiley%20face&ved=2ahUKEwj40unBi8n2AhV1B50JHddkBNYQMygAegUIARDgAQ'),
    new RecipeModel('A Test Recipe', 'This is just a test.', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2.cdn.turner.com%2Fmoney%2Fdam%2Fassets%2F160602080907-walmart-smiley-returns-340xa.jpg&imgrefurl=https%3A%2F%2Fmoney.cnn.com%2F2016%2F06%2F02%2Fnews%2Fcompanies%2Fwalmart-smiley%2Findex.html&tbnid=jAT88jm7GpxS0M&vet=12ahUKEwj40unBi8n2AhV1B50JHddkBNYQMygAegUIARDgAQ..i&docid=txB6LFrL3RpL7M&w=340&h=340&q=walmart%20smiley%20face&ved=2ahUKEwj40unBi8n2AhV1B50JHddkBNYQMygAegUIARDgAQ')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
