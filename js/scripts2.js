window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();
        let shoutInput = document.getElementById("shout").value;
        shoutInput = shoutInput.toUpperCase();
        document.querySelector("span#inputid").innerText = shoutInput;
        document.querySelector("div#shoutid").removeAttribute("class");
    };
};