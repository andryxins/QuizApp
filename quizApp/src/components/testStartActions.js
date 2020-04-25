import startTestTemplate from '../tamplate/startTestTemplate.hbs';
import responceForCategories from '../services/responceForCategoriesOnStart';
import { testActions } from './testActions';

//------------------- START ---------------

/*
 * On init making request to Trivia and getting categories for test
 * After rendering form with take options that was selected and starting test
 */

const refs = {
  container: document.querySelector('.container'),
};

const startTestActions = {
  async renderingStartPage() {
    const categories = await responceForCategories();
    const markup = await startTestTemplate(categories);
    refs.container.innerHTML = '';
    refs.container.insertAdjacentHTML('beforeend', markup);
    testActions.initTest();
  },
};

document.addEventListener('DOMContentLoaded', async () => {
  startTestActions.renderingStartPage();
});

export { startTestActions };
