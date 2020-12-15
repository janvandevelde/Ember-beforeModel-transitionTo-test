import Route from '@ember/routing/route';

export default class SuperBlogRegRouteRoute extends Route {
  queryParams = {
    queryParamTest: {
      refreshModel: true
    }
  };

  beforeModel(transition) {
    console.log('in super blog (reg route) beforeModel');
    console.dir(transition);
  }

  model() {
    return 'test';
  }
}
