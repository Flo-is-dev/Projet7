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
      console.log(tagArrayList);

      //   retrait du tag clické de la liste des mots à injecter
      const filteredArray = searchFunction(search);
      let newArrayTest = usentsilesSetFunction(filteredArray);
      console.log(newArrayTest);
    });
  });
};

// tagLogicFunction();

// ! retirer l'element similaire qui est en selected

let selectedTag = document.querySelectorAll(".selected");
