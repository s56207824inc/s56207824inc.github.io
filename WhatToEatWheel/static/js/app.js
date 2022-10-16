
const NO_LIMIT = 5;
const DEFAULT_NUM = 5;

let theWheel;
let map, infoWindow;

let err = document.getElementById("msg-error");
let result = document.getElementById("msg-result");


let dis, myloc, geocoder;
let pos, service;
let Info = [];

let colorMap = [
  '#eae56f',
  '#e7706f',
  '#7de6ef',
]

class placeInfo {
  constructor() {
    this.rating = 0;
    this.durationTxt = "None";
    this.durationVal = 0;
    this.distanceFrom = 0;
    this.placeName = "None";
    this.priceLevel = 0;
    this.isOpening = false;
  }
}


for(let i=0; i<DEFAULT_NUM; i++) {
  Info.push(new placeInfo());
}
window.initMap = initMap;


//--check utilis--
function isNumber(inputs) {
  if(inputs === '' || inputs === ' ') {
    return false;
  }
  return Number(inputs).toString() != "NaN";
} 


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
function startSpin() {
  if(Info[0].durationTxt !=='None') {
    theWheel.stopAnimation(false);
    theWheel.rotationAngle = theWheel.rotationAngle % 360;
    theWheel.startAnimation();
  }
}


function alertPrize() {
  let winningSegment = theWheel.getIndicatedSegment();
  playSound();
  // alert("You have won " + winningSegment.text + "!");
  result.innerHTML = winningSegment.text;
  result.style.display = "block";
  err.style.display = "none";
}


function playSound() {
  let audio = document.getElementById("myAudio");
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}


//draw the wheels
function drawTheWheel(numberValid) {
  //刪除default wheel
  delete theWheel; 
  const numSegments = numberValid;
  let segments = [];
  // TODO:輪盤樣式、顏色改好看一點
  for (let i = 0; i < numSegments; i++) {
    let colorIndex = (i % colorMap.length);
    let segmentInfo = {'fillStyle': colorMap[colorIndex], 'text': Info[i].placeName.slice(0, 7)};
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
  drawTriangle();
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




//callback functions
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.5, lng: 121 },
    zoom: 8,
  });
  infoWindow = new google.maps.InfoWindow();
  drawTheWheel(DEFAULT_NUM);
}



function cal() {
  // TODO:餐廳營業時間篩選
  // TODO:轉盤相同顏色順序相鄰
  dis = document.querySelectorAll('input[type="radio"][name="distance"]:checked')[0].value;
  myloc = document.getElementById("mylocation").value;

  if (!isAddress(myloc)) {
    err.innerHTML= "地址非有效值";
    err.style.display = "block";
    result.style.display = "none";
  } else {
    err.style.display = "none";
  }

  geocoder = new google.maps.Geocoder();
  geocoder.geocode({
    'address': myloc
    }, 
    function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        map.setZoom(16);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
        pos = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        getNearbyPlaces(pos);
      } else {
        console.log(status);
      }
  });
}


function getNearbyPlaces(position) {
  console.log('call getNearbyPlaces');
  let request = {
    location: position,
    rankBy: google.maps.places.RankBy.DISTANCE,
    keyword: 'restaurant',
    Field: ["price_level", "rating", "open_now"]
  };
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, nearbyCallback);
}


function nearbyCallback(places, status) {
  console.log('call nearbyCallback')
  let destination = [];
  Info = [];

  if (status == google.maps.places.PlacesServiceStatus.OK) {
    places.forEach(place => {
      let currLocation = new google.maps.LatLng(place.geometry.location.lat(), 
                                                place.geometry.location.lng());
      let instance = new placeInfo()
      //TODO:check opening_hours.open_now <- "google may be discard this feature" 
      //x = (x === undefined) ? your_default_value : x;
      instance.rating = (place.rating === undefined) ? 1 : place.rating;
      instance.priceLevel = (place.price_level === undefined) ? NO_LIMIT : place.price_level;
      instance.placeName = place.name;
      // instance.isOpening = place.opening_hours.open_now

      Info.push(instance);
      destination.push(currLocation);
    });
    calculateDistance(destination);
  }
}


function calculateDistance(destination) {
  console.log('call calculateDistance');
  const serviceForDistance = new google.maps.DistanceMatrixService();
  const methodType = document.querySelectorAll('input[type="radio"][name="method"]:checked')[0].value;
  serviceForDistance.getDistanceMatrix({
    origins: [pos],
    destinations: destination,
    travelMode: methodType,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: true,
    avoidTolls: true,
  }, testCallBack);
}

function testCallBack(results, status) {
  console.log('call testCallBack');
  const lowerBoundRate = document.querySelectorAll('input[type="radio"][name="rate"]:checked')[0].value;
  const targetPrice = document.querySelectorAll('input[type="radio"][name="price"]:checked')[0].value;


  for (let i = 0; i < results.rows[0].elements.length; i++) {
    Info[i].distanceFrom = results.rows[0].elements[i].distance.value;
    Info[i].durationVal = results.rows[0].elements[i].duration.value;
    Info[i].durationTxt = results.rows[0].elements[i].duration.text;
  }


  Info.sort(function(a, b) {
    ///the sort format need to explore!!!!
    return a.distanceFrom > b.distanceFrom ? 1 : -1; 
  });


  let numberValid=0;
  for (let i = 0; i < Info.length; i++) {
    if (isWithinDis(Info[i].distanceFrom, dis) & 
        isHigherCertainRate(Info[i].rating, lowerBoundRate) & 
        isMeetThePrice(Info[i].priceLevel, targetPrice)) {
      Info[numberValid] = Info[i];
      numberValid += 1
    } 
  }

  
  if (isVaildEntryEnough(numberValid)) {
    drawTheWheel(numberValid);
    startSpin();
    err.style.display = "none";
  } else {
    err.innerHTML= "目標地點太少";
    err.style.display = "block";
  }
}