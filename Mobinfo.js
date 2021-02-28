console.log('Welcome to Mobinfo');

//                                         DEVICE TYPE CODE 
const ua = navigator.userAgent;
if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
  document.getElementById('deviceType').innerHTML = "Device Type : Tablet or Ipad";
}
else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
  document.getElementById('deviceType').innerHTML = "Device Type : Mobile";
}
else {
  document.getElementById('deviceType').innerHTML = "Device Type : Laptop or Computer ";

}
//                                                   ANDROID version

var element = document.getElementById("body");
function androidV(ua) {

  ua = (ua || navigator.userAgent).toLowerCase();

  var match = ua.match(/android\s([0-9\.]*)/i);

  return match ? match[1] : undefined;

};

function GFG_Fun() {

  //	$('#geeks').html(androidV()); 
  document.getElementById('geeks').innerHTML = "Android Version :" + androidV()
}

var android = GFG_Fun();




// OPERATING SYSTEM 
console.log(navigator.userAgent)
var OSName = "Unknown";
if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) OSName = "Windows 10";
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName = "Windows 8";
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName = "Windows 7";
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName = "Windows Vista";
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName = "Windows XP";
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName = "Windows 2000";
if (window.navigator.userAgent.indexOf("Mac") != -1) OSName = "Mac/iOS";
if (window.navigator.userAgent.indexOf("X11") != -1) OSName = "UNIX";
if (window.navigator.userAgent.indexOf("Linux") != -1) OSName = android;
document.getElementById('os').innerHTML = "Operating System : " + OSName;

/*
// ANDROID version

var element = document.getElementById("body"); 
function androidV(ua) { 

  ua = (ua || navigator.userAgent).toLowerCase();  

  var match = ua.match(/android\s([0-9\.]*)/i); 

  return match ? match[1] : undefined; 

}; 

function GFG_Fun() {             

//	$('#geeks').html(androidV()); 
document.getElementById('geeks').innerHTML = "Android Version :" + androidV()
} 

var android = GFG_Fun() ;


*/
/*                                         BATTERY STATUS SCRIPT          */
var batteryDisTime;
var batteryLevel;
var batteryCTime;
var batteryCharge;


navigator.getBattery().then(function (battery) {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener('chargingchange', function () {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    batteryCharge = "Battery charging : "
      + (battery.charging ? "Yes" : "No");
  }

  battery.addEventListener('levelchange', function () {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    battteryLevel = "Battery level : "
      + battery.level * 100 + "%";
  }

  battery.addEventListener('chargingtimechange', function () {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    batteryCTime = "Battery charging time: "
      + battery.chargingTime + " seconds";
  }

  battery.addEventListener('dischargingtimechange', function () {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    batteryDisTime = "Battery discharging time: "
      + battery.dischargingTime + " seconds";
  }

  document.getElementById("batteryCharge").innerHTML = batteryCharge;
  document.getElementById('batteryLevel').innerHTML = battteryLevel;
  document.getElementById('batteryCTime').innerHTML = batteryCTime;
  document.getElementById('batteryDisTime').innerHTML = batteryDisTime;
});

//                                          SCREEN SCRIPT



var txxt = "";
txxt += "<p> Screen Width: " + screen.width + "px </p>";
txxt += "<p>Screen Height :" + screen.height + "px </p>"

txxt += "<p>Color depth: " + screen.colorDepth + "</p>";
txxt += "<p>Color resolution: " + screen.pixelDepth + "</p>";

document.getElementById("screen").innerHTML = txxt;

//                                       JAVA 

function myFunction() {
  var java = "Java Enabled: " + navigator.javaEnabled();
  document.getElementById('java').innerHTML = java;
}
myFunction()
//                      Active x  




myFunction()

if (typeof (window.ActiveXObject) == "undefined") {
  document.getElementById('Activex').innerHTML = "ActiveX : not supported";
} else {
  document.getElementById('Activex').innerHTML = "ActiveX :  supported";
}

//                          Tab detection


var myclose = false;

function ConfirmClose() {
  if (event.clientY < 0) {
    event.returnValue = 'You have closed the browser. Do you want to logout from your application?';
    setTimeout('myclose=false', 10);
    myclose = true;
  }
}

function HandleOnClose() {
  if (myclose == true) {
    //the url of your logout page which invalidate session on logout 
    location.replace("google.com");
  }
}
console.log(navigator.doNotTrack);
// prints "1" if DNT is enabled; "0" if the user opted-in for tracking; otherwise this is "unspecified"


(async () => {

  var is_private;

  if ("storage" in navigator && "estimate" in navigator.storage) {
    const { usage, quota } = await navigator.storage.estimate();
    console.log(`Using ${usage} out of ${quota} bytes.`);
    if (quota < 120000000) {
      // Incognito;
      is_private = true;
    } else {
      // Not Incognito
      is_private = false;
    }
  } else {
    // Can not detect
    is_private = null;
  }


  document.getElementById("tab").innerHTML =
    is_private === null
      ? "Tab : cannot detect"
      : is_private
        ? "Tab Type : Incognito <span>👻</span>"
        : "Tab Type : Not Incognito <span>🖐️</span>";
})();


//                                       FONTS DETECTIONS


window.onload = function () {
  document.getElementById("font").innerHTML = "Fonts : " + Detector.getFontList();
}

var Detector =
{
  init: function () {
    this.h = document.getElementsByTagName("BODY")[0];
    this.d = document.createElement("DIV");
    this.s = document.createElement("SPAN");
    this.d.appendChild(this.s);
    this.d.style.fontFamily = "sans";
    this.s.style.fontFamily = "sans";
    this.s.style.fontSize = "72px";
    this.s.innerHTML = "mmmmmmmmmmlil";
    this.h.appendChild(this.d);
    this.defaultWidth = this.s.offsetWidth;
    this.defaultHeight = this.s.offsetHeight;
    this.h.removeChild(this.d)
  },
  test: function (a) {
    this.h.appendChild(this.d);
    var b = [];
    b.name = this.s.style.fontFamily = a;
    b.width = this.s.offsetWidth;
    b.height = this.s.offsetHeight;
    this.h.removeChild(this.d);
    a = a.toLowerCase();
    if (a == "serif") {
      b.found = true
    } else {
      b.found = (b.width != this.defaultWidth || b.height != this.defaultHeight)
    }
    return b
  },

  getFontList: function () {
    this.init();
    var a = ["cursive", "monospace", "serif", "sans-serif", "fantasy", "default", "Arial", "Arial Black", "Arial Narrow", "Arial Rounded MT Bold", "Book Antiqua", "Bookman Old Style", "Bradley Hand ITC", "Bodoni MT", "Calibri", "Century", "Century Gothic", "Casual", "Comic Sans MS", "Consolas", "Copperplate Gothic Bold", "Courier", "Courier New", "English Text MT", "Felix Titling", "Futura", "Garamond", "Geneva", "Georgia", "Gentium", "Haettenschweiler", "Helvetica", "Impact", "Jokerman", "King", "Kootenay", "Latha", "Liberation Serif", "Lucida Console", "Lalit", "Lucida Grande", "Magneto", "Mistral", "Modena", "Monotype Corsiva", "MV Boli", "OCR A Extended", "Onyx", "Palatino Linotype", "Papyrus", "Parchment", "Pericles", "Playbill", "Segoe Print", "Shruti", "Tahoma", "TeX", "Times", "Times New Roman", "Trebuchet MS", "Verdana", "Verona"];
    var c = "";
    for (i = 0; i < a.length; ++i) {
      var b = this.test(a[i]);
      if (b.found) {
        c += b.name + ","
      }
    }
    return c.slice(0, - 1)
  }
};
var file = navigator.plugins.filename;
document.getElementById('fontFileName').innerHTML = "Plugin File Name : " + file ;

if (navigator.plugins.filename) {
  document.getElementById('filefont').innerHTML = "Plugin File Font : Yes ";
} else {
  document.getElementById('filefont').innerHTML = "Plugin File Font : No " ;
}


//                          Device storage

const memory = navigator.deviceMemory.toFixed() ;
    document.getElementById('ram').innerHTML = 'RAM : ' + memory;

    console.log (`This device has at least ${memory}GiB of RAM.`)

    //                       FLASH

    var Flash = false; 
    var flashInstall = document.getElementById('flash') ;
  

    function FlashFunction() { 

        try { 

            Flash =  

            Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash')); 

        } catch (exception) { 

            Flash = ('undefined' != typeof navigator.mimeTypes[ 

                'application/x-shockwave-flash']); 

        } 

       flashInstall.innerHTML = "Flash Installed : " + Flash; 

    } 
    FlashFunction();

//                                REFEREAL
var showReferal = document.referrer;
//console.log(showReferal )
if (showReferal = " ") {
  document.getElementById('refereal').innerHTML = 'Reference : No' ;
} else {
  document.getElementById('refereal').innerHTML = 'Reference : ' + showReferal ;

}

//                             KEY DETCTOR
var capskey ;


function myKeyPress(e){
  var keynum;
  
  if(window.event) { // IE                  
  keynum = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera                 
  keynum = e.which;
  }
  

  document.getElementById('key').innerHTML= "Last Key Pressed  : " +  String.fromCharCode(keynum)  ;

              //             CAPs Lock
  
  }
  
  /*
  $("input").keypress(function(event){
  alert(String.fromCharCode(event.which)); 
  });
  
  */
 
  document.getElementById("capsLock").addEventListener('keyup', function(e) {
    var caps_lock_on = e.getModifierState('CapsLock');
  
    if(caps_lock_on == true) 
      document.getElementById('showCapslock').innerHTML =  'Caps Lock is turned on' ;
    else
    document.getElementById('showCapslock').innerHTML = 'Caps Lock is turned off' ;

     
  });
