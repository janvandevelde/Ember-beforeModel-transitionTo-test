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
