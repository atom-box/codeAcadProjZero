// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!

/*      ALL     WORK     IS     WRITTEN   IN     HERE  
*/

function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
  console.log("Hallo.");
  console.log(extension);
  switch (extension) 
  {
  	case 'html':
  		return 'text/html';
  	case 'css':
  		return 'text/css';
  	case 'jpeg':
  		return 'image/jpeg';
  	case 'jpg':
  		return 'image/jpeg';
  }
}