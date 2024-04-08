let details = document.querySelector(".details");
let info = document.querySelector(".info");

window.addEventListener("keydown", (event) => {
  info.classList.remove("active");

  let loc = event.location;
  loc =
    loc === 0
      ? "General keys"
      : loc === 1
      ? "Left-side modifier keys"
      : loc === 2
      ? "Right-side modifier keys"
      : loc === 3
      ? "Numpad"
      : loc;

  details.innerHTML = `<div class="item">
    <div class="heading">event.key</div>
    <div class="data">${event.key === " " ? "space" : event.key}</div>
    </div>
    <div class="item">
    <div class="heading">event.keyCode</div>
    <div class="data">${event.keyCode}</div>
    </div>
    <div class="item">
    <div class="heading">event.code</div>
    <div class="data">${event.code}</div>
    </div>
    <div class="item">
    <div class="heading">event.location</div>
    <div class="data">${loc}</div>
    </div>
    `;
});
