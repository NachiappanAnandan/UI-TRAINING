const loadPage = (video) => {
  // video
  var source = document.createElement("source");
  source.src = video["videoUrl"];
  document.getElementsByTagName("video")[0].appendChild(source);

  // movie title
  document.getElementsByClassName("movieName")[0].textContent = video["title"];
  // descrption
  document.getElementsByClassName("movieDescrp")[0].textContent = video["description"];

  let comments = "";
  for (let i of video["comments"]) {
    comments += `<div class="commentCard">
                            <div class="commentImgHolder">
                            <img src="./${i["image"]}" alt="">
                            </div>
                            <div class="commentInnerDivision">
                                <div class="actorName">${i["name"]}</div>
                                <div class="actualComment">${i["comment"]}</div>
                            </div>
                        </div>`;
  }
  document.getElementsByClassName("comments")[0].innerHTML = comments;
};

const loapPoster = (posters) => {
   
    let postersElement="";
    for(let i of posters){
        postersElement+=` <div class="upComingImagesHolder">
        <img src="${i["imageUrl"]}" alt="${i["title"]}"/>
    </div>`
    }
    document.getElementsByClassName("upComingImagesContainer")[0].innerHTML = postersElement;
}

// // fetch
fetch("./scripts/video.json")
  .then((response) => response.json())
  .then((data) => loadPage(data));

fetch("./scripts/posters.json")
  .then((response) => response.json())
  .then((data) => loapPoster(data));
