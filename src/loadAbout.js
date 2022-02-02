const loadAbout = () => {
  const content = document.querySelector("#content");
  const container = document.createElement("div");
  container.className = "container";
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about-div");
  const aboutUs = document.createElement("h3");
  aboutUs.innerText = "Our Story...";
  aboutDiv.append(aboutUs);
  const paragraph = document.createElement("p");
  paragraph.innerText =
    " Is that there is no story! YOU believe we have a story that will make you pity us? Sorry but, we're filthy rich and that's all there is to it. Now Leave.";
  aboutDiv.append(paragraph);
  container.append(aboutDiv);
  content.append(container);
};

export { loadAbout };
