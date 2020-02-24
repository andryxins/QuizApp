const fetchCategories = () => {
  return fetch('https://opentdb.com/api_category.php')
    .then(responce => responce.json())
    .then(data => data.trivia_categories)
    .catch(e => console.log(e));
};

export default fetchCategories;
