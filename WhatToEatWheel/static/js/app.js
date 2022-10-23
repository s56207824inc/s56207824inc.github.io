
const NO_LIMIT = 5;
const DEFAULT_NUM = 5;
const infowindowContent = document.getElementById(
  "infowindow-content"
);


// let theWheel;
let map, marker, infowindow, theWheel;
let markerList = [];

let err = document.getElementById("msg-error");
let result = document.getElementById("msg-result");


let colorMap = [
  '#eae56f',
  '#e7706f',
  '#7de6ef',
];

const priceMap = [
  "None",
  "$",
  "$$",
  "$$$",
  "$$$$",
  "-"
];

const STAR_FILLED       = "<span class='fa fa-star checked'></span>";
const STAR_FILLED_HALF  = "<span class='fa fa-star-half-o checked'></span>";
const STAR_EMPTY        = "<span class='fa fa-star-o checked'></span>";
const startMAp = [
  STAR_EMPTY + STAR_EMPTY + STAR_EMPTY + STAR_EMPTY + STAR_EMPTY,
  STAR_FILLED_HALF + STAR_EMPTY + STAR_EMPTY + STAR_EMPTY + STAR_EMPTY,
  STAR_FILLED + STAR_EMPTY + STAR_EMPTY + STAR_EMPTY + STAR_EMPTY,
  STAR_FILLED + STAR_FILLED_HALF + STAR_EMPTY + STAR_EMPTY + STAR_EMPTY,
  STAR_FILLED + STAR_FILLED + STAR_EMPTY + STAR_EMPTY + STAR_EMPTY,
  STAR_FILLED + STAR_FILLED + STAR_FILLED_HALF + STAR_EMPTY + STAR_EMPTY,
  STAR_FILLED + STAR_FILLED + STAR_FILLED + STAR_EMPTY + STAR_EMPTY,
  STAR_FILLED + STAR_FILLED + STAR_FILLED + STAR_FILLED_HALF + STAR_EMPTY,
  STAR_FILLED + STAR_FILLED + STAR_FILLED + STAR_FILLED + STAR_EMPTY,
  STAR_FILLED + STAR_FILLED + STAR_FILLED + STAR_FILLED + STAR_FILLED_HALF,
  STAR_FILLED + STAR_FILLED + STAR_FILLED + STAR_FILLED + STAR_FILLED
];


class placeInfo {
  constructor(
    location, placeName, vicinity,
    priceLevel, rate,
    durationTxt, durationVal, distanceFrom
  ) {
    this.location = location === undefined ? "None" : location;
    this.vicinity = vicinity === undefined ? "None" : vicinity;
    this.durationTxt = durationTxt === undefined ? "None" : durationTxt;
    this.durationVal = durationVal === undefined ? 0 : durationVal;
    this.distanceFrom = distanceFrom === undefined ? 0 : distanceFrom;
    this.placeName = placeName === undefined ? "None" : placeName;
    this.rate = (rate === undefined) ? 1 : rate;
    this.priceLevel = (priceLevel === undefined) ? NO_LIMIT : priceLevel;
  }
}


//--check utilis--
function isAddress(inputs) {
  if(inputs === '' || inputs === ' ') {
    return false;
  }
  return true;
} 


function isVaildEntryEnough(validNumber) {
  if (validNumber < 2) {
    return false
  } 
  return true
}


function isWithinDis(thisDis, upperBound) {
  if (thisDis <= upperBound) {
    return true;
  }
  return false;
}


function isOpeningNow(open) {
  if (open) {
    return true
  } 
  return false
}


function isHigherCertainRate(thisRate, lowerBound) {
  if (thisRate >= lowerBound) {
    return true
  }
  return false
}


function isMeetThePrice(thisPrice, target) {
  if (thisPrice == target || target == NO_LIMIT) {
    return true;
  }
  return false;
}


// -- wheels utilis --
function startSpin(infos) {
  if(infos[0].durationTxt !=='None') {
    theWheel.stopAnimation(false);
    theWheel.rotationAngle = theWheel.rotationAngle % 360;
    theWheel.startAnimation();
  }
}


//draw the wheels
function drawTheWheel(infos) {
  delete theWheel; 
  const numSegments = infos.length;
  let segments = [];

  for (let i = 0; i < numSegments; i++) {
    let colorIndex = (i % colorMap.length);
    let segmentInfo = {'fillStyle': colorMap[colorIndex],
                       'text': infos[i].placeName.slice(0, 7), 
                       'location': infos[i].location,
                       'placeName': infos[i].placeName,
                       'vicinity': infos[i].vicinity,
                       'rate': infos[i].rate, 
                       'priceLevel': infos[i].priceLevel,
                       'distanceFrom': infos[i].distanceFrom,
                       'durationTxt': infos[i].durationTxt};
    segments.push(segmentInfo)
  }
  theWheel = new Winwheel({
    'numSegments'  : numSegments,
    'textFontSize' : 20,
    'responsive'   : true,  // This wheel is responsive!
    'pointerAngle' : 90,    // Ensure this is set correctly
    'segments'     : segments,
    'animation' :
    {
      'type'     : 'spinToStop',
      'duration' : 5,
      'spins'    : 8,
      'callbackSound' : 'playSound()' , 
      'soundTrigger'  : 'pin',
      'callbackFinished' : 'alertPrize()',
      'callbackAfter' : 'drawTriangle()',
    },
    'pins' :
    {
      'number' : 16,
      'outerRadius': 6,
      'responsive' : true, // This must be set to true if pin size is to be responsive.
    }
  });
}


function drawTriangle() {
  // Get the canvas context the wheel uses.
  let ctx = theWheel.ctx;
  // Set line colour.
  ctx.strokeStyle = 'navy';  
  // Set fill colour.   
  ctx.fillStyle = 'aqua';     
  ctx.lineWidth = 2;
  // Begin path
  ctx.beginPath();              

  // degree 45
  // Move to initial position.
  ctx.moveTo(670, 194);       
   // Draw lines to make the shape.  
  ctx.lineTo(670, 246);        
  ctx.lineTo(630, 220);
  ctx.lineTo(670, 195);
  // Complete the path by stroking (draw lines).
  ctx.stroke(); 
  // Then fill.                
  ctx.fill();             
}

function alertPrize() {
  let winningSegment = theWheel.getIndicatedSegment();
  playSound();
  result.innerHTML = winningSegment.text;
  const targetLocation = winningSegment.location;
  map.panTo(targetLocation);

  marker = new google.maps.Marker({
    map: map,
    position: targetLocation
  });
  
  infowindowContent.style.display = "block";
  infowindowContent.children.namedItem("place-name").innerHTML = winningSegment.placeName;
  infowindowContent.children.namedItem("place-content-1").children.namedItem("place-rate").children.namedItem("place-rate-num").innerHTML = winningSegment.rate;

  const reweightRate = Math.round(winningSegment.rate * 2);
  infowindowContent.children.namedItem("place-content-1").children.namedItem("place-rate").children.namedItem("place-rate-stars").innerHTML = startMAp[reweightRate];
  infowindowContent.children.namedItem("place-content-2").children.namedItem("place-price").innerHTML = priceMap[winningSegment.priceLevel];
  infowindowContent.children.namedItem("place-content-3").children.namedItem("place-address").innerHTML = winningSegment.vicinity;
  infowindowContent.children.namedItem("place-content-4").children.namedItem("place-distance").innerHTML = winningSegment.distanceFrom + "公尺";
  infowindowContent.children.namedItem("place-content-5").children.namedItem("place-duration").innerHTML = winningSegment.durationTxt;

  infowindow.setContent(infowindowContent);
  infowindow.open(map, marker);

  markerList.push(marker);
  result.style.display = "block";
  // err.style.display = "none";
}


function playSound() {
  let audio = document.getElementById("myAudio");
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}


//marker utilis
function markerRemove() {
  for (let i = 0; i < markerList.length; i++) {
    markerList[i].setMap(null);
  }
}


//main functions
function initMap() {

  let filler = [];
  for (let i = 0; i < DEFAULT_NUM; i++) {
    filler.push(new placeInfo());
  }

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.5, lng: 121 },
    zoom: 8,
  });
  infowindow = new google.maps.InfoWindow();
  drawTheWheel(filler);
}


function addressDecoder(myloc) {
  return new Promise((resolve, reject) => {
    if (!isAddress(myloc)) {
      return reject("地址非有效值");
    }
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      'address': myloc
      }, 
      function(results, status) {
          if (status == 'OK') {

            map.panTo(results[0].geometry.location);
            map.setZoom(16);

            marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });

            pos = {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            };

            resolve(pos);
            markerList.push(marker);

          } else {
            
            reject(status);
            console.log(status);

          }
    });
  });
}


function getPlacesLocation(pos) {
  return new Promise((resolve, reject) => {

    let request = {
      location: pos,
      rankBy: google.maps.places.RankBy.DISTANCE,
      keyword: 'restaurant'
    };
    
    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (places, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        resolve(places);
      } else {
        reject(status);
      }
    });
  });
}


function orederResultbyTime(ori, places) {
  return new Promise((resolve, reject) => {
    let dests = []
    let infos = []
    const serviceForDistance = new google.maps.DistanceMatrixService();
    const methodType = document.querySelectorAll('input[type="radio"][name="method"]:checked')[0].value;

    places.forEach(place => {
      const location =  new google.maps.LatLng(place.geometry.location.lat(), 
                                                place.geometry.location.lng());
      let instance = new placeInfo(place.geometry.location,
                                   place.name,
                                   place.vicinity,
                                   place.price_level,
                                   place.rating);

      infos.push(instance);
      dests.push(location);
    });

    serviceForDistance.getDistanceMatrix({
      origins: [ori], 
      destinations: dests,
      travelMode: methodType,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: true,
      avoidTolls: true,
    }, 

    function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        
        for (let i = 0; i < infos.length; i++) {
          infos[i].distanceFrom = results.rows[0].elements[i].distance.value;
          infos[i].durationVal = results.rows[0].elements[i].duration.value;
          infos[i].durationTxt = results.rows[0].elements[i].duration.text;
        }

        infos.sort(function(a, b) {
          return a.durationVal > b.durationVal ? 1 : -1;
        });
        resolve(infos);
      } else {
        reject(status);
      }
    });

  });
}


function getFilterResult(infos) {
  return new Promise((resolve, reject) => {

    const dis = document.querySelectorAll('input[type="radio"][name="distance"]:checked')[0].value;
    const lowerBoundRate = document.querySelectorAll('input[type="radio"][name="rate"]:checked')[0].value;
    const targetPrice = document.querySelectorAll('input[type="radio"][name="price"]:checked')[0].value;

    const newResult = infos.filter(function(curr) {
      return  (isWithinDis(curr.distanceFrom, dis) &
              isHigherCertainRate(curr.rate, lowerBoundRate) &
              isMeetThePrice(curr.priceLevel, targetPrice));
    });

    if (isVaildEntryEnough(newResult.length)) {
      resolve(newResult);
    } else {
      reject("目標地點太少");
    }
  });
}

function cal() {

  markerRemove();
  result.style.display = "none";
  err.style.display = "none";

  const myloc = document.getElementById("mylocation").value;

  //To transfer input address into place's location 
  const ori = addressDecoder(myloc)
  .then(ori => {
    loc = ori;
    return ori;
  })
  .catch(fail => {
    err.innerHTML = fail;
    err.style.display = "block";
    return fail;
  });

  //To get nearby places according to the origin
  const dest = ori.then(ori => {
    return getPlacesLocation(ori);
  })
  .catch(fail=>{
    return fail;
  });

  //Reordered the nearby places array based on time
  const orderedDest = dest.then(dest => {
    return orederResultbyTime(loc, dest);
  })
  .catch(fail => {
    return fail;
  });

  //Filter out the result based on the certained constrains
  const filteredRes = orderedDest.then(orderedDest => {
    err.style.display = "none";
    return getFilterResult(orderedDest);
  })
  .catch(fail => {
    err.style.display = "block";
    err.innerHTML = fail;
    return fail;
  });

  //Display the filtered out result on the wheels
  filteredRes.then(filteredRes => {
    drawTheWheel(filteredRes);
    startSpin(filteredRes);
  })
  .catch(fail => {
      return fail;
    }
  );
  
}









