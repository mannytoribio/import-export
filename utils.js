function convertCtoF(tempC) {
  return tempC * 1.8 + 32
}

function convertFtoC(tempF) {
  return (tempF - 32) / 1.8
}

//module.exports = convertFtoC exports the specific function you're looking for
//keep modules at the bottom of the code once everything is defined
module.exports = { convertFtoC, convertCtoF } 