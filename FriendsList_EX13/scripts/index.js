
var element = "";
fetch("./scripts/friends.json")
    .then(response => response.json())
        .then(data => {
            for(let i of data){
                element += '<div class="card">'
                element+='<div class="card_img"><img src="'+i["img"]+'" alt="profile image" ></div>'
                element+='<div class="details"><div class="name">'+i['first_name']+" "+ i["last_name"]+'</div><div class="email">'+i["email"]+'</div></div></div>'    
            }
            document.getElementById("parent").innerHTML = element;
            }
        );
