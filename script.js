var photos = []; 
var fileNames = []; 
var imageList = []; 
var image ; 
var openList = "<li class='photo'>";
var closeList = "</li>"; 
var descriptions = [
      "You are such a little angel!",
      "My heart skips a beat every time I see you.",
      "You are the cutest little thing!",
      "You are always so well-behaved, good job!",
      "Who could resist those gentle eyes?",
      "You are the little superstar of the pet world!",
      "Your furry appearance is just so captivating!",
      "You are always so full of energy.",
      "You are the best companion.",
      "You bring endless joy every day!",
      "What a cutie cat!",
      "I will love you always!",
  ];


for(var i = 0; i < 12 ; i++){
    fileNames.push("pet" + (i+1)); 
    photos.push(`
          <figure>
            <img src='images/gallary/${fileNames[i]}.jpg'>
            <div class='img-description' onclick='showInfoBox("Our Pet ${i+1}", "${descriptions[i]}")'>${descriptions[i]}</div>
            <figcaption>Our Pet ${i+1}</figcaption>
          </figure>
      `); 
    image = openList + photos[i] + closeList; 
    imageList.push(image); 
}
function showInfoBox(caption, description) {
    document.getElementById("infoBoxCaption").innerText = caption;
    document.getElementById("infoBoxDescription").innerText = description;
    document.getElementById("infoBox").style.display = "block";
}

document.getElementById("closeInfoBox").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("infoBox").style.display = "none";
});
document.getElementById("gallary").innerHTML = imageList.join('');

$(document).ready(function() {
  $(".photo img").click(function(){
      let imgSrc = $(this).attr("src");
      let description = $(this).siblings('.img-description').text();
      
      $("#modalImage").attr("src", imgSrc);
      $("#caption").text(description);
      $("#imageModal").css("display", "block");
  });
  
  $(".close, #imageModal").click(function(){
      $("#imageModal").css("display", "none");
  });

});

