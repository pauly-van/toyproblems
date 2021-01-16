/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(string, value) {
    let index = getIndexBelowMaxForKey(string, storageLimit);
    if(storage[index]){
      storage[index][string]=value;
    }else{
      storage[index] = {};
      storage[index][string] = value;
    }
  };

  result.retrieve = function(string) {
    let index = getIndexBelowMaxForKey(string, storageLimit);
    if(storage[index][string]){
      return storage[index][string];
    }
    return undefined;
  };

  result.remove = function(string) {
    let index = getIndexBelowMaxForKey(string, storageLimit);
    delete storage[index][string];
  };

  return result;
};
