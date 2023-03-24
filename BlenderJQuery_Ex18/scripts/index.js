$(document).ready(function(){
  const loadPage = (video) => {

    let source = $("<source/>").attr({"src": video['videoUrl'] , });
    $("video").append(source);
    // movie title
    $(".movieName").text(video["title"]);
   // descrption
   $(".movieDescrp").text(video["description"])
    video["comments"].forEach(element => {
      let actorName = $("<div/>").addClass("actorName").text(element["name"]);
      let actualComment = $("<div/>").addClass("actualComment").text(element["comment"]);
      let commentInnerDivision = $("<div/>").addClass("commentInnerDivision").append(actorName , actualComment);
      // commentInnerDivision;

      let img = $("<img/>").attr({"src":element["image"]});
      let commentImgHolder = $("<div/>").addClass("commentImgHolder").append(img);


      let commentCard = $("<div/>").addClass("commentCard").append(commentImgHolder , commentInnerDivision);
      $(".comments").append(commentCard);

    });

  }


  const loapPoster = (posters) => {
    console.log(posters);
    posters.forEach(element => {
      let img = $("<img/>").attr({"src":element["imageUrl"]});
      let actualComment = $("<div/>").append(img);
      $(".upComingImagesContainer").append(actualComment);

    });
}


// onclick

$(".icon").click(()=>{
  let video = $("video");
  if(video[0].paused){
    video.trigger("play")
    $("i").css('display', 'none'); 
    $(".icon").css('display', 'none'); 
  }else{
    video.trigger("pause")
  }
})

  $.ajax({url: "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0", success: function(result){
    console.log(result);
    loadPage (result);
  }});

  $.ajax({url: "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346", success: function(result){
    console.log(result);
    loapPoster (result);
  }});




});
