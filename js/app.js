function clearInput(input) {
  input.value = "";
}

// for individual country
function getChart() {
  let country = document.getElementById("country");
  let totalconf = document.getElementById("tconf");
  let totalrec = document.getElementById("trecov");
  let totaldeath = document.getElementById("tdeath");
  let recrate = document.getElementById("rrate");
  let deathrate = document.getElementById("drate");

  let image = document.getElementById("image");
  let cname = document.getElementById("cname");
  if (country.value.trim() != "") {
    fetch(
      `https://corona.lmao.ninja/v2/countries/${country.value}?yesterday=false`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        let label_names = ["Cases", "Deaths", "Recovered", "Active"];
        let details = [];
        totalconf.innerHTML = data.cases;
        details.push(data.cases);
        totaldeath.innerHTML = data.deaths;
        details.push(data.deaths);
        totalrec.innerHTML = data.recovered;
        details.push(data.recovered);
        details.push(data.active);
        image.src = data["countryInfo"]["flag"];
        cname.innerHTML = country.value;

        /* calculation death rate / recover rate */

        let calrec = data.recovered / (data.cases / 100);
        recrate.innerHTML = calrec.toFixed(2) + "%";
        let caldeath = data.deaths / (data.cases / 100);
        deathrate.innerHTML = caldeath.toFixed(2) + "%";

        let chartdata = {
          labels: label_names,
          datasets: [
            {
              backgroundColor: ["#123456", "#fd4321", "#00ff00", "#00ff"],
              data: details,
            },
          ],
        };
        let search_place = country.value;
        let options = {
          title: {
            display: true,
            text: `COVID-19 CORONAVIRUS ${search_place} STATUS`,
          },
        };
        let graphTarget = document.getElementById("chart");
        let chartchanger = document.getElementById("chartchanger");
        let graph = new Chart(graphTarget, {
          type: "pie",
          data: chartdata,
          options: options,
        });
      });
  }
}

// for world
function getWorld() {
  let totalconf = document.getElementById("wtconf");
  let totalrec = document.getElementById("wtrecov");
  let totaldeath = document.getElementById("wtdeath");
  fetch(`https://corona.lmao.ninja/v2/all?yesterday=false`)
    .then((res) => res.json())
    .then((data1) => {
      totalconf.innerHTML = data1.cases;
      totaldeath.innerHTML = data1.deaths;
      totalrec.innerHTML = data1.recovered;
    });
}

$(document).ready(function () {
  let newdata = $("#aarogya-setu-container");
  $("#x").click(function () {
    newdata.fadeOut(1000);
  });
});
