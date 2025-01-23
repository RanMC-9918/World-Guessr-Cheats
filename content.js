// Create a Button
console.log("WORKING");
const button = document.createElement("button");
button.textContent = "Reload Location";
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
// Add click event to the Button
function createRandomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const randomArray = new Uint8Array(length);
  crypto.getRandomValues(randomArray);
  randomArray.forEach((number) => {
    result += chars[number % chars.length];
  });
  return result;
}
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
  
  let character_num = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  current_iframe_id = createRandomString(character_num);
  display.id = current_iframe_id;

  
  let html = `<iframe class="map_part" width="600"  height="450"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=${latitude},${longitude}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Powered by <a href="https://embedgooglemaps.com">embed google maps html</a> and <a href="https://starburstnotongamstop.org/">starburst not on gamstop</a></iframe>`
  display.style.height="450px";
  display.style.width="600px";
  display.style.position = "fixed";
  display.style.top = "20px"; // Adjust the vertical position from the top (20px from the top)
  display.style.left = "50%"; // Center horizontally
  display.style.transform = "translateX(-50%)";
  display.style.zIndex = "100000";
  display.innerHTML = html;
  display.style.zoom = "0.75";
  console.log("Latitude",latitude);
  console.log("Longitude",longitude);
  if (document.body.contains(display)) {
    document.body.removeChild(display);
  }

  document.body.appendChild(display);
});

// Append the button to the page
document.body.appendChild(button);
