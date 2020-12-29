import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test",
      "Desc test",
      "https://cleanfoodcrush.com/wp-content/uploads/2018/08/Clean-Sweet-Paprika-Chicken-Cauli-22Rice22-Bowls-Recipes-1024x683.jpg"
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
