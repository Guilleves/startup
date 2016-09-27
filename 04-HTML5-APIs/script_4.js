let url = "ws://echo.websocket.org/";
let ws = new WebSocket(url);

ws.onopen = function(e){
    document.getElementById("output").innerHTML += "opening web socket";
    ws.send("establishing connection");
}
ws.onmessage = function(e){
    document.getElementById("output").innerHTML += "<br> Echoed from server: " + e.data.toString();
}
ws.onerror = function(e){
    document.getElementById("output").innerHTML += "<br> error"
}
ws.onclose = function(e){
    document.getElementById("output").innerHTML += "<br> connection closed"
}
window.onload = function(){
    document.getElementById("send-button").onclick = function(){
        ws.send(document.getElementById("send-message").value);
    }
}
