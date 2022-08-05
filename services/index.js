async function generateAdvice() {   
    let response = await fetch("https://api.adviceslip.com/advice");
    console.log(response);
    response = await response.json();
    let title = "ADVICE #".concat(response.slip["id"]);
    document.getElementById("advice-number").innerText = title;
    document.getElementById("advice-quote").innerText = '"'.concat(response.slip["advice"].concat('"'));
    return response;
}


generateAdvice();