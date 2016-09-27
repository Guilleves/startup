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
