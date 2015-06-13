import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.find('event', params.event_id);
  },
  actions: {
    onDelete (event) {
      var route = this;
      route.store.find('event', event.id).then(function (event) {
        event.destroyRecord();
        route.transitionTo('/events');
      });
    }
 }
});
