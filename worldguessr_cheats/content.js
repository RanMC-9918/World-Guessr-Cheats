// Create a Button
console.log("WORKING");
const button = document.createElement("button");
button.textContent = "Find Location";
button.style.position = "fixed";
button.style.bottom = "50%";
button.style.left = "20px";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
button.style.backgroundColor = "#007bff";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.zIndex = "10000";
let current_iframe_id = "worldguessr-com_728x90";
let display = document.createElement("div");

button.addEventListener("click", () => {
  console.log("Button clicked!");
  let iframe = document.querySelector('[title="Street View Embed"]');
  let unparsed = iframe.src.split("&");
  let longitude = 0;
  let latitude = 0;
  for(let i=0; i<unparsed.length;i++){
    if(unparsed[i].includes("lat")){
      latitude = parseFloat(unparsed[i].split("=")[1]);
    }
    if(unparsed[i].includes("long")){
      longitude = parseFloat(unparsed[i].split("=")[1]);
    }
  }

  let link = `https://www.google.com/maps/search/${latitude}+${longitude}/`;
  openPopup(link);
  
});

function openPopup(link) {
            window.open(link, "popupWindow", "width=600,height=400,scrollbars=yes");
}

document.appendChild(button);
