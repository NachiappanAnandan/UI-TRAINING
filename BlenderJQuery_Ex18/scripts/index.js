$(document).ready(function(){
  const loadPage = (video) => {

    const source = $("<source/>").attr({"src": video['videoUrl'] , });
    $("video").append(source);
    // movie title
    $(".movieName").text(video["title"]);
   // descrption
   $(".movieDescrp").text(video["description"])
    video["comments"].forEach(element => {
      const actorName = $("<div/>").addClass("actorName").text(element["name"]);
      const actualComment = $("<div/>").addClass("actualComment").text(element["comment"]);
      const commentInnerDivision = $("<div/>").addClass("commentInnerDivision").append(actorName , actualComment);
      // commentInnerDivision;

      const img = $("<img/>").attr({"src":element["image"]});
      const commentImgHolder = $("<div/>").addClass("commentImgHolder").append(img);


      const commentCard = $("<article/>").addClass("commentCard").append(commentImgHolder , commentInnerDivision);
      $(".comments").append(commentCard);

    });

  }


  const loadPoster = (posters) => {
    posters.forEach(element => {
      const img = $("<img/>").attr({"src":element["imageUrl"]});
      const actualComment = $("<article/>").append(img);
      $(".upComingImagesContainer").append(actualComment);

    });
}


// onclick

$(".icon").click(()=>{
  const video = $("video");
  if(video[0].paused){
    video.trigger("play")
    $("i").css('display', 'none'); 
    $(".icon").css('display', 'none'); 
  }else{
    video.trigger("pause")
  }
})

  $.ajax({url: "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0", success: function(result){
    loadPage (result);
  },
  error: function (error) {
    alert('Value is not loaded; ' + eval(error));
  }
});

  $.ajax({url: "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346", success: function(result){
    loadPoster (result);
  },
  error: function (error) {
    alert('Value is not loaded; ' + eval(error));
  }
});

});
