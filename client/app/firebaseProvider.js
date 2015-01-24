/**
 * Created by Memoria on 1/23/15.
 */
var Firebase = require('firebase');

var FirebaseProvider = module.exports = function(){
    return new Firebase("https://stashtronauts.firebaseio.com/");
};
