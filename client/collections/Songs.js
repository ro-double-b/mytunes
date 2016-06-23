// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/', 
  
  parse: function(data) {
    return data.results;
  },

  initialize: function() {
    this.fetch();
  }


  // fetch: function() {
  //   $.ajax({
  //     type: 'GET',
  //     contentType: 'application/JSON',
  //     success: result => {
  //       var songs = result.results;

  //       _.each(songs, function(song) {
  //         var songObj = {};

  //         songObj.url = song.url;
  //         songObj.title = song.title;
  //         songObj.artist = song.artist;

  //         this.songData.push(songObj);
  //       });

  //       var library = new Songs(this.songData);
  //       var app = new AppModel({library: library});
  //       var appView = new AppView({model: app});

  //       // put the view onto the screen
  //       $('body').append(appView.render());
  //     },

  //     error: data => {
  //       console.log('What the French, toast?! The songs didn\'t load!', data);
  //     }
  //   });
  // }
});

// var songs = new Songs();
// console.log(songs);
// console.log(songs.models)