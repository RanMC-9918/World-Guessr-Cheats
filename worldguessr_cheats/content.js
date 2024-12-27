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

// Add click event to the button
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
  let display = document.getElementById("worldguessr-com_728x90");
  
  let html = `<iframe id="map-canvas" class="map_part" width="600"  height="450"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=${latitude},${longitude}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Powered by <a href="https://embedgooglemaps.com">embed google maps html</a> and <a href="https://starburstnotongamstop.org/">starburst not on gamstop</a></iframe>`
  display.style.height="450px";
  display.style.width="600px";
  display.innerHTML = html;
  console.log("Latitude",latitude);
  console.log("Longitude",longitude);
});

// Append the button to the page
document.body.appendChild(button);
