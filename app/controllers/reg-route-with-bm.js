import Controller from '@ember/controller';

export default class RegRouteWithBmController extends Controller {
  queryParams = ['mandatoryQp'];

  mandatoryQp = 'test';
}
