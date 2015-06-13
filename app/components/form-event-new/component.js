import Ember from 'ember';

export default Ember.Component.extend({
  logoUrl: 'http://www.redcarpetmonday.com/images/emberlogo1.gif',
  actions: {
    newEvent (name, logoUrl, data) {
      console.info( arguments );
    }
  }
});
