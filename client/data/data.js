// data.js - Defines an array of data regarding song files and their accompanying details.
// var songData = [
//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3',
//     title: 'One In A Million',
//     artist: 'Aaliyah',
//   },
//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3',
//     title: 'Age Ain\'t Nothing But A Number',
//     artist: 'Aaliyah',
//   },
//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3',
//     title: 'Hot Like Fire',
//     artist: 'Aaliyah',
//   },
//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3',
//     title: 'If Your Girl Only Knew',
//     artist: 'Aaliyah',
//   }
// ];

// var songData = [];

// var songDatabase = {};
// songDatabase.server = 'https://api.parse.com/1/classes/songs/';

// songDatabase.init = function() {
//   this.fetch();
// };

// // Get songs
// songDatabase.fetch = function() {
//   $.ajax({
//     url: this.server, 
//     type: 'GET',
//     contentType: 'application/JSON',
//     success: result => {
//       var songs = result.results;

//       _.each(songs, function(song) {
//         var songObj = {};

//         songObj.url = song.url;
//         songObj.title = song.title;
//         songObj.artist = song.artist;

//         songData.push(songObj);
//       });

//       var library = new Songs(songData);
//       var app = new AppModel({library: library});
//       var appView = new AppView({model: app});

//       // put the view onto the screen
//       $('body').append(appView.render());

//     },
//     error: data => {
//       console.log('What the French, toast?! The songs didn\'t load!', data);
//     }
//   });
// };

// songDatabase.init();