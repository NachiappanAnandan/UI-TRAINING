const loadPage = (video) => {
  // fragments
  let fragments  = document.createDocumentFragment();
  // video
  var source = document.createElement("source");
  source.src = video["videoUrl"];
  document.getElementsByTagName("video")[0].appendChild(source);
  // movie title
  document.getElementsByClassName("movieName")[0].textContent = video["title"];
  // descrption
  document.getElementsByClassName("movieDescrp")[0].textContent = video["description"];

  for (let i of video["comments"]) {

    let actorName = document.createElement("div");
    actorName.className = "actorName";
    actorName.textContent = i["name"];

    let actualComment = document.createElement("div");
    actualComment.className = "actualComment";
    actualComment.textContent = i["comment"];

    let commentInnerDivision = document.createElement("div");
    commentInnerDivision.className = "commentInnerDivision";
    commentInnerDivision.appendChild(actorName);
    commentInnerDivision.appendChild(actualComment);

    
    let img = document.createElement("img");
    img.src = i["image"];
    let commentImgHolder = document.createElement("div");
    commentImgHolder.className ="commentImgHolder";
    commentImgHolder.appendChild(img)

    let commentCard = document.createElement("div");
    commentCard.className = "commentCard";
    commentCard.appendChild(commentImgHolder);
    commentCard.appendChild(commentInnerDivision);

    fragments.appendChild(commentCard);
}
  document.querySelector(".comments").appendChild(fragments)
};

const loapPoster = (posters) => {
   
    let fragments=document.createDocumentFragment();
    for(let i of posters){

      let img = document.createElement("img");
      img.src = i["imageUrl"];
      img.alt = i["title"];

      let upComingImagesHolder = document.createElement("div");
      upComingImagesHolder.appendChild(img);
      fragments.appendChild(upComingImagesHolder);
    }
    document.querySelector(".upComingImagesContainer").appendChild(fragments);
}

document.querySelector(".icon").addEventListener("click" , (e) =>{
  let video =   e.target.parentNode.childNodes[1];
  if(video.paused){
    e.target.querySelector("i").style.display = "none"
    video.play();
  }else{
    video.pause();
    e.target.querySelector("i").style.display = "block"
  }
})


document.querySelector("i").addEventListener("click" , (e) => {
  let video =   e.target.parentNode.parentNode.childNodes[1];
  if(video.paused){
    e.target.style.display = "none"
    video.play();
  }else{
    video.pause();
    e.target.style.display = "block"
  }
})
// // fetch
fetch("./scripts/video.json")
  .then((response) => response.json())
  .then((data) => loadPage(data));

fetch("./scripts/posters.json")
  .then((response) => response.json())
  .then((data) => loapPoster(data));
