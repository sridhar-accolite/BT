alert('Success!');
var index_final;
var myApp = angular.module("MyApp",[]);
	

	myApp.directive('editable',function(){
		return {
			restrict: 'E',
			replace: true,
			template: '<div><span ng-hide="editMode">{{lineqty}}</span><input class="span1" ng-show="editMode" type="text" ng-model="line.qty" maxlength="1" size="2" style="width:20px"/></div>'

			// link: function(scope,element,attrs){
			// }
		}
	});


	//Directives for second row
	myApp.directive('edit10',function(){
		return{
			restrict: 'E',
			replace: true,
			template: '<div><span ng-hide="editMode">{{line10}}</span><input class="span1" ng-show="editMode" type="text" ng-model="line.No10" maxlength="1" size="2" style="width:20px"/></div>'
		}
	});

	myApp.directive('edit11',function(){
		return{
			restrict: 'E',
			replace: true,
			template: '<div><span ng-hide="editMode">{{line11}}</span><input class="span1" ng-show="editMode" type="text" ng-model="line.No11" maxlength="1" size="2" style="width:20px"/></div>'
		}
	});

	myApp.directive('edit12',function(){
		return{
			restrict: 'E',
			replace: true,
			template: '<div><span ng-hide="editMode">{{line12}}</span><input class="span1" ng-show="editMode" type="text" ng-model="line.No12" maxlength="1" size="2" style="width:20px"/></div>'
		}
	});


	

	myApp.controller("MainController",function($scope){
		$scope.FirstName="Sridhar";
		$scope.LastName="Babu";
		$scope.editMode=false;
		$scope.lineqty = 2;
		$scope.CellEdit = function(){
			alert('true');
			$scope.editMode=true;
		}
		$scope.CellSave = function(cell){
			// cell.text=$scope.line.qty;
			alert('Saving...');
			$scope.lineqty=$scope.line.qty;
			$scope.editMode=false;
			
		}

		$scope.Linetext2 = "2ndRow";
		$scope.CellEditRow1 = function(){
			alert('Row2');
			$scope.editMode=true;
		}
		$scope.CellSaveRow1 = function(){
			alert('savingRow2');
			$scope.line10=$scope.line.No10;
		}
	});


	 myApp.directive('editcell',function(){
	 	return{
	 		restrict: 'E',
	 		replace: true,
	 		divVal: '=',
	 		spanVal: '=',
	 		// scope: {
	 		// 	divVal: '=divVal',
	 		// 	spanVal: '=spanVal'
	 		// },
	 		template: '<div><span ng-hide="editMode">{{divVal}}</span><input class="span1" ng-show="editMode" type="text" ng-model="spanVal" maxlength="1" size="2" style="width:20px"/></div>'
	 	}
	});


	myApp.controller("ControllerTwo",function($scope){
			$scope.records=[45,46,47,48];
			$scope.ques=[[1,3,2],[5,4,6],[7,0,9]];

			$scope.obj = {
					divVal: "a",
					spanVal: "b",
					value: "2"
					};

			$scope.ClearObject=function(object){
					object.divVal="";
					object.spanVal="";
					object.value="";
			};

			$scope.NValueCheck = function(N){

					//alert('NValueCheck CAlled');

					console.log(N);
					//console.log(N.value);
					

					// if(value==0) 
					// 	$scope.n="";
					// else
					// {
					// 	$scope.show="true";
					// 	//alert(value);
					// }
			}
			var ind=0;
			$scope.DivValArray=[];
			$scope.SpanValArray=[];
			

			$scope.QuesArr=[[],[],[]];
			$scope.QuesArr[0].push($scope.obj);
			$scope.QuesArr[1].push($scope.obj);
			$scope.QuesArr[1].push($scope.obj);
			$scope.QuesArr[2].push($scope.obj);
			//$scope.QuesArr=[[],[],[]];
			$scope.ConvertQuesArray = function()
			{
					
					for(var i=0;i<3;i++)
					{
						for(var j=0;j<3;j++)
						{
							
							if($scope.ques[i][j]!=0)
							{
								//$scope.QuesArr[i][j]=$scope.ques[i][j];
								obj.value=$scope.ques[i][j];
								$scope.QuesArr[i][j]=obj;
							    //alert($scope.QuesArr[i][j]);
							}
							else
							{
								var val1 = "Value"+i+j;
								var val2 = "Value.No"+i+j;
								//var str="<EditCell divVal='Value"+i+j+"' spanVal='Value.No"+i+j+"' ></EditCell>";
								var str="<editcell divVal='"+val1+"' spanVal='"+val2+"' ></editcell>";
								obj.divVal=val1;
								obj.spanVal=val2;
								obj.value=0;
								$scope.DivValArray[ind] = val1;
								$scope.SpanValArray[ind++] = val2;
								//$scope.QuesArr[i][j]=str;
								$scope.QuesArr[i][j]=obj;  
							}
							alert(obj.value);
							$scope.ClearObject(obj) 
						}
					}
					alert('Now cell will be edited');
					alert(ind);
					$scope.CheckMap(ind);
			}	


			$scope.CheckMap=function(index){
				var ind = index;
				alert(ind);
				index_final = index;
				for(var i=0;i<ind;i++)
				{
					var Div1=$scope.DivValArray[i];
					var Span1=$scope.SpanValArray[i];
					alert(Div1+" === "+Span1);
				}

				$scope.EditCells();

			}	

			$scope.EditCells=function(){
				alert('Editcalled');
				$scope.editMode=true;
			}

			// Perfectly working code is below

			// $scope.SaveCells=function(){
			// 	var dv = $scope.divVal;
			// 	alert(dv);
			// 	var sv = $scope.spanVal;
			// 	alert(sv);

			// 	$scope.divVal = $scope.spanVal;
			// 	alert($scope.divVal);
			// 	$scope.editMode=false;
			// }

			$scope.SaveCells=function(){
				var ind = index_final;
				alert(ind);

				for(var i=0;i<ind;i++)
				{
					var Div1=$scope.DivValArray[i];
					var Span1=$scope.SpanValArray[i];
					$scope.DivValArray[i]=$scope.SpanValArray[i];
					alert($scope.DivValArray[i]);
				}
			}


			
	});




