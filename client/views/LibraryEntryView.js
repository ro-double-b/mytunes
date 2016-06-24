// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  // template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.play(); // this shouldn't be here...
      this.model.enqueue();

      // // increment play count on click
      // this.model.set('playCount', this.model.get('playCount') + 1);

      // // re-render on click to update play count
      // this.render();
    }

    // 'ended': function() {
    //   this.render();
    // }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes).concat(`<td>${this.model.get('playCount')}</td>`));
  }

});
