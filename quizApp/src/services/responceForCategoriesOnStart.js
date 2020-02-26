export default async () => {
  try {
    const responce = await fetch('https://opentdb.com/api_category.php');
    const data = await responce.json();
    return data.trivia_categories;
  } catch (e) {
    console.log(e);
  }
};
