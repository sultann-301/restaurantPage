const loadHomePage = () => {
  const content = document.querySelector("#content");
  const homePageDiv = document.createElement("div");
  const restaurantTitle = document.createElement("h1");
  restaurantTitle.innerText = "Egotistical";
  const headline = document.createElement("h3");
  headline.innerText =
    "We don't need your approval on our food. It's...that good.";
  homePageDiv.append(restaurantTitle, headline);
  content.append(homePageDiv);
  loadTabMenu();
};

const loadTabMenu = () => {
  const content = document.querySelector("#content");
  const TabMenu = document.createElement("div");
  TabMenu.classList.add("tabmenu");
  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("id", "menu");
  menuBtn.classList.add("btn");
  menuBtn.innerText = "Menu";
  const contactBtn = document.createElement("button");
  contactBtn.setAttribute("id", "contact");
  contactBtn.classList.add("btn");
  contactBtn.innerText = "Contact Us";
  const aboutBtn = document.createElement("button");
  aboutBtn.setAttribute("id", "about");

  aboutBtn.classList.add("btn");
  aboutBtn.innerText = "About us";
  TabMenu.append(menuBtn, contactBtn, aboutBtn);
  content.appendChild(TabMenu);
};

export { loadHomePage };
