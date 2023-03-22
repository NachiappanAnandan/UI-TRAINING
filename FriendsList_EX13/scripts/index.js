//fragment
let fragment = document.createDocumentFragment();

fetch("./scripts/friends.json")
    .then(response => response.json())
        .then(data => {
            for(let i of data){
                // card element
                let card = document.createElement("div");
                card.className = "card";

                // card image 
                let img = document.createElement("img");
                img.src = i["img"];
                img.alt = "profile image";
                // card image holder
                let cardImg = document.createElement("div");
                cardImg.className = "card-img";
                cardImg.appendChild(img);
                card.appendChild(cardImg);
                //name and email 
                let name = document.createElement("div");
                name.className = "name";
                name.textContent = i["first_name"]+" "+i["last_name"];
                let email = document.createElement("div");
                email.className = 'email';
                email.textContent = i["email"];
                // details
                let details =document.createElement("div");
                details.className = "details";
                details.appendChild(name);
                details.appendChild(email);
                card.appendChild(details)
                //append in fragment 
                fragment.appendChild(card);
            }
            document.getElementById("parent").appendChild(fragment);
            }
        );
