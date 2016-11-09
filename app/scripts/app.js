'use strict';

/**
 * @ngdoc overview
 * @name somenoteApp
 * @description
 * # somenoteApp
 *
 * Main module of the application.
 */
angular
  .module('somenoteApp', ["ui.router","ngCookies"]).controller('help',['$scope','$http','$cookieStore',function ($scope,$http,$cookieStore) {

	}]).controller('index',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('about',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('one',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('shareholder',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('qualification',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('mediareport',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('partner',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('customer',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('history',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('contact',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('joinus',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('embranchment',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('link',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('condition',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('oauth-agreement',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('disclaimer',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('agreement',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider){
		$urlRouterProvider.when('','/index','/one')
			$stateProvider.state('index',{
				url:'/index',
				views:{
					'biggest':{
						templateUrl:'views/index.html',
						controller:'index'
					}
				}
			}).state('help',{
				url:'/help',
				views:{
					'biggest':{
						templateUrl:'views/help.html',
						controller:'help'
					}
				}
			}).state('about',{
				url:'/about',
				views:{
					'biggest':{
						templateUrl:'views/about.html',
						controller:'about'
					}
				}
			}).state('about.one',{
				url:'/one',
				views:{
					'big':{
						templateUrl:'views/one.html',
						controller:'one'
					}
				}
			}).state('about.shareholder',{
				url:'/shareholder',
				views:{
					'big':{
						templateUrl:'views/shareholder.html',
						controller:'shareholder'
					}
				}
			}).state('about.qualification',{
				url:'/qualification',
				views:{
					'big':{
						templateUrl:'views/qualification.html',
						controller:'qualification'
					}
				}
			}).state('about.mediareport',{
				url:'/mediareport',
				views:{
					'big':{
						templateUrl:'views/mediareport.html',
						controller:'mediareport'
					}
				}
			}).state('about.partner',{
				url:'/partner',
				views:{
					'big':{
						templateUrl:'views/partner.html',
						controller:'partner'
					}
				}
			}).state('about.customer',{
				url:'/customer',
				views:{
					'big':{
						templateUrl:'views/customer.html',
						controller:'customer'
					}
				}
			}).state('about.history',{
				url:'/history',
				views:{
					'big':{
						templateUrl:'views/history.html',
						controller:'history'
					}
				}
			}).state('about.contact',{
				url:'/contact',
				views:{
					'big':{
						templateUrl:'views/contact.html',
						controller:'contact'
					}
				}
			}).state('about.joinus',{
				url:'/joinus',
				views:{
					'big':{
						templateUrl:'views/joinus.html',
						controller:'joinus'
					}
				}
			}).state('about.embranchment',{
				url:'/embranchment',
				views:{
					'big':{
						templateUrl:'views/embranchment.html',
						controller:'embranchment'
					}
				}
			}).state('about.link',{
				url:'/link',
				views:{
					'big':{
						templateUrl:'views/link.html',
						controller:'link'
					}
				}
			}).state('about.condition',{
				url:'/condition',
				views:{
					'big':{
						templateUrl:'views/condition.html',
						controller:'condition'
					}
				}
			}).state('about.oauth-agreement',{
				url:'/oauth-agreement',
				views:{
					'big':{
						templateUrl:'views/oauth-agreement.html',
						controller:'oauth-agreement'
					}
				}
			}).state('about.disclaimer',{
				url:'/disclaimer',
				views:{
					'big':{
						templateUrl:'views/disclaimer.html',
						controller:'disclaimer'
					}
				}
			}).state('about.agreement',{
				url:'/agreement',
				views:{
					'big':{
						templateUrl:'views/agreement.html',
						controller:'agreement'
					}
				}
			})
		}])
