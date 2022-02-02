import cake from "./img/food/cake.jpg";
import pancake from "./img/food/pancake.jpg";
import fish from "./img/food/fish.jpg";
import pasta from "./img/food/pasta.jpg";
import cheese from "./img/food/cheese.jpg";
const foodList = [
  {
    name: cake,
    description:
      "A cake crafted with such expertise, it will trigger imposter syndrome for those who dare eat it. Made with: none of your business. 89.99$",
  },
  {
    name: pancake,
    description:
      "3 pancakes stacked on top of each other, glazed with belgian chocolate with white chocolate flakes sprinkled on top. Are these ingredients too little for you? Too bad. 44.99$",
  },
  {
    name: fish,
    description:
      "Exotic fish illegally purchased in order to show you that we don't mess around. Available Sides are: A teaspoon of salt, or 10 millimeters of french fries. 289.99$",
  },
  {
    name: pasta,
    description:
      "Italian red sauce spaghetti, topped with fresh basil. Serving size is 1 tablespoon. 109.99$",
  },
  {
    name: cheese,
    description: "It's just cheese but with our name plastered on it. 149.99$",
  },
];
const loadMenu = () => {
  const content = document.querySelector("#content");
  const container = document.createElement("div");
  container.className = "container";
  const menu = document.createElement("div");
  menu.classList.add("menu");
  for (let food of foodList) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");
    const foodText = document.createElement("p");
    foodText.innerText = food.description;
    const foodImg = new Image();
    foodImg.src = food.name;
    foodImg.classList.add("food-img");
    menuItem.append(foodText, foodImg);
    menu.append(menuItem);
  }
  container.appendChild(menu);
  content.appendChild(container);
};

export { loadMenu };
