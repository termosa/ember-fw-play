import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.find('event');
  },
  actions: {
    updateAll (list) {
      var imgs = ['http://www.redcarpetmonday.com/images/emberlogo1.gif',
       'http://core0.staticworld.net/images/article/2013/07/ember-logo-100047146-large.jpg',
       'http://voidcanvas.com/wp-content/uploads/2013/11/ember_logo1.png',
       'http://www.kino-teatr.ru/art/895/5129.jpg'];

      list.forEach(function (event) {
        event.set('logo', imgs[Math.floor(Math.random() * 4)]);
        event.save();
      });
    }
  }
});
