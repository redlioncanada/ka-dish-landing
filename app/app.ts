/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />

import 'es6-shim'
import 'es6-promise'
import 'zone.js/dist/zone'
import 'reflect-metadata'

import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'
import {LoggerService} from './services/logger.service'
import {GoogleApiService} from './services/googleapi.service'
import {AppData} from './services/appdata.service'
import {AnalyticsService} from './services/analytics.service'
import {BreakpointService} from './services/breakpoint.service'
import {Component} from 'angular2/core'
import {WindowProvider} from './providers/window.provider'

import {VideoPlayer} from './landing.video-player'
import {AppMasthead} from './landing.masthead'
import {Features} from './landing.feature'
import {ProductSelector} from './product.selector'
import {MoreFeatures} from './landing.morefeatures'
import {Banner} from './landing.banner'
import {Header} from './landing.header'
import {Footer} from './landing.footer'

@Component({
    selector: 'rl-ka-dish-landing',
    template: `
    	<header class="{{language}}"></header>
		<masthead class="{{language}}"></masthead>
		<features class="{{language}}"></features>
		<product-selector class="{{language}}"></product-selector>
		<videoplayer class="{{language}}"></videoplayer>
		<more-features class="{{language}}"></more-features>
		<banner class="{{language}}"></banner>
		<footer class="{{language}}"></footer>
    `,
    directives: [VideoPlayer, AppMasthead, Features, ProductSelector, Banner, MoreFeatures, Header, Footer]
})
class AppComponent {
	public language: string;

    constructor(private appdata: AppData, private analytics: AnalyticsService, private breakpoint: BreakpointService) {
    	this.language = appdata.language

		analytics.bind('language', function(str) {
			return window.location.href.indexOf('fr_CA/') > -1 ? 'FR' : 'EN'
		})
        analytics.bind('category', function(str) {
            return 'Refer Landing Page'
        })
        analytics.debugMode(true)

        breakpoint.add('mobile', 480)
        breakpoint.add('tablet', 481)
        breakpoint.add('desktop', 820)
        breakpoint.debugMode(true)
    }

    ngAfterViewInit() {
        //have to initialize after page load since it depends on global window being defined,
        //and it's screen size being accurate
        this.breakpoint.initialize()
    }
 }

bootstrap(AppComponent, [HTTP_PROVIDERS, LoggerService, GoogleApiService, AppData, WindowProvider, AnalyticsService, BreakpointService])