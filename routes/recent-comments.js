Blogger.RecentCommentsRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('comment');
  }
});
