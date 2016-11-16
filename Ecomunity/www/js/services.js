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
      var comm = communities.child(commId);

      // return it as a synchronized object
      return $firebaseObject(comm);
    }
  }
])
.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
])
;
