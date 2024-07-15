import Category from "./Category.js"
import { data } from "./data-sub.js"


let category = new Category({ options: data, categoryIndex: 0 });
document.getElementsByClassName('main-category-block')[0].append(category.render());
