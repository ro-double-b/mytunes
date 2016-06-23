// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    // renders song queue view on initialization
    this.render();

    // re-renders song queue view on song add
    this.collection.on('add', this.render, this);

    // re-renders song queue view on song ended
    this.collection.on('ended', this.render, this);

    // re-renders song queue view on song dequeue
    this.collection.on('dequeue', this.render, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
