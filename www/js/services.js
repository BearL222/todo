angular.module('starter.services')
.factory('Tasks', function() {
	return {
		all: function(i) {
			if(i==0){
				var taskString = window.localStorage['tasks_undone'];

			}else{
				var taskString = window.localStorage['tasks_done'];
			}
			if(taskString) {
				return angular.fromJson(taskString);
			}
			return [];
		},

		save: function(task) {
			var tasks = [];
			var taskString = window.localStorage['tasks_undone'];
			if(taskString) {
				tasks = angular.fromJson(taskString);
			}
			tasks.push(task);
			window.localStorage['tasks_undone'] = angular.toJson(tasks);
		},

		complete:function(item,i){
			var tasks = [];
			if(i==0){
				var taskString = window.localStorage['tasks_done'];
				if(taskString) {
					tasks = angular.fromJson(taskString);
				}
				tasks.push(item);
				window.localStorage['tasks_done'] = angular.toJson(tasks);
			}else{
				var taskString = window.localStorage['tasks_undone'];
				if(taskString) {
					tasks = angular.fromJson(taskString);
				}
				tasks.push(item)
				window.localStorage['tasks_undone'] = angular.toJson(tasks);
			}
		},

		remove:function(item,i){
			var tasks = [];
			if(i==0) var taskString = window.localStorage['tasks_undone'];
			else var taskString = window.localStorage['tasks_done'];
			if(taskString) {
				tasks = angular.fromJson(taskString);
			}
			for( var j=0;j<tasks.length;j++){
				if(tasks[j].title===item.title){
					tasks.splice(j,1);
					break;
				}
			}
			if(i==0) window.localStorage['tasks_undone'] = angular.toJson(tasks);
			else window.localStorage['tasks_done'] = angular.toJson(tasks);
		},
	}
})