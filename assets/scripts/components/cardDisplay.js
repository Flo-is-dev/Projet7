// * GERE L AFFICHAGE DES CARDS

const cardDisplayHtml = (recipe) => {
  const cardSection = document.querySelector(".card-section");
  //   const cardContainer = document.createElement("div");
  //   cardContainer.classList.add("card-container");
  //   cardSection.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("card");
  cardSection.appendChild(card);

  const cardTop = document.createElement("div");
  cardTop.classList.add("card-top");
  card.appendChild(cardTop);

  cardTop.innerHTML = /*html*/ ` <img src="./assets/img/${recipe.image}" alt="image de ${recipe.name}" />
                                <span class="timer">${recipe.time}min</span>`;

  const cardBottom = document.createElement("div");
  cardBottom.classList.add("card-bottom");
  card.appendChild(cardBottom);

  const headingH2 = document.createElement("h2");
  headingH2.innerText = `${recipe.name}`;
  cardBottom.appendChild(headingH2);

  const cardInfoTop = document.createElement("div");
  cardInfoTop.classList.add("card-info-top");
  cardBottom.appendChild(cardInfoTop);

  cardInfoTop.innerHTML = /*html*/ `<span class="sub-title">RECETTE</span>
                                    <p class="no-active-menu">${recipe.description}</p>`;

  const cardInfoBottom = document.createElement("div");
  cardInfoBottom.classList.add("card-info-bottom");
  cardBottom.appendChild(cardInfoBottom);

  cardInfoBottom.innerHTML = /*html*/ `<span class="sub-title">Ingrédients</span>`;

  const productContainer = document.createElement("div");
  productContainer.classList.add("product-container");
  cardInfoBottom.appendChild(productContainer);

  let productsData = [];
  const productsDataLoop = () => {
    for (let j = 0; j < recipe.ingredients.length; j++) {
      let { ingredient, quantity, unit } = recipe.ingredients[j];
      // utilisation de destructuring
      let unitString;

      if (quantity && unit) {
        unitString = `${quantity}${unit}`;
      } else if (quantity) {
        unitString = `${quantity}`;
      } else {
        unitString = ``;
      }

      productsData.push({
        name: `${ingredient}`,
        quantity: unitString,
      });
    }
    // console.log(productsData);
    return productsData;
  };

  productsDataLoop();

  productsData.forEach((item) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productName = document.createElement("h3");
    productName.textContent = item.name;

    const productQuantity = document.createElement("p");
    productQuantity.textContent = item.quantity;

    productCard.appendChild(productName);
    productCard.appendChild(productQuantity);

    productContainer.appendChild(productCard);
  });
};
for (let i = 0; i < recipes.length; i++) {
  cardDisplayHtml(recipes[i]);
}

const cardDisplayHtmlError = () => {
  const cardSection = document.querySelector(".card-section");
  cardSection.innerText = "Aucun Résultat trouvé";
};

const cardDisplayHtmlShort = () => {
  const cardSection = document.querySelector(".card-section");
  cardSection.innerText = "Veuillez enter au moins 3 lettres";
};
