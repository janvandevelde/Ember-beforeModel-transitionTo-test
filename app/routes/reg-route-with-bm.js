import Route from '@ember/routing/route';

export default class RegRouteWithBm extends Route {
  queryParams = {
    mandatoryQp: {
      refreshModel: true
    }
  };

  beforeModel(transition) {
    const params = transition.to.queryParams;

    console.log('in reg route beforeModel');

    console.dir(transition);

    if (transition.from) {
      console.log(`transition.from.queryParams (route: ${transition.from.name})`);
      console.dir(transition.from.queryParams);
    }

    if (!params.mandatoryQp) {
      console.log('doing transitionTo in route beforeModel');
      console.log('--------------');

      // this.transitionTo({
      //   queryParams: {
      //     mandatoryQp: 'beforeModelValue'
      //   }
      // });
      this.transitionTo('reg-route-with-bm', {
        queryParams: {
          mandatoryQp: 'beforeModelValue'
        }
      });

    }
  }

  model() {
    return 'test';
  }
}
