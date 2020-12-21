var reference; // were everything will be added aka origin's reference 
var data; // choicedata.js 
var length; // length of data
var recent; // recent selection
var end = 3 //highest depth is 3

function start(){
    
    data = selectInfo.choices; // easier to do data instead of selectInfo.choices
    length = Object.keys(data).length;
    reference = document.getElementById("origin");
    
    create("Main");
    
}

function create(dataKey) {
    // since most of the code is repetitive, its better to do a for loop
    for (var i = 0; i < length; i++){
        
        // Set the stage, taken from lecture 7
        if (data[i].key != dataKey){
            continue;
        }
        
        // Results
        if(data[i].depth == end){
            final(data[i]);
            continue;
        }
        
        // create a div 
        const mainDiv = document.createElement("div");
        mainDiv.id = "mainDiv";
        mainDiv.className = data[i].depth;
        reference.appendChild(mainDiv);
        
        // Creates a header
        const header = document.createElement('h2');
        const text = document.createTextNode(data[i].description);
        header.className = data[i].depth;
        header.appendChild(text);
        mainDiv.appendChild(header);
        
        // adds select to the div
        const mainSelect = document.createElement("select");
        mainSelect.id = "mainSelect";
        mainSelect.className = data[i].depth;
        mainDiv.appendChild(mainSelect);
        
        // creates the description for the question
        const mainDesc = document.createElement("option");
        mainDesc.value = data[i].key;
        mainDesc.textContent = data[i].description;
        mainDesc.className = data[i].depth;
        mainDesc.selected = this;
        mainDesc.disabled = true;
        mainSelect.appendChild(mainDesc);
              
        // the first option
        const option1 = document.createElement("option");
        option1.value = data[i].option_1;
        option1.textContent = data[i].option_1;
        option1.className = data[i].depth;
        recent = data[i].depth;
        mainSelect.appendChild(option1);

        // the second option
        const option2 = document.createElement("option");
        option2.value = data[i].option_2;
        option2.textContent = data[i].option_2;
        option2.className = data[i].depth;
        recent = data[i].depth;
        mainSelect.appendChild(option2);
        
        // if there is a third option
        if(data[i].option_3){
            const option3 = document.createElement("option");
            option3.value = data[i].option_3;
            option3.textContent = data[i].option_3;
            option3.className = data[i].depth;
            recent = data[i].depth;
            mainSelect.appendChild(option3);
        }
        
        mainSelect.onchange = reload;    
    }

}

function final(dataKey){
    // create a div 
    const mainDiv = document.createElement("div");
    mainDiv.id = "mainDiv";
    mainDiv.className = dataKey.depth;
    recent = dataKey.depth;
    reference.appendChild(mainDiv);
    
    // the header
    var h2 = document.createElement("h2");
    var textNode = document.createTextNode("What movie you should watch: " + dataKey.movieName + ".");
    h2.className = dataKey.depth;
    h2.appendChild(textNode);
    mainDiv.appendChild(h2);
    
    // Creates description for Youtube video
    var p = document.createElement('p');
    var textNode = document.createTextNode(dataKey.movieDesc);
    p.appendChild(textNode);
    mainDiv.appendChild(p);

    // Creates iframe for Youtube video
    var iframe = document.createElement("iframe");
    iframe.src = dataKey.src;
    iframe.width = dataKey.width;
    iframe.height = dataKey.height;
    iframe.frameBorder = "0";
    mainDiv.appendChild(iframe);
}


function reload(){ 
    // remove
    if(this.className < recent){
        remove(this.className);   
    }
    // create new elements
    create(this.value);

}

function remove(x){
    var removal = document.getElementsByClassName(x)[0];
    while (removal.nextSibling != null){
        removal.nextElementSibling.remove();
    }  
}


function reset() {
    remove(0);
}

window.onload = start;