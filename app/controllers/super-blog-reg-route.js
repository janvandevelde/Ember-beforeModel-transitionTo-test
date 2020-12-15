import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class SuperBlogRegRouteController extends Controller {
  queryParams = ['queryParamTest'];

  queryParamTest = false;

  @action
  updateQueryParamValue() {
    this.toggleProperty('queryParamTest');
  }
}
