import Category from "./Category.js"
import { data } from "./data-sub.js"


const mainCategoryBlock = document.getElementsByClassName('main-category-block')[0];

let category = new Category({ options: data, categoryIndex: 0 });
mainCategoryBlock.append(category.render());


