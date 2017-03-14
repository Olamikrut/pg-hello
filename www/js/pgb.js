function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	if(navigator.onLine){
  alert('online');
 } else {
  alert('offline');
 }
	
}
