// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // Add song listener
    this.on('add', function() {
      if (this.models.length === 1) {
        // If song is the only song in queue, call playFirst()
        this.playFirst();
      }
    });

    // Once the song has ended
    this.on('ended', function() {
      // Dequeue the song
      this.models[0].dequeue();
      
      if (this.models.length > 0) {
        // If there are any songs left, call playFirst()
        this.playFirst();
      }
    }, this);

    // When dequeue on song is called
    this.on('dequeue', function() {
      // remove song from queue
      this.remove(this.models[0]);
    });

  },

  // plays first song on the queue
  playFirst: function() {
    this.models[0].play();
  }

});