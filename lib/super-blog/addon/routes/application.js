import Route from '@ember/routing/route';

export default class SuperBlogRoute extends Route {
  queryParams = {
    queryParamTest: {
      refreshModel: true
    }
  };

  model() {
    return 'test';
  }
}
