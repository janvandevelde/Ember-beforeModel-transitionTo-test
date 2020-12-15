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
      // TransitionTo doesn't seem to work in case of abort?
      // transition.abort();

      // followRedirects?
      // https://github.com/emberjs/ember.js/blob/v3.22.0/packages/%40ember/-internals/routing/lib/system/transition.ts#L164

      // queryParams tests:
      // https://github.com/emberjs/ember.js/blob/58daefff26862e567f8a40d6e87df5a5dd828475/packages/ember/tests/routing/query_params_test.js

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
