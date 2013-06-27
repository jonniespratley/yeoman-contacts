'use strict';
angular.module('yeomanContactsApp').directive('contact', function () {
	return {
		template: '<li id="contact-{{$index}}" class="contact well well-small clearfix">'
						  +'<a class="pull-left thumb" ng-href="/view/{{$index}}"><img class="media-object" ng-src="{{item.avatar}}"></a>'
							+'	<div class="media-body">'
						  +'      <h4 class="media-heading">{{item.name}}</h4>'
						  +'      <p class="meta">'
						  +'        <ul class="unstyled">'
						  +'          <li class="phone"><a href="tel:{{item.phone}}"><i class="icon-phone"></i> {{item.phone | tel}}</a></li>'
						  +'          <li class="email"><a href="mailto:{{item.email}}"><i class="icon-envelope"></i> {{item.email}}</a></li>'
						  +'        </ul>'
						  +'      </p>'
						  +'    </div>'
						  +'</li>',
		restrict: 'E',
		link: function postLink(scope, element, attrs) {
		}
	};
});