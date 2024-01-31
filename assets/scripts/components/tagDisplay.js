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

// Logique liée à la manipulation des tags, "X"

// Retrait du tag html
const tagRemoveFunction = () => {
  const tagElement = document.querySelectorAll(".tag-element");
  tagElement.forEach((item) => {
    item.addEventListener("click", (e) => {
      tagArrayList = tagArrayList.filter(
        (obj) => obj.toLowerCase() != item.innerText.toLowerCase()
      );
      displayTagElement(tagArrayList);

      //   retrait du tag clické de la liste des mots à injecter
      //   !---PK on utilise usentsilesSetFunction????
      const filteredArray = searchFunction(search);
      let newArrayTest = usentsilesSetFunction(filteredArray);
      console.log("newArrayTest", newArrayTest);
      console.log("tagArrayList", tagArrayList);
      searchDisplay();
    });
  });
};

// tagLogicFunction();

// ! retirer l'element similaire qui est en selected

let selectedTag = document.querySelectorAll(".selected");
