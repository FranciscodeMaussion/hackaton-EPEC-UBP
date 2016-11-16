angular.module('app.services', [])
.factory("communities", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the database location where we will store our data
    var ref = firebase.database().ref().child('communities');

    // this uses AngularFire to create the synchronized array
    return $firebaseArray(ref);
  }
])
.factory("community", ["$firebaseObject", "communities",
  function($firebaseObject, communities) {
    return function(commId) {
      // create a reference to the database node where we will store our data
      var comm = communities.$getRecord(commId);
      // return it as a synchronized object
      return comm;
    }
  }
])
.factory("posts", ["$firebaseArray",
  function($firebaseArray) {
    return function(commId) {
      // create a reference to the database node where we will store our data
      var ref = firebase.database().ref().child('communities/'+commId+"/posts");
      // return it as a synchronized object
      return $firebaseArray(ref);
    };
  }
])
.factory("posts", ["$firebaseArray",
  function($firebaseArray) {
    return function(commId) {
      // create a reference to the database node where we will store our data
      var ref = firebase.database().ref().child('communities/'+commId+"/anonimos");
      // return it as a synchronized object
      return $firebaseArray(ref);
    };
  }
])
.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
])
;
