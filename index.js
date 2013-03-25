/**
 * Code taken from 
 * http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html
 */
module.exports = {
  encode: function(s) {
    return unescape(encodeURIComponent(s));
  },
  decode: function(s) {
    return decodeURIComponent(escape(s));
  }
};
