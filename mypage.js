//choose which person to use

angular.module("tinderVotes",[])
.controller('tinderVotesController',["$scope", function($scope){
	$scope.sounds_good = false;
	$scope.first_vote = true;
	$scope.first_vote_val = false;
	$scope.curr_person = 0;
	$scope.ask_to_show = true;
	
	//set up parse
  Parse.initialize("vnjYSmOadA1Fiac07JWAtjsnBufIhBJsXrKzMO9b", "m2h50QKpVTO9CarRaEIvPGpj4jDQXb54deJprwVQ");
  $scope.saveAVote = function(person,vote){
  	console.log("entering");
  	if ($scope.first_vote){
  	 	if (vote){
  	 		$scope.first_vote_val = true;
  	 		console.log("hello!");
  	 	}
  	 	else{
  	 		$scope.first_vote_val = false;
  	 	}
  	 	$scope.first_vote = false;
  	}
  	else {
  		//init var, set vote 1
  		var Votes = Parse.Object.extend("Votes");
  		var my_vote = new Votes();
		  my_vote.set("person",person);
		  my_vote.set("vote1",$scope.first_vote_val);
  		my_vote.set("vote2",vote);
		  my_vote.save(null, {
		    success: function(vote) {
		    },
		    error: function(vote, error) {
		    }
	  	});
	  	$scope.first_vote = true;
	  	$scope.ask_to_show = true;
	  	$scope.curr_person++;
	  	console.log($scope.curr_person);
	  	console.log("voted!");
  	}
	  
  };
  $scope.show_a_person = function(person){
  	$scope.ask_to_show = false;
  	setTimeout(function(){
  		var image = $($('.main_image')[person]).css("opacity", "0");}, 200);

  };
  $scope.randoms = 
  $scope.people =[
		{"first":"./images/P1/1.PNG","rest":["./images/P1/1.PNG","./images/P1/2.PNG"]},

		{"first":"./images/P2/1.PNG","rest":["./images/P2/1.PNG","./images/P2/2.PNG", 
		"./images/P2/3.PNG","./images/P2/4.PNG", "./images/P2/5.PNG", "./images/P2/6.PNG"]},

		{"first":"./images/P3/1.PNG","rest":["./images/P3/1.PNG","./images/P3/2.PNG",
		"./images/P3/3.PNG","./images/P3/4.PNG","./images/P3/5.PNG"]},

		{"first":"./images/P4/1.PNG","rest":["./images/P4/1.PNG","./images/P4/2.PNG",
		"./images/P4/3.PNG","./images/P4/4.PNG","./images/P4/5.PNG"]}, 

		{"first":"./images/P5/1.PNG","rest":["./images/P5/1.PNG","./images/P5/2.PNG",
		"./images/P5/3.PNG","./images/P5/4.PNG","./images/P5/5.PNG", "./images/P5/6.PNG"]}, 

		{"first":"./images/P6/1.PNG","rest":["./images/P6/1.PNG","./images/P6/2.PNG",
		"./images/P6/3.PNG","./images/P6/4.PNG"]}, 

		{"first":"./images/P7/1.PNG","rest":["./images/P7/1.PNG","./images/P7/2.PNG",
		"./images/P7/3.PNG","./images/P7/4.PNG","./images/P7/5.PNG", "./images/P7/6.PNG"]},

		{"first":"./images/P8/1.PNG","rest":["./images/P8/1.PNG","./images/P8/2.PNG",
		"./images/P8/3.PNG","./images/P8/4.PNG"]}, 

		{"first":"./images/P9/1.PNG","rest":["./images/P9/1.PNG","./images/P9/2.PNG",
		"./images/P9/3.PNG","./images/P9/4.PNG"]}, 

		{"first":"./images/P10/1.PNG","rest":["./images/P10/1.PNG","./images/P10/2.PNG",
		"./images/P10/3.PNG","./images/P10/4.PNG","./images/P10/5.PNG", "./images/P10/6.PNG"]},

		{"first":"./images/P11/1.PNG","rest":["./images/P11/1.PNG","./images/P11/2.PNG",
		"./images/P11/3.PNG","./images/P11/4.PNG","./images/P11/5.PNG"]},

		{"first":"./images/P12/1.PNG","rest":["./images/P12/1.PNG","./images/P12/2.PNG",
		"./images/P12/3.PNG","./images/P12/4.PNG","./images/P12/5.PNG", "./images/P12/6.PNG"]},

		{"first":"./images/P13/1.PNG","rest":["./images/P13/1.PNG","./images/P13/2.PNG",
		"./images/P13/3.PNG","./images/P13/4.PNG","./images/P13/5.PNG"]},

		{"first":"./images/P14/1.PNG","rest":["./images/P14/1.PNG","./images/P14/2.PNG",
		"./images/P14/3.PNG","./images/P14/4.PNG","./images/P14/5.PNG"]},

		{"first":"./images/P15/1.PNG","rest":["./images/P15/1.PNG","./images/P15/2.PNG",
		"./images/P15/3.PNG","./images/P15/4.PNG","./images/P15/5.PNG", "./images/P15/6.PNG"]},

		{"first":"./images/P16/1.PNG","rest":["./images/P16/1.PNG","./images/P16/2.PNG",
		"./images/P16/3.PNG","./images/P16/4.PNG","./images/P16/5.PNG", "./images/P16/6.PNG"]},

		{"first":"./images/P17/1.PNG","rest":["./images/P17/1.PNG","./images/P17/2.PNG",
		"./images/P17/3.PNG","./images/P17/4.PNG"]},

		{"first":"./images/P18/1.PNG","rest":["./images/P18/1.PNG","./images/P18/2.PNG",
		"./images/P18/3.PNG","./images/P18/4.PNG","./images/P18/5.PNG", "./images/P18/6.PNG"]},

		{"first":"./images/P19/1.PNG","rest":["./images/P19/1.PNG","./images/P19/2.PNG"]},

		{"first":"./images/P20/1.PNG","rest":["./images/P20/1.PNG","./images/P20/2.PNG",
		"./images/P20/3.PNG"]},

		{"first":"./images/P21/1.PNG","rest":["./images/P21/1.PNG","./images/P21/2.PNG",
		"./images/P21/3.PNG", "./images/P21/4.PNG"]},

		{"first":"./images/P22/1.PNG","rest":["./images/P22/1.PNG","./images/P22/2.PNG",
		"./images/P22/3.PNG"]},

		{"first":"./images/P23/1.PNG","rest":["./images/P23/1.PNG","./images/P23/2.PNG",
		"./images/P23/3.PNG", "./images/P23/4.PNG", "./images/P23/5.PNG"]},

		{"first":"./images/P24/1.PNG","rest":["./images/P24/1.PNG","./images/P24/2.PNG",
		"./images/P24/3.PNG", "./images/P24/4.PNG"]},

		{"first":"./images/P25/1.PNG","rest":["./images/P25/1.PNG","./images/P25/2.PNG"]},

		{"first":"./images/P26/1.PNG","rest":["./images/P26/1.PNG","./images/P26/2.PNG",
		"./images/P26/3.PNG", "./images/P26/4.PNG"]},

		{"first":"./images/P27/1.PNG","rest":["./images/P27/1.PNG","./images/P27/2.PNG",
		"./images/P27/3.PNG", "./images/P27/4.PNG"]},

		{"first":"./images/P28/1.PNG","rest":["./images/P28/1.PNG","./images/P28/2.PNG",
		"./images/P28/3.PNG", "./images/P28/4.PNG"]},

		{"first":"./images/P29/1.PNG","rest":["./images/P29/1.PNG","./images/P29/2.PNG",
		"./images/P29/3.PNG", "./images/P29/4.PNG", "./images/P29/5.PNG", "./images/P29/6.PNG"]},

		{"first":"./images/P30/1.PNG","rest":["./images/P30/1.PNG","./images/P30/2.PNG",
		"./images/P30/3.PNG", "./images/P30/4.PNG", "./images/P30/5.PNG"]},

		{"first":"./images/P31/1.PNG","rest":["./images/P31/1.PNG","./images/P31/2.PNG",
		"./images/P31/3.PNG"]},

		{"first":"./images/P32/1.PNG","rest":["./images/P32/1.PNG","./images/P32/2.PNG",
		"./images/P32/3.PNG", "./images/P32/4.PNG", "./images/P32/5.PNG", "./images/P32/6.PNG"]},

		{"first":"./images/P33/1.PNG","rest":["./images/P33/1.PNG","./images/P33/2.PNG",
		"./images/P33/3.PNG", "./images/P33/4.PNG"]},

		{"first":"./images/P34/1.PNG","rest":["./images/P34/1.PNG","./images/P34/2.PNG",
		"./images/P34/3.PNG", "./images/P34/4.PNG", "./images/P34/5.PNG"]},

		{"first":"./images/P35/1.PNG","rest":["./images/P35/1.PNG","./images/P35/2.PNG",
		"./images/P35/3.PNG", "./images/P35/4.PNG", "./images/P35/5.PNG", "./images/P35/6.PNG"]},

		{"first":"./images/P36/1.PNG","rest":["./images/P36/1.PNG","./images/P36/2.PNG"]},

		{"first":"./images/P37/1.PNG","rest":["./images/P37/1.PNG","./images/P37/2.PNG",
		"./images/P37/3.PNG", "./images/P37/4.PNG", "./images/P37/5.PNG", "./images/P37/6.PNG"]},

		{"first":"./images/P38/1.PNG","rest":["./images/P38/1.PNG","./images/P38/2.PNG",
		"./images/P38/3.PNG", "./images/P38/4.PNG", "./images/P38/5.PNG", "./images/P38/6.PNG"]},	

		{"first":"./images/P39/1.PNG","rest":["./images/P39/1.PNG","./images/P39/2.PNG",
		"./images/P39/3.PNG", "./images/P39/4.PNG", "./images/P39/5.PNG", "./images/P39/6.PNG"]},			

		{"first":"./images/P40/1.PNG","rest":["./images/P40/1.PNG","./images/P40/2.PNG",
		"./images/P40/3.PNG", "./images/P40/4.PNG"]},	

		{"first":"./images/P41/1.PNG","rest":["./images/P41/1.PNG","./images/P41/2.PNG"]},

		{"first":"./images/P42/1.PNG","rest":["./images/P42/1.PNG","./images/P42/2.PNG",
		"./images/P42/3.PNG", "./images/P42/4.PNG"]},

		{"first":"./images/P43/1.PNG","rest":["./images/P43/1.PNG","./images/P43/2.PNG",
		"./images/P43/3.PNG", "./images/P43/4.PNG", "./images/P43/5.PNG"]},

		{"first":"./images/P44/1.PNG","rest":["./images/P44/1.PNG","./images/P44/2.PNG",
		"./images/P44/3.PNG", "./images/P44/4.PNG", "./images/P44/5.PNG", "./images/P44/6.PNG"]},	

		{"first":"./images/P45/1.PNG","rest":["./images/P45/1.PNG","./images/P45/2.PNG",
		"./images/P45/3.PNG", "./images/P45/4.PNG", "./images/P45/5.PNG"]},

		{"first":"./images/P46/1.PNG","rest":["./images/P46/1.PNG","./images/P46/2.PNG",
		"./images/P46/3.PNG", "./images/P46/4.PNG", "./images/P46/5.PNG"]},

		{"first":"./images/P47/1.PNG","rest":["./images/P47/1.PNG","./images/P47/2.PNG",
		"./images/P47/3.PNG", "./images/P47/4.PNG", "./images/P47/5.PNG", "./images/P47/6.PNG"]},	

		{"first":"./images/P48/1.PNG","rest":["./images/P48/1.PNG","./images/P48/2.PNG",
		"./images/P48/3.PNG", "./images/P48/4.PNG", "./images/P48/5.PNG", "./images/P48/6.PNG"]},	

		{"first":"./images/P49/1.PNG","rest":["./images/P49/1.PNG","./images/P49/2.PNG",
		"./images/P49/3.PNG", "./images/P49/4.PNG", "./images/P49/5.PNG", "./images/P49/6.PNG"]},				

	];
  

}]);

//make an ng-repeat with the 49 images and their after images, make 49 randoms
