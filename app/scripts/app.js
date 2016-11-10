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
  .module('somenoteApp', ["ui.router","ngCookies"])
  .controller('help',['$scope','$http','$cookieStore',function ($scope,$http,$cookieStore) {

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

	}]).controller('setting',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('account',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('base',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('modify-email',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('commission',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('cashin',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('cachout',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('currency-exchange',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('cachlist',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('buynewstock',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('stockin',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('stockout',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('equityRight',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('stockInterest',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('buynewstocklist',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('buyquotation',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('history',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}]).controller('invite',['$scope','$http','$cookieStore','$interval',function ($scope,$http,$cookieStore,$interval) {

	}])
	.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider){
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
			}).state('setting',{
				url:'/setting',
				views:{
					'biggest':{
						templateUrl:'views/setting.html',
						controller:'setting'
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
			}).state('setting.account',{
				url:'/account',
				views:{
					'bigger':{
						templateUrl:'views/account.html',
						controller:'account'
					}
				}
			}).state('setting.base',{
				url:'/base',
				views:{
					'bigger':{
						templateUrl:'views/base.html',
						controller:'base'
					}
				}
			}).state('setting.modify-email',{
				url:'/modify-email',
				views:{
					'bigger':{
						templateUrl:'views/modify-email.html',
						controller:'modify-email'
					}
				}
			}).state('setting.commission',{
				url:'/commission',
				views:{
					'bigger':{
						templateUrl:'views/commission.html',
						controller:'commission'
					}
				}
			}).state('setting.cashin',{
				url:'/cashin',
				views:{
					'bigger':{
						templateUrl:'views/cashin.html',
						controller:'cashin'
					}
				}
			}).state('setting.cachout',{
				url:'/cachout',
				views:{
					'bigger':{
						templateUrl:'views/cachout.html',
						controller:'cachout'
					}
				}
			}).state('setting.currency-exchange',{
				url:'/currency-exchange',
				views:{
					'bigger':{
						templateUrl:'views/currency-exchange.html',
						controller:'currency-exchange'
					}
				}
			}).state('setting.cachlist',{
				url:'/cachlist',
				views:{
					'bigger':{
						templateUrl:'views/cachlist.html',
						controller:'cachlist'
					}
				}
			}).state('setting.buynewstock',{
				url:'/buynewstock',
				views:{
					'bigger':{
						templateUrl:'views/buynewstock.html',
						controller:'buynewstock'
					}
				}
			}).state('setting.stockin',{
				url:'/stockin',
				views:{
					'bigger':{
						templateUrl:'views/stockin.html',
						controller:'stockin'
					}
				}
			}).state('setting.stockout',{
				url:'/stockout',
				views:{
					'bigger':{
						templateUrl:'views/stockout.html',
						controller:'stockout'
					}
				}
			}).state('setting.equityRight',{
				url:'/equityRight',
				views:{
					'bigger':{
						templateUrl:'views/equityRight.html',
						controller:'equityRight'
					}
				}
			}).state('setting.stockInterest',{
				url:'/stockInterest',
				views:{
					'bigger':{
						templateUrl:'views/stockInterest.html',
						controller:'stockInterest'
					}
				}
			}).state('setting.buynewstocklist',{
				url:'/buynewstocklist',
				views:{
					'bigger':{
						templateUrl:'views/buynewstocklist.html',
						controller:'buynewstocklist'
					}
				}
			}).state('setting.buyquotation',{
				url:'/buyquotation',
				views:{
					'bigger':{
						templateUrl:'views/buyquotation.html',
						controller:'buyquotation'
					}
				}
			}).state('setting.history',{
				url:'/history',
				views:{
					'bigger':{
						templateUrl:'views/history.html',
						controller:'history'
					}
				}
			}).state('setting.invite',{
				url:'/invite',
				views:{
					'bigger':{
						templateUrl:'views/invite.html',
						controller:'invite'
					}
				}
			})
		}])
