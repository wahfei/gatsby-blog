// const setupTags = (recipes) => {
//   const allTags = {};

//   recipes.forEach((recipe) => {
//     recipe.content.tags.forEach((tag) => {
//       if (allTags[tag]) {
//         allTags[tag] = allTags[tag] + 1;
//       } else {
//         allTags[tag] = 1;
//       }
//     });
//   });
//   const newTags = Object.entries(allTags).sort((a, b) => {
//     const [firstTag] = a;
//     const [secondTag] = b;
//     return firstTag.localeCompare(secondTag);
//   });

//   return recipes;
// };

// export default setupTags;

const setupTags = (recipes) => {
  const allTags = {};

  recipes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a;
    const [secondtag] = b;
    return firstTag.localeCompare(secondtag);
  });
  return newTags;
};

export default setupTags;
