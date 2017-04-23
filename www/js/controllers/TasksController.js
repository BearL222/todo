angular.module('starter.controllers')
.controller('TasksController', function ($rootScope, $scope, Tasks) {
	//put undone tasks and done tasks into different arrays
	$scope.tasks_undone = Tasks.all(0);
	$scope.tasks_done = Tasks.all(1);

	//complete or uncomplete a task
	$scope.complete=function(item,i){
		var idx;
		eval('idx=$scope.'+Tasks.getTasks(i)+'.indexOf(item);');
		eval('$scope.'+Tasks.getTasks(i)+'.splice(idx, 1);');
		eval('$scope.'+Tasks.getTasks(1-i)+'.push(item);');
		Tasks.save(item,1-i);
		Tasks.remove(item,idx,i);
	};

	//delete an element from an array
	$scope.remove=function(item,i){
		var idx;
		eval('idx=$scope.'+Tasks.getTasks(i)+'.indexOf(item)');
		eval('$scope.'+Tasks.getTasks(i)+'.splice(idx, 1);');
		Tasks.remove(item,idx,i);
	}  
});
