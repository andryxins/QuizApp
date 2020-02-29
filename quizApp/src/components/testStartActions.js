import startTestTemplate from '../tamplate/startTestTemplate.hbs';
import responceForCategories from '../services/responceForCategoriesOnStart';
import { testActions } from './testActions';

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
