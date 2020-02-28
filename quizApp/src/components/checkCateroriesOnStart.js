import fetchCategories from '../services/responceForCategoriesOnStart';
import categoriesSelecttamplate from '../tamplate/categoriesSelectTamplate.hbs';

const refs = {
  categoriesSelect: document.querySelector('select[name=category]'),
};

const getCategoriesForTest = async () => {
  const data = await fetchCategories();
  refs.categoriesSelect.insertAdjacentHTML(
    'beforeend',
    data.map(item => categoriesSelecttamplate(item)).join(''),
  );
};

document.addEventListener('DOMContentLoaded', getCategoriesForTest);
