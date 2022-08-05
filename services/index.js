async function generateAdvice() {   
    let response = await fetch("https://api.adviceslip.com/advice");
    console.log(response);
    response = await response.json();
    document.getElementById("advice-number").innerText = response.slip["id"];
    document.getElementById("advice-quote").innerText = response.slip["advice"];
    // return response;
}


generateAdvice();