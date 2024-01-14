// * GERE L ANIMATION DES TRI LISTS

const chevron = document.querySelectorAll(".tri-title i");

// console.log(chevron.classList);

const chevronToggleFunction = (e) => {
  const triContainer = e.target.closest(".tri-container");
  const triSearch = triContainer.querySelector(".tri-search");
  const triTag = triContainer.querySelector(".tri-tag");
  const triList = triContainer.querySelector(".tri-list");

  e.target.classList.toggle("fa-chevron-up");
  e.target.classList.toggle("fa-chevron-down");
  triSearch.classList.toggle("hidden-bloc");
  triTag.classList.toggle("hidden-bloc");
  triList.classList.toggle("hidden-bloc");
};

chevron.forEach((item) => {
  item.addEventListener("click", chevronToggleFunction);
});

// -------------------
// -----GESTION TAG ARRAY LIST
// -------------------

// ---affichage des cliques sur les mots clés + Gestion tableau du tableau des tag - tagArrayList

let tagArrayList = [];

// fonction qui joue l'affichage des Tris et apès la 2nd recherche
const triListElementFunction = () => {
  const triListElement = document.querySelectorAll(".tri-list > li");
  triListElement.forEach((item) => {
    item.addEventListener("click", (e) => {
      //   console.log("Test1", e.target.innerText);
      selectedBtn = e.target;

      selectedBtn.classList.toggle("selected");

      // 2)-----------si pas dans la liste, je l'ajoute, sinon je le retire
      if (!tagArrayList.includes(selectedBtn.innerText)) {
        tagArrayList.push(selectedBtn.innerText);
        displayTagElement(tagArrayList);
        // searchDisplay();
      } else if (tagArrayList.includes(selectedBtn.innerText)) {
        tagArrayList = tagArrayList.filter(
          (obj) => obj != selectedBtn.innerText
        );
        displayTagElement(tagArrayList);
        // searchDisplay();
      } else {
        console.log("ERROR: tagArrayList");
      }

      // 3)------------------- logic fonctionnement des tags
      tagRemoveFunction();
      console.log(tagArrayList);
    });
  });
};

// -------------------
// -----TAG DISPLAY
// -------------------

// fonction qui  gère l'affichage des tags
const displayTagElement = (tagArrayList) => {
  const tagSection = document.querySelector(".tag-section");

  const tagElements = tagArrayList.map(
    (item) => `
    <div class="tag-element">
        <p>${item}</p>
        <i class="fa-solid fa-xmark"></i>
    </div>
    `
  );
  // join enlève les virgules entre les tags
  tagSection.innerHTML = tagElements.join("");

  tagRemoveFunction();
};
