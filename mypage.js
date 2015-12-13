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
  $scope.people =[
		{"first":"./images/P1/IMG_NEW_2367.PNG","rest":["./images/P1/IMG_NEW_2367.PNG","./images/P1/IMG_NEW_2368.PNG",
		"./images/P1/IMG_NEW_2369.PNG","./images/P1/IMG_NEW_2370.PNG",]},

		{"first":"./images/P2/IMG_NEW_2363.PNG","rest":["./images/P2/IMG_NEW_2363.PNG","./images/P2/IMG_NEW_2364.PNG", 
		"./images/P2/IMG_NEW_2365.PNG","./images/P2/IMG_NEW_2366.PNG"]},

		{"first":"./images/P3/IMG_NEW_2357.PNG","rest":["./images/P3/IMG_NEW_2357.PNG","./images/P3/IMG_NEW_2358.PNG",
		"./images/P3/IMG_NEW_2359.PNG","./images/P3/IMG_NEW_2361.PNG","./images/P3/IMG_NEW_2362.PNG"]},

		{"first":"./images/P4/IMG_NEW_2353.PNG","rest":["./images/P4/IMG_NEW_2353.PNG","./images/P4/IMG_NEW_2354.PNG",
		"./images/P4/IMG_NEW_2355.PNG","./images/P4/IMG_NEW_2356.PNG"]}, 

		{"first":"./images/P5/IMG_NEW_2347.PNG","rest":["./images/P5/IMG_NEW_2347.PNG","./images/P5/IMG_NEW_2348.PNG",
		"./images/P5/IMG_NEW_2349.PNG","./images/P5/IMG_NEW_2350.PNG","./images/P5/IMG_NEW_2351.PNG", "./images/P5/IMG_NEW_2352.PNG"]}, 

		{"first":"./images/P6/IMG_NEW_2341.PNG","rest":["./images/P6/IMG_NEW_2341.PNG","./images/P6/IMG_NEW_2342.PNG",
		"./images/P6/IMG_NEW_2343.PNG","./images/P6/IMG_NEW_2344.PNG","./images/P6/IMG_NEW_2345.PNG","./images/P6/IMG_NEW_2346.PNG"]}, 

		{"first":"./images/P7/IMG_NEW_2335.PNG","rest":["./images/P7/IMG_NEW_2335.PNG","./images/P7/IMG_NEW_2336.PNG",
		"./images/P7/IMG_NEW_2337.PNG","./images/P7/IMG_NEW_2338.PNG","./images/P7/IMG_NEW_2339.PNG", "./images/P7/IMG_NEW_2340.PNG"]},

		{"first":"./images/P8/IMG_NEW_2325.PNG","rest":["./images/P8/IMG_NEW_2325.PNG","./images/P8/IMG_NEW_2326.PNG",
		"./images/P8/IMG_NEW_2327.PNG","./images/P8/IMG_NEW_2328.PNG","./images/P8/IMG_NEW_2330.PNG"]}, 

		{"first":"./images/P9/IMG_NEW_2331.PNG","rest":["./images/P9/IMG_NEW_2331.PNG","./images/P9/IMG_NEW_2332.PNG",
		"./images/P9/IMG_NEW_2333.PNG","./images/P9/IMG_NEW_2334.PNG"]}, 

		{"first":"./images/P10/IMG_NEW_2321.PNG","rest":["./images/P10/IMG_NEW_2321.PNG","./images/P10/IMG_NEW_2322.PNG",
		"./images/P10/IMG_NEW_2323.PNG","./images/P10/IMG_NEW_2324.PNG"]},

		{"first":"./images/P11/IMG_NEW_2315.PNG","rest":["./images/P11/IMG_NEW_2315.PNG","./images/P11/IMG_NEW_2316.PNG",
		"./images/P11/IMG_NEW_2317.PNG","./images/P11/IMG_NEW_2318.PNG","./images/P11/IMG_NEW_2319.PNG","./images/P11/IMG_NEW_2320.PNG"]},

		{"first":"./images/P12/IMG_NEW_2309.PNG","rest":["./images/P12/IMG_NEW_2309.PNG","./images/P12/IMG_NEW_2310.PNG",
		"./images/P12/IMG_NEW_2311.PNG","./images/P12/IMG_NEW_2313.PNG","./images/P12/IMG_NEW_2314.PNG", "./images/P12/6.PNG"]},

		{"first":"./images/P13/IMG_NEW_2306.PNG","rest":["./images/P13/IMG_NEW_2306.PNG","./images/P13/IMG_NEW_2307.PNG",
		"./images/P13/IMG_NEW_2308.PNG"]},

		{"first":"./images/P14/IMG_NEW_2127.PNG","rest":["./images/P14/IMG_NEW_2127.PNG","./images/P14/IMG_NEW_2128.PNG",
		"./images/P14/IMG_NEW_2129.PNG"]},

		{"first":"./images/P15/IMG_NEW_2301.PNG","rest":["./images/P15/IMG_NEW_2301.PNG","./images/P15/IMG_NEW_2302.PNG",
		"./images/P15/IMG_NEW_2303.PNG","./images/P15/IMG_NEW_2304.PNG","./images/P15/IMG_NEW_2305.PNG"]},

		{"first":"./images/P16/IMG_NEW_2297.PNG","rest":["./images/P16/IMG_NEW_2297.PNG","./images/P16/IMG_NEW_2298.PNG",
		"./images/P16/IMG_NEW_2299.PNG","./images/P16/IMG_NEW_2300.PNG"]},

		{"first":"./images/P17/IMG_NEW_2294.PNG","rest":["./images/P17/IMG_NEW_2294.PNG","./images/P17/IMG_NEW_2295.PNG",
		"./images/P17/IMG_NEW_2296.PNG"]},

		{"first":"./images/P18/IMG_NEW_2289.PNG","rest":["./images/P18/IMG_NEW_2289.PNG","./images/P18/IMG_NEW_2290.PNG",
		"./images/P18/IMG_NEW_2291.PNG","./images/P18/IMG_NEW_2292.PNG","./images/P18/IMG_NEW_2293.PNG"]},

		{"first":"./images/P19/IMG_NEW_2285.PNG","rest":["./images/P19/IMG_NEW_2285.PNG","./images/P19/IMG_NEW_2286.PNG"
		,"./images/P19/IMG_NEW_2287.PNG","./images/P19/IMG_NEW_2288.PNG"]},

		{"first":"./images/P20/IMG_NEW_2281.PNG","rest":["./images/P20/IMG_NEW_2281.PNG","./images/P20/IMG_NEW_2282.PNG",
		"./images/P20/IMG_NEW_2283.PNG", "./images/P20/IMG_NEW_2284.PNG"]},

		{"first":"./images/P21/IMG_NEW_2275.PNG","rest":["./images/P21/IMG_NEW_2275.PNG","./images/P21/IMG_NEW_2276.PNG",
		"./images/P21/IMG_NEW_2277.PNG", "./images/P21/IMG_NEW_2278.PNG", "./images/P21/IMG_NEW_2279.PNG", "./images/P21/IMG_NEW_2280.PNG"]},

		{"first":"./images/P22/IMG_NEW_2271.PNG","rest":["./images/P22/IMG_NEW_2271.PNG","./images/P22/IMG_NEW_2272.PNG",
		"./images/P22/IMG_NEW_2273.PNG","./images/P22/IMG_NEW_2274.PNG"]},

		{"first":"./images/P23/IMG_NEW_2266.PNG","rest":["./images/P23/IMG_NEW_2266.PNG","./images/P23/IMG_NEW_2267.PNG",
		 "./images/P23/IMG_NEW_2269.PNG", "./images/P23/IMG_NEW_2270.PNG"]},

		{"first":"./images/P24/IMG_NEW_2259.PNG","rest":["./images/P24/IMG_NEW_2259.PNG","./images/P24/IMG_NEW_2260.PNG",
		"./images/P24/IMG_NEW_2261.PNG", "./images/P24/IMG_NEW_2262.PNG", "./images/P24/IMG_NEW_2263.PNG", "./images/P24/IMG_NEW_2264.PNG"]},

		{"first":"./images/P25/IMG_NEW_2252.PNG","rest":["./images/P25/IMG_NEW_2252.PNG","./images/P25/IMG_NEW_2253.PNG",
		"./images/P25/IMG_NEW_2254.PNG","./images/P25/IMG_NEW_2256.PNG","./images/P25/IMG_NEW_2257.PNG"]},

		{"first":"./images/P26/IMG_NEW_2249.PNG","rest":["./images/P26/IMG_NEW_2249.PNG","./images/P26/IMG_NEW_2250.PNG",
		"./images/P26/IMG_NEW_2251.PNG"]},

		{"first":"./images/P27/IMG_NEW_2245.PNG","rest":["./images/P27/IMG_NEW_2245.PNG","./images/P27/IMG_NEW_2246.PNG",
		"./images/P27/IMG_NEW_2247.PNG", "./images/P27/IMG_NEW_2248.PNG"]},

		{"first":"./images/P28/IMG_NEW_2240.PNG","rest":["./images/P28/IMG_NEW_2241.PNG","./images/P28/IMG_NEW_2242.PNG",
		"./images/P28/IMG_NEW_2243.PNG", "./images/P28/IMG_NEW_2244.PNG"]},

		{"first":"./images/P29/IMG_NEW_2237.PNG","rest":["./images/P29/IMG_NEW_2237.PNG","./images/P29/IMG_NEW_2238.PNG",
		"./images/P29/IMG_NEW_2239.PNG"]},

		{"first":"./images/P30/IMG_NEW_2231.PNG","rest":["./images/P30/IMG_NEW_2231.PNG","./images/P30/IMG_NEW_2232.PNG",
		"./images/P30/IMG_NEW_2233.PNG", "./images/P30/IMG_NEW_2234.PNG", "./images/P30/IMG_NEW_2235.PNG", "./images/P30/IMG_NEW_2236.PNG"]},

		{"first":"./images/P31/IMG_NEW_2228.PNG","rest":["./images/P31/IMG_NEW_2228.PNG","./images/P31/IMG_NEW_2229.PNG",
		"./images/P31/IMG_NEW_2230.PNG"]},

		{"first":"./images/P32/IMG_NEW_2223.PNG","rest":["./images/P32/IMG_NEW_2223.PNG","./images/P32/IMG_NEW_2224.PNG",
		"./images/P32/IMG_NEW_2225.PNG", "./images/P32/IMG_NEW_2226.PNG", "./images/P32/IMG_NEW_2227.PNG"]},

		{"first":"./images/P33/IMG_NEW_2219.PNG","rest":["./images/P33/IMG_NEW_2219.PNG","./images/P33/IMG_NEW_2220.PNG",
		"./images/P33/IMG_NEW_2221.PNG", "./images/P33/IMG_NEW_2222.PNG"]},

		{"first":"./images/P34/IMG_NEW_2212.PNG","rest":["./images/P34/IMG_NEW_2212.PNG","./images/P34/IMG_NEW_2213.PNG",
		"./images/P34/IMG_NEW_2214.PNG", "./images/P34/IMG_NEW_2215.PNG", "./images/P34/IMG_NEW_2216.PNG", "./images/P34/IMG_NEW_2218.PNG"]},

		{"first":"./images/P35/IMG_NEW_2206.PNG","rest":["./images/P35/IMG_NEW_2206.PNG","./images/P35/IMG_NEW_2207.PNG",
		"./images/P35/IMG_NEW_2208.PNG", "./images/P35/IMG_NEW_2209.PNG", "./images/P35/IMG_NEW_2210.PNG", "./images/P35/IMG_NEW_2211.PNG"]},

		{"first":"./images/P36/IMG_NEW_2200.PNG","rest":["./images/P36/IMG_NEW_2200.PNG","./images/P36/IMG_NEW_2201.PNG"
		,"./images/P36/IMG_NEW_2202.PNG","./images/P36/IMG_NEW_2203.PNG","./images/P36/IMG_NEW_2204.PNG","./images/P36/IMG_NEW_2205.PNG"]},

		{"first":"./images/P37/IMG_NEW_2195.PNG","rest":["./images/P37/IMG_NEW_2195.PNG","./images/P37/IMG_NEW_2196.PNG",
		"./images/P37/IMG_NEW_2197.PNG", "./images/P37/IMG_NEW_2198.PNG", "./images/P37/IMG_NEW_2199.PNG"]},

		{"first":"./images/P38/IMG_NEW_2191.PNG","rest":["./images/P38/IMG_NEW_2191.PNG","./images/P38/IMG_NEW_2192.PNG",
		"./images/P38/IMG_NEW_2193.PNG", "./images/P38/IMG_NEW_2194.PNG"]},	

		{"first":"./images/P39/IMG_NEW_2185.PNG","rest":["./images/P39/IMG_NEW_2185.PNG","./images/P39/IMG_NEW_2186.PNG",
		"./images/P39/IMG_NEW_2187.PNG", "./images/P39/IMG_NEW_2188.PNG", "./images/P39/IMG_NEW_2189.PNG", "./images/P39/IMG_NEW_2190.PNG"]},			

		{"first":"./images/P40/IMG_NEW_2182.PNG","rest":["./images/P40/IMG_NEW_2182.PNG","./images/P40/IMG_NEW_2183.PNG",
		"./images/P40/IMG_NEW_2184.PNG"]},	

		{"first":"./images/P41/IMG_NEW_2176.PNG","rest":["./images/P41/IMG_NEW_2176.PNG","./images/P41/IMG_NEW_2177.PNG"
		,"./images/P41/IMG_NEW_2178.PNG","./images/P41/IMG_NEW_2179.PNG","./images/P41/IMG_NEW_2180.PNG","./images/P41/IMG_NEW_2181.PNG"]},

		{"first":"./images/P42/IMG_NEW_2171.PNG","rest":["./images/P42/IMG_NEW_2171.PNG","./images/P42/IMG_NEW_2172.PNG",
		"./images/P42/IMG_NEW_2173.PNG", "./images/P42/IMG_NEW_2174.PNG", "./images/P42/IMG_NEW_2175.PNG"]},

		{"first":"./images/P43/IMG_NEW_2159.PNG","rest":["./images/P43/IMG_NEW_2159.PNG","./images/P43/IMG_NEW_2160.PNG",
		"./images/P43/IMG_NEW_2161.PNG", "./images/P43/IMG_NEW_2162.PNG", "./images/P43/IMG_NEW_2163.PNG"]},

		{"first":"./images/P44/IMG_NEW_2165.PNG","rest":["./images/P44/IMG_NEW_2165.PNG","./images/P44/IMG_NEW_2166.PNG",
		"./images/P44/IMG_NEW_2167.PNG", "./images/P44/IMG_NEW_2168.PNG", "./images/P44/IMG_NEW_2169.PNG", "./images/P44/IMG_NEW_2170.PNG"]},	

		{"first":"./images/P45/IMG_NEW_2155.PNG","rest":["./images/P45/IMG_NEW_2155.PNG","./images/P45/IMG_NEW_2156.PNG",
		"./images/P45/IMG_NEW_2157.PNG", "./images/P45/IMG_NEW_2158.PNG"]},

		{"first":"./images/P46/IMG_NEW_2150.PNG","rest":["./images/P46/IMG_NEW_2150.PNG","./images/P46/IMG_NEW_2151.PNG",
		"./images/P46/IMG_NEW_2152.PNG", "./images/P46/IMG_NEW_2153.PNG", "./images/P46/IMG_NEW_2154.PNG"]},

		{"first":"./images/P47/IMG_NEW_2144.PNG","rest":["./images/P47/IMG_NEW_2144.PNG","./images/P47/IMG_NEW_2145.PNG",
		"./images/P47/IMG_NEW_2146.PNG", "./images/P47/IMG_NEW_2147.PNG", "./images/P47/IMG_NEW_2148.PNG", "./images/P47/IMG_NEW_2149.PNG"]},	

		{"first":"./images/P48/IMG_NEW_2138.PNG","rest":["./images/P48/IMG_NEW_2138.PNG","./images/P48/IMG_NEW_2139.PNG",
		"./images/P48/IMG_NEW_2140.PNG", "./images/P48/IMG_NEW_2141.PNG", "./images/P48/IMG_NEW_2142.PNG", "./images/P48/IMG_NEW_2143.PNG"]},	

		{"first":"./images/P49/IMG_NEW_2130.PNG","rest":["./images/P49/IMG_NEW_2130.PNG","./images/P49/IMG_NEW_2131.PNG",
		"./images/P49/IMG_NEW_2132.PNG", "./images/P49/IMG_NEW_2133.PNG"]},				

	];
  
  $scope.people2 =[
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
