import fetchCategories from '../services/responceForCategoriesOnStart';
import categoriesSelecttamplate from '../tamplate/categoriesSelectTamplate.hbs';

const refs = {
  categoriesSelect: document.querySelector('select[name=category]'),
};

document.addEventListener('DOMContentLoaded', e => {
  return fetchCategories()
    .then(data => data.map(item => categoriesSelecttamplate(item)).join(''))
    .then(markUp =>
      refs.categoriesSelect.insertAdjacentHTML('beforeend', markUp),
    );
});
