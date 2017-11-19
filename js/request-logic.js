/* 			November 19, 2017 Madison, Wisconsin, USA
     		CODE BY www.twitter.com/mistergenest
				STOP BY AND SAY HELLO TO ME  :)    
*/

function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
  if (!filename){
		console.log("Uh oh.  No file-extension found.");
		return;
  } 
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
  return 'text/plain';
}

