angular.module('starter.controllers')
.controller('TasksController', function ($rootScope, $scope, Tasks) {
	//put undone tasks and done tasks into different arrays
	$scope.tasks_undone = Tasks.all(0);
	$scope.tasks_done = Tasks.all(1);

	//complete or uncomplete a task
	$scope.complete=function(item,i){
		if(i==0){
			$scope.tasks_undone.splice($scope.tasks_undone.indexOf(item), 1);
			$scope.tasks_done.push(item);
		}else{
			$scope.tasks_done.splice($scope.tasks_done.indexOf(item), 1);
			$scope.tasks_undone.push(item);
		}
		Tasks.complete(item,i);
		Tasks.remove(item,i);
	};

	//delete an element from an array
	$scope.remove=function(item,i){
		if(i==0) $scope.tasks_undone.splice($scope.tasks_undone.indexOf(item), 1);
		else $scope.tasks_done.splice($scope.tasks_done.indexOf(item), 1);	
		Tasks.remove(item,i);
	}  
});
