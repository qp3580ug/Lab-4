/*Part A*/
    var base = EUR : 1
    var rates = {
      "AUD": 1.5417,
      "BGN": 1.9558,
      "BRL": 3.8959,
      "CAD": 1.5194
    };

    rates.CHF = 1.1787;

    rates.OneHundredEUR() {
      TotalEUR = EUR * 100
      AUDexchange = TotalEUR * AUD
      console.log('Australian Dollars Exhange for 100 Euros is ' + AUDexchange)
    };

    rates.HighestExchange() {
      for (var rate in rates) {
        if (rate > EUR) {
          console.log('The ' + rate + 'is the highest exchange rate.')
        }
      }
    };

/*PArt B*/

var iss_location = {
  "timestamp": 1515784140,
  "iss_position":  {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
};
console.log('Latitude is ' + iss_position.latitude)
console.log("Longitude is " + iss_position.longitude)

/*Part C*/

var cats_and_owners = [
  { name: 'Bill Clinton', cat : 'Socks' },
  { name: 'Gary Oldman', cat : 'Soymilk' },
  { name: 'Katy Perry', cat : 'Kitty Purry' },
  { name: 'Snoop Dogg', cat : 'Miles Davis' }
];

if(name = 'Gary Oldman'){
  console.log(cats_and_owners.cat[1])
};

cats_and_owners.
