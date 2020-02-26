export default async ({ category, difficulty, type }) => {
  try {
    const url = `https://opentdb.com/api.php?amount=3&category=${category.value}&difficulty=${difficulty.value}&type=${type.value}`;
    const responce = await fetch(url);
    const data = await responce.json();
    return data.results;
  } catch (e) {
    console.log(e);
  }
};
