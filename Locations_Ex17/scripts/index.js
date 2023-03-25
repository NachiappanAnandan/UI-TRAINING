$( function() {
    $( "#tabs" ).tabs();
} );

$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      heightStyle: "content"
    });
 } );



fetch("../scripts/locations.json")
    .then(response => response.json())
        .then(data => tableAdd(data))

const tableAdd = (data) => {
    let fragments = document.createDocumentFragment();
    data.forEach(element => {
        console.log(element);
        let row = document.createElement("tr");
        Object.keys(element).forEach(i=>{
            console.log(i);
            let cell = document.createElement("td");
            if(i =="country"){
                let imgHolder = document.createElement("div")
                imgHolder.className = "flagHolder"
                let img = document.createElement("img");
                img.src = "../images/"+element[i]+".png";
                imgHolder.append(img);
                cell.appendChild(imgHolder);
            }else{
                cell.textContent = element[i];
            }
           row.appendChild(cell);
           
        })
        fragments.appendChild(row);
    });
    document.getElementById("table").append(fragments);

}

;