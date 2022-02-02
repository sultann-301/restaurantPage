const loadContact = () => {
  const content = document.querySelector("#content");
  const container = document.createElement("div");
  container.className = "container";
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-div");
  const title = document.createElement("h3");
  title.innerText = "Oh you want to get in touch?";
  contactDiv.append(title);
  const rejectionParagraph = document.createElement("p");
  rejectionParagraph.innerText =
    "Unfortunately, we do not interact with the likes of you. Farewell, peasant.";
  contactDiv.append(rejectionParagraph);
  container.append(contactDiv);
  content.append(container);
};

export { loadContact };
