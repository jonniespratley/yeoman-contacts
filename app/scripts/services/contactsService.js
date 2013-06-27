'use strict';
//Contacts Service - Connects to Parse.com and fetches the data.
angular.module('yeomanContactsApp').factory('ContactsService', ['$q', function($q){
	Parse.initialize('mNf6N9zKOa0iqoyhXjlnNWQiJATFWkcb5ukvuOkX', 'tjgFaPiYlrTPbNkI0qu62RSl4tE8VH0y0W7yF687');
	return function(successCb, errorCb){
		var	query = new Parse.Query('Contact'),
				delay = $q.defer(),
				data = null;
			query.find({
				success: function(results) {
					data = results.map(function(obj){
						return {	
							id: obj.id,
							name: obj.get('name'),
							phone: obj.get('phone'),
							website: obj.get('website'),
							email: obj.get('email'),
							avatar: 'http://www.gravatar.com/avatar/' + calcMD5(obj.get('email'))
						}
					});
					if(successCb){
						successCb(data);
					} else {
						delay.resolve(data);
					}
				},
				error: function(error) {
					if(errorCb){
						errorCb(error);
					}
					delay.reject(error);
				}
			});
		return delay.promise;
	}
}]);