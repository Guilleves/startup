window.addEventListener("load", function(){
        document.querySelector("p.last-will").innerHTML = "";
        document.querySelector("p.last-will").innerHTML += localStorage.getItem("lastwill");
        document
        .getElementById("save-last-will")
        .addEventListener("click", function(){
            let lastWillAndTestament = document.getElementById("text-last-will").value;
            localStorage.setItem('lastwill', lastWillAndTestament);
            alert('There goes your patrimony');
        })
})

function removeLastWill(){
    localStorage.removeItem("lastwill");
    alert("having second thoughts huh");
    document.querySelector("p.last-will").innerHTML = "you greedy bastard";
}

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    let files = evt.dataTransfer.files; // FileList object.
    let output = [];
    //console.log(files);

    for (let i = 0; i < files.length; i++) {
        var reader = new FileReader();
        reader.onload = function(evt) {
            //console.log(output);
            output.push(reader.result);
            //console.log(output);
            document.getElementById("output").innerHTML += reader.result;
        };
        reader.readAsText(files[i]);
        console.log(output[i]);
    }
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
}

  // dnd listeners.
  let dropZone = document.getElementById('drop-zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);
