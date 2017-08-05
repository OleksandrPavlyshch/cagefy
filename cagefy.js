function Randomize(min,max){
	var rand  = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
 }


(function (document) {
  var min = 1;
  var max = 50;
  var images = document.getElementsByTagName('img'), length = images.length

  for (var i = 0; i < length; i++) {
    var height = images[i].height
      , width = images[i].width
      , ratio = height/width
      , number = Randomize(min,max)
      , typeNumber = Randomize(0, 2)
      , w = width + number
      , h = w * ratio
      , type = "";
      switch(typeNumber) {
        case 1:
          type = "g/"
          break;
        case 2: 
          type = "c/"
          break;
      }
    images[i].src = "http://www.placecage.com/" + type + w + "/" + h;
  }

})(document);
