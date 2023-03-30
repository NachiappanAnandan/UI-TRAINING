$( function() {
    $( "#tabs" ).tabs();
    $( "#accordion" ).accordion({
        collapsible: true,
        heightStyle: "content"
      });
},
);

fetch("./scripts/locations.json")
    .then(response => response.json())
        .then(data => tableAdd(data))

const createRow = (data) => {
    const row = document.createElement("tr");
    Object.keys(data).forEach(i=>{
        let cell = document.createElement("td");
        if(i =="country"){
            const imgHolder = document.createElement("div")
            imgHolder.className = "flagHolder"
            const img = document.createElement("img");
            img.src = "./images/"+data[i]+".png";
            imgHolder.append(img);
            cell.appendChild(imgHolder);
        }else{
            cell.textContent = data[i];
        }
        row.appendChild(cell);
       
       
    })
    return row;
}

const tableAdd = (data) => {
    const fragments = document.createDocumentFragment();
    data.forEach(element => {
        fragments.appendChild(createRow(element));
    });
    document.getElementById("table").append(fragments);

}

;