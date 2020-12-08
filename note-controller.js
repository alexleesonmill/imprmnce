var noteHeadline = document.getElementById('app');
var othergreeting = 'Howdy!'

setTimeout( function() {
   noteHeadline.replaceWith(othergreeting);
 }, 2000);
