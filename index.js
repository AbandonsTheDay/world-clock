function updateTime() {
  let rhodesElement = document.querySelector("#rhodes-city");
  if (rhodesElement) {
    let rhodesDateElement = rhodesElement.querySelector(".date");
    let rhodesTimeElement = rhodesElement.querySelector(".time");
    let rhodesTime = moment().tz("Europe/Athens");
    rhodesDateElement.innerHTML = rhodesTime.format("MMMM Do YYYY");
    rhodesTimeElement.innerHTML = `${rhodesTime.format(
      `h:mm:ss`
    )} <small>${rhodesTime.format("A")}</small>`;
  }

  let syracuseElement = document.querySelector("#syracuse-city");
  if (syracuseElement) {
    let syracuseDateElement = syracuseElement.querySelector(".date");
    let syracuseTimeElement = syracuseElement.querySelector(".time");
    let syracuseTime = moment().tz("Europe/Rome");
    syracuseDateElement.innerHTML = syracuseTime.format("MMMM Do YYYY");
    syracuseTimeElement.innerHTML = `${syracuseTime.format(
      `h:mm:ss`
    )} <small>${syracuseTime.format("A")}</small>`;
  }

  let debrecenElement = document.querySelector("#debrecen-city");
  if (debrecenElement) {
    let debrecenDateElement = debrecenElement.querySelector(".date");
    let debrecenTimeElement = debrecenElement.querySelector(".time");
    let debrecenTime = moment().tz("Europe/Budapest");
    debrecenDateElement.innerHTML = debrecenTime.format("MMMM Do YYYY");
    debrecenTimeElement.innerHTML = `${debrecenTime.format(
      `h:mm:ss`
    )} <small>${debrecenTime.format("A")}</small>`;
  }

  let chicagoElement = document.querySelector("#chicago-city");
  if (chicagoElement) {
    let chicagoDateElement = chicagoElement.querySelector(".date");
    let chicagoTimeElement = chicagoElement.querySelector(".time");
    let chicagoTime = moment().tz("America/Chicago");
    chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
    chicagoTimeElement.innerHTML = `${chicagoTime.format(
      `h:mm:ss`
    )} <small>${chicagoTime.format("A")}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#selectCity");
citiesSelectElement.addEventListener("change", updateCity);
