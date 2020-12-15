import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount('super-blog');
  this.route('super-blog-reg-route');
  this.route('reg-route-no-bm');
  this.route('reg-route-with-bm');
});

export default Router;
