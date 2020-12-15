# Ember beforeModel / transitionTo test case

## Getting started
1) Clone repo & `yarn install`
2) `ember s`

## Reproducing queryParam behaviour
1) Go to `http://localhost:4200/super-blog-reg-route`
2) Click `Toggle Query param value` button (sets a query parameter of current route to `true`).
3) Navigate to `Regular route (with beforeModel)` using the linkTo at the top of the page (this route has a beforeModel with a transitionTo in order to add a new query parameter)
4) Navigate back to `Super-blog (regular route)` using the linkTo at the top of the page

=> the query parameter that was set in the `super-blog-reg-route` route seems to be gone

Note: if we don't do a transitionTo in step 3, the query parameter of the `super-blog-reg-route` will still be present if we navigate back.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd fresh-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
