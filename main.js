$(document).ready(function() {

  var weatherArray = ['sunny','cloudy','rainy', 'snowy', 'stormy'];
  var randNum = Math.floor(Math.random() * 5);
  
  if(weatherArray[randNum] == 'sunny'){
    $('.sunny').show();
  	// window.open("sunny.html");
  	console.log('sunny');

  }else if (weatherArray[randNum] == 'cloudy'){
    $('.cloudy').show();
  	console.log('cloudy');

  }else if (weatherArray[randNum] == 'rainy'){
    $('.rainy').show();
  	console.log('rainy');
  	
  }else if (weatherArray[randNum] == 'snowy'){
    $('.snowy').show();
  	console.log('snowy');
  	
  }else if (weatherArray[randNum] == 'stormy'){
    $('.stormy').show();
  	console.log('stormy');
  	
  }

});