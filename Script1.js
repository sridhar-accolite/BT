alert('Welcome');

var  myapp = angular.module("MyApp",[]);
       myapp.controller("MainController",function($scope){
       	$scope.timer=6000;
       });
       myapp.controller("TimeCtrl",function($scope,$timeout){
       			$scope.clock = "loading clock..."; // initialise the time variable
    $scope.tickInterval = 1000 //ms

    var tick = function() {

    	var d = new Date(); //get current time
    var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet current mm:ss to seconds for easier caculation, we don't care hours.
    var fiveMin = 60 * 5; //five minutes is 300 seconds!
    var timeleft = fiveMin - seconds % fiveMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
    var result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds back into mm:ss 



        $scope.clock = result // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    }


    // Start the timer
    $timeout(tick, $scope.tickInterval);
       });

       myapp.controller("Timectrl",function($scope,$interval){
       	
       	 var timeController = this;
       	 var startTimer;
       	 $scope.start=function(){
       		alert('STARTED');

       		//If the service is already started it won't start again
       		if ( angular.isDefined(startTimer) ) return;

       		var d = new Date(0,0,0,0,10,0,0);
       		var d_check = new Date(0,0,0,0,9,50,0);
       		timeController.clock={time: "",interval: 1000};
       		timeController.clock.time = d;
       		alert(timeController.clock.time);
       		alert(d_check);
       		startTimer = $interval(function(){
       			if(timeController.clock.time == "00:09:55")
 					$scope.stopTimer();
 				var Min = timeController.clock.time.getMinutes();
 				var Sec = timeController.clock.time.getSeconds();
 				//alert(Min);
 				//alert(Sec);
 				if(Min == 9 && Sec == 56 ){
 				  $scope.stopTimer();
 				  timeController.clock.time = "00:00";
 				  return;
 				}
       			timeController.clock.time = d;
       		d.setSeconds(d.getSeconds() - 1); },
       		timeController.clock.interval);
       		

       		// $interval(function() {
       		// timeController.clock.time = d;
       		// d.setSeconds(d.getSeconds() - 1); },
       		// timeController.clock.interval);
       	 }
   		

       	 $scope.stopTimer = function(){
       	 	if(angular.isDefined(startTimer))
       	 	{
       	 		$interval.cancel(startTimer);
       	 		startTimer=undefined;
       	 	}

       	 	alert('Timer is Stopped');
       	 	timeController.clock.time = "00:00";
       	 }

       	$scope.reset=function(){
       		alert('RESET called');
       		$scope.stopTimer();
       		
       		alert(timeController.clock.time);
       	}
       });


// function TimeCtrl($scope, $timeout) {
//     $scope.clock = "loading clock..."; // initialise the time variable
//     $scope.tickInterval = 1000 //ms

//     var tick = function() {
//         $scope.clock = Date.now() // get the current time
//         $timeout(tick, $scope.tickInterval); // reset the timer
//     }

//     // Start the timer
//     $timeout(tick, $scope.tickInterval);
// }