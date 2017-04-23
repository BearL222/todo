angular.module('starter.services')
.factory('Tasks', function() {
	return {
		all: function(i) {
			var taskString = window.localStorage[this.getTasks(i)];
			if(taskString) return angular.fromJson(taskString);
			return [];
		},

		save: function(task,i) {
			var tasks = [];
			var taskString = window.localStorage[this.getTasks(i)];
			if(taskString) tasks = angular.fromJson(taskString);
			tasks.push(task);
			window.localStorage[this.getTasks(i)] = angular.toJson(tasks);
		},

		remove:function(item,idx,i){
			var tasks = [];
			var taskString = window.localStorage[this.getTasks(i)];
			if(taskString) tasks = angular.fromJson(taskString);
			tasks.splice(idx,1);
			window.localStorage[this.getTasks(i)] = angular.toJson(tasks);
		},

		getTasks:function(i){
			return i==0 ? 'tasks_undone':'tasks_done';
		}
	}
})