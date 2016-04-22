import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {AppDataService} from './services/appdata.service'

@Component({
    selector: 'product-selector-nav',
    template: `
    	<div class="row {{!enabled ? 'hide' : ''}}">
			<div class="ka-dish-landing-product {{selectedProduct.prodId == product.prodId ? 'selected' : ''}}" *ngFor="#product of products; #i = index" (click)="select(product)">
				<img src="{{product.prodImage}}"/>
				<div class="ka-dish-landing-button"><p [innerHTML]="product.prodName"></p></div>
			</div>
			<a target="_blank" href="{{ctaLink}}"><div class="see-all">
				<p>{{ctaText}}</p>
			</div></a>
		</div>
    `
})

export class ProductSelectorNav {
	@Input() products
	@Input() selectedProduct
	@Output() productSelected = new EventEmitter()
	private ctaText: string
	private ctaLink: string
	private enabled: boolean

	constructor(private appdata: AppDataService) {
		this.enabled = true
		var data = appdata.get()

		this.enabled = data.productselector.enabled
		this.ctaText = data.productselector.nav.text
		this.ctaLink = data.productselector.nav.link
	}

	select(product) {
		this.productSelected.emit(product)
	}
}