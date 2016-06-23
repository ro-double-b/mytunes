// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    // 'click': function() {
    //   this.model.play(); // this shouldn't be here...
    //   this.model.enqueue();
    // }
    'click': function(e) {
      this.model.dequeue(e);
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
