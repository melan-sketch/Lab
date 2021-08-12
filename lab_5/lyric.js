
var lyric = [
    "Mystery by Matt Maltese",
     "All of them", 
     "Dreaming strange inventions in the shade", 
     "Thirty mile an hour domestic winds",
      "Blow away my nice domestic things"];

function nextItem() {
    document.getElementById("lyric").innerHTML += lyric.shift() + "<br>";
}

nextItem();
setTimeout(nextItem, 1000);
setTimeout(nextItem, 3000);
setTimeout(nextItem, 5000);
setTimeout(nextItem, 7000);


