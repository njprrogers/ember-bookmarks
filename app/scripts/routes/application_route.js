Getbookmarks.ApplicationRoute = Ember.Route.extend({
    model : function(){
        var stories = this.get('store').findAll('story');
        return stories;
    }
});