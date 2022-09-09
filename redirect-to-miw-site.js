function getElementsByText(str, tag = 'span') {
    return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
  }
  
  // returns an array of 2 elements, for some reason
  let span = getElementsByText('Open live site');
  // get parent element of the span, i.e. the “Open live site” button
  let button = span[1].closest(‘a’;
  // simulate button click
 button.click();
