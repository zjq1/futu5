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
  .module('somenoteApp', ["ui.router","ngCookies"]).controller('log',['$scope','$http','$cookieStore',function ($scope,$http,$cookieStore) {

	}]).controller('help',['$scope','$http','$cookieStore',function ($scope,$http,$cookieStore) {

	}]).controller('index',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('about',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider){
		$urlRouterProvider.when('','/index')
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
			})
		}])
