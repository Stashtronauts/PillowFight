/**
 * Created by Memoria on 1/23/15.
 */
var PillowFight = PillowFight || {};

PillowFight.FirebaseProvider = function(){
    return new Firebase("https://stashtronauts.firebaseio.com/");
};
