const inputDate   = document.querySelector("#inputDate");

inputDate.addEventListener("change", (event) => {
    count(Number(event.target.value));
})


function count(date){
    const last = document.getElementById("container");
    if(last) document.body.removeChild(last);

    const container = document.createElement("div"); 
    container.setAttribute("id", "container");
    document.body.appendChild(container);

    if(date === 1971){
        const newDiv = document.createElement("div");
        newDiv.id = "transistors";
        newDiv.innerHTML= `In 1971 ➡️ 2300 transistors`;
        container.appendChild(newDiv);
    }else{
        let transistors = 2300
        for (i = 1971; i <= date; i += 2){
            var div = document.createElement("div");
            div.id = "transistors";
            div.innerHTML= `In ${i} ➡️ ${transistors} transistors`;
            container.appendChild(div);
            transistors *= 2
    
        }
    }


   
}