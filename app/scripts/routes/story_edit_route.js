Ember.StoryEditRoute = Ember.Route.extend({
  model: function(params) {
      debugger
    return this.get('store').find('story', this.modelFor('story').id);
  },
  setupController: function(controller, model){
    controller.set('model', model);
    buffer = model.get('attributes').map(function(attr){
      return { key: attr.get('key'), value: attr.get('value') }
    });
    controller.set('buffer', buffer)
  }
});

