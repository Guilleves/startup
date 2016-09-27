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
