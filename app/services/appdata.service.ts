
import {Injectable} from 'angular2/core';
import {Logger} from './logger.service'

@Injectable()
export class AppData {
	private contents;
	public language: string;
	private init: boolean

	constructor(private logger: Logger) {
		this.language = this.getLanguage()
		this.contents = {}
		this.contents.en = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead.jpg",
				alt: "test",
				title: "Dishwashers"
			},
			banner: {
				enabled: true,
				link: 'http://www.kitchenaid.ca/en_CA/new/',
				image: './public/images/banner.jpg',
				ctaText: 'Learn More'
			},
			features: {
				enabled: true,
				features: [
			        {
			        	image: "./public/images/refer-landing-shopping-cart.png",
			            title: "Buying Guide",
			            alt: "Buying Guide",
			            desc: "What to look for when you are buying",
			            cta: "Click Here",
						link: "https://www.google.ca/webhp?hl=en#hl=en&q=placeholder",
			            type: "cart"
					},
			        {
			        	image: "./public/images/refer-landing-star.png",
			            title: "Ratings & Reviews",
						alt: "Ratings and reviews",
			            desc: "See what others are saying",
			            cta: "Click Here",
			            link: "http://www.kitchenaid.ca/en_CA/2_2_89/global_best-products.content.html",
			            type: "star"
					},
					{
			        	image: "./public/images/refer-landing-mag-glass.png",
			        	title: "Find Your KitchenAid",
						alt: "Find your KitchenAid",
			        	desc: "Need help finding your refrigerator?",
			        	cta: "Click Here",
			        	link: "http://findmy.kitchenaid.ca/#/question/Appliance",
			        	type: "magnifier"
			    	}
				]
			},
			morefeatures: {
				enabled: true,
				title: "More Fresh Features",
				features: [
					{
						title: "Clean Water Wash System",
						image: "./public/images/more-features-1.jpg",
						link: false,
						alt: "test",
						text: "Continuously filters the wash water for outstanding results. Plus, thanks to the innovative filter design there's no need to ever remove and clean the filter.",
						cta: ""
					},
					{
						title: "Bottle Wash",
						image: "./public/images/more-features-2.jpg",
						link: false,
						alt: "Refrigerator interior with assorted foods",
						text: "Dedicated and adjustable spray nozzles designed for tall glasses and bottles provide a high-powered spray wash for hard-to-reach places.",
						cta: ""
					},
					{
						title: "Advanced ProDry<sup>&trade;</sup> System",
						image: "./public/images/more-features-3.jpg",
						link: false,
						alt: "Opened bottom freezer",
						text: "The best drying performance without using a rinse aid delivered through an innovative system that draws moisture out of the wash tub to ensure dry dishes at the end of each cycle.",
						cta: ""
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Designed To Inspire",
				videos: [
					{
						id: 'Jnosm33VWtE',
						thumb: './public/images/video-select-1.jpg',
						title: 'Revolutionary Dynamic Wash Arms | KitchenAid<sup>&reg;</sup>',
						ctaTitle: 'Revolutionary',
						alt: 'test',
						cta: 'Play Video',
						desc: 'Behold, our new line of dishwashers with revolutionary Dynamic Wash Arms. They blast water in every direction, giving every inch of each dish a powerful clean so you can start on your next creation.'
					},
					{
						id: 'fWbEHxpUEwM',
						thumb: './public/images/video-select-2.jpg',
						title: 'A Revolutionary Mark On A Revolutionary New Line | The KitchenAid<sup>&reg;</sup> Medallion',
						ctaTitle: 'Design',
						alt: 'test',
						cta: 'Play Video',
						desc: 'Behold the KitchenAid<sup>®</sup> Medallion, the iconic finishing stamp on all of our revolutionary new refrigerators, wall-ovens, dishwashers, microwaves and ranges. It’s a mark that lets you know you’re cooking with a suite of chef-inspired, premium appliances.'
					},
					{
						id: 'RxnPMBOUWfk',
						thumb: './public/images/video-select-3.jpg',
						title: 'Revolutionary Five-Door Refrigerator | KitchenAid<sup>&reg;</sup>',
						ctaTitle: 'Proscrub<sup>&trade;</sup>',
						alt: 'test',
						cta: 'Play Video',
						desc: 'Skip the soaping, the soaking, and the pre-scrubbing. Send your pots and pans straight in to the dishwasher no matter the mess.'
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choose your style',
				nav: {
					text: 'See All',
					link: 'http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048/'
				},
				products: [
					{
            			image: "./public/images/products/5-door.png",
                        title: "Dishwasher<br/>With Window",
                        alt: "test",
                        desc: "Introducing an innovative new design, this dishwasher with window is a great aesthetic enhancement to your kitchen and allows you see when your dishes are done so you can move on to what’s next.",
                        link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/dishwashers-3/102310014+105000792/",
                        id: "dish-with-window",
                        ctaText: "Learn More"
                    },
            		{
            			image: "./public/images/products/built-in.png",
                        title: "Fully Integrated",
                        alt: "test",
                        desc: "The controls are discreetly placed at the top of the dishwasher and remain hidden when the door is closed to provide a sleek and clean looking front. The sleek bar handle perfectly complements the design and provides easy access to open your dishwasher.",
                        link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/dishwashers-3/102310014+105000265/",
                        id: "fully-integrated",
                        ctaText: "Learn More"
                    },
            		{
            			image: "./public/images/products/french-door.png",
                        title: "Front Control",
                        alt: "test",
                        desc: "The controls are located on the front and are easily accessible for use after you load your dishes. This model also comes with a pocket handle for a smoother finish and is great for smaller kitchens to allow for more space flexibility in front of the dishwasher.",
                        link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/dishwashers-3/102310014+105000266/",
                        id: "front-control",
                        ctaText: "Learn More"
                    },
            		{
            			image: "./public/images/products/side-by-side.png",
                        title: "Panel Ready",
                        alt: "test",
                        desc: "The premium look to go with your dream kitchen. Custom panel-ready dishwashers have an unfinished door, so you can seamlessly match the custom panel to your cabinetry to give your kitchen a stylish and coordinated look.",
                        link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/dishwashers-3/102310014+4294967137/",
                        id: "panel-ready",
                        ctaText: "Learn More"
                    }
				]
			}
		}

		this.contents.fr = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead.jpg",
				title: "Réfrigérateurs",
				alt: "Extérieur de réfrigérateur à 5 portes"
			},
			banner: {
				enabled: true,
				link: 'http://www.kitchenaid.ca/fr_CA/new/',
				image: './public/images/banner_fr.jpg',
				ctaText: 'En savoir plus'
			},
			features: {
				enabled: true,
				features: [
					{
			        	image: "./public/images/refer-landing-shopping-cart.png",
						title: "Guide d’Achat",
			            desc: "Éléments à considérer lorsque vous magasinez",
			            cta: "Cliquez ici",
						link: "/pdf/Refer_Buying_Guide_2016_FR.pdf",
			            type: "cart"
					},
					{
						image: "./public/images/refer-landing-star.png",
						title: "Évaluation et Commentaires",
						alt: "Évaluations et commentaires",
						desc: "Découvrez ce que nos clients en disent",
						cta: "Cliquez ici",
						link: "http://www.kitchenaid.ca/fr_CA/2_2_89/global_best-products.content.html",
						type: "star"
					},
					{
						image: "./public/images/refer-landing-mag-glass.png",
						title: "Trouver mon KitchenAid",
						alt: "Trouver votre électroménager KitchenAid",
						desc: "Besoin d’aide pour trouver votre réfrigérateur?",
						cta: "Cliquez ici",
						link: "http://trouvermon.kitchenaid.ca/#/question/Appliance",
						type: "magnifier"
					}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Plus de fonctions fraîcheur",
				features: [
					{
						title: "Remplissage d'eau mesuré",
						text: "Affiche et distribue automatiquement l'eau en onces, tasses ou litres.",
						image: "./public/images/more-features-1.jpg",
						alt: "Distributeur de glaçons du réfrigérateur",
						link: "http://kitchenaid.ca",
						cta: ""
					},
					{
						title: "Intérieur platine",
						text: "Offre un aspect haut de gamme, et les parois d'un brillant argenté complètent les accents métalliques que l'on retrouve à l'intérieur du réfrigérateur.",
						image: "./public/images/more-features-2.jpg",
						alt: "Fruits à l’intérieur du réfrigérateur",
						link: "http://kitchenaid.ca",
						cta: ""
					},
					{
						title: "Tiroir-congélateur à 3 niveaux avec diviseurs de rangement",
						text: "Permet d'accéder facilement aux articles congelés grâce aux trois niveaux; le diviseur dans le panier inférieur aide à garder les petits articles à portée de main.",
						image: "./public/images/more-features-3.jpg",
						alt: "Congélateur inférieur ouvert",
						link: "http://kitchenaid.ca",
						cta: ""
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Conçu pour inspirer",
				videos: [
					{
						id: 'lQXv1imsjfA',
						thumb: './public/images/video-select-1.jpg',
						title: 'Un emblème révolutionnaire pour une nouvelle gamme révolutionnaire',
						ctaTitle: 'Conception',
						cta: 'Voir la video',
						alt: 'Distributeur de glaçons du réfrigérateur',
						desc: false
					},
					{
						image: './public/images/video-thumb-3.jpg',
						thumb: './public/images/video-select-2.jpg',
						title: 'Réfrigérateur à 5 portes KitchenAid<sup>&reg;</sup> avec le système de conservation des aliments Préserva<sup>&reg;</sup>',
						ctaTitle: 'Conservation des aliments',
						cta: 'Voir',
						alt: 'Fruits à l’intérieur du réfrigérateur',
						desc: 'Deux systèmes de refroidissement indépendants offrent un espace réfrigéré pour prolonger la fraîcheur des aliments; et un système de congélation séparé, entièrement consacré aux aliments surgelés. Le filtre à air FreshFlow™ contribue à minimiser les odeurs et les 2 conservateurs de fruits et légumes FreshFlow™ permettent de retarder la surmaturation des fruits et légumes.'
					},
					{
						id: 'ySD0Toxf8r0',
						thumb: './public/images/video-select-3.jpg',
						title: 'Réfrigérateur à 5 portes KitchenAid<sup>&reg;</sup> avec tiroirs à fermeture amortie',
						ctaTitle: '5 portes',
						cta: 'Voir la video',
						alt: 'Congélateur inférieur ouvert',
						desc: false
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choisissez votre style',
				nav: {
					text: 'Voir Tout',
					link: 'http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/refrigerators-3/102310048/'
				},
				products: [
					{
                        title: "5 portes",
                        alt: "Réfrigérateur à 5 portes",
                        desc: "Ce premier réfrigérateur révolutionnaire à 5 portes non encastré est conçu pour une organisation et une préservation des aliments optimales. Découvrez nos tiroirs à fermeture amortie polyvalents, conçus pour maintenir vos aliments favoris au niveau des yeux et à portée de main.",
                        link: "http://www.kitchenaid.ca/fr_CA/magasiner/-[KRMF706EBS]-5568100/KRMF706EBS/",
                        image: "./public/images/products/5-door.png",
                        id: "five-door",
                        ctaText: "En savoir plus"
                    },
					{
                        title: "Encastré",
                        alt: "Réfrigérateur encastré à portes françaises avec congélateur inférieur",
                        desc: "Lorsque vous imaginez la cuisine de vos rêves, vous pouvez être assuré que notre réfrigérateur encastré s'y agencera parfaitement. Conçu pour s'assortir naturellement à votre cuisine, nos options pouvant accueillir des panneaux de recouvrement (vendus séparément) offrent un style épuré et sophistiqué pour s’harmoniser à vos armoires.",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/refrigerators-3/102310048/",
                    	image: "./public/images/products/built-in.png",
						id: "built-in",
						ctaText: "En savoir plus"
                    },
					{
                        title: "Portes françaises",
                        alt: "Réfrigérateur à portes françaises avec congélateur inférieur et distributeur de glaçons extérieur",
                        desc: "Vous avez besoin de mieux vous organiser? Nos réfrigérateurs à portes françaises offrent un espace et des options de rangement idéals pour tous vos besoins culinaires. Les réfrigérateurs à portes françaises s'agencent idéalement à toute cuisine contemporaine, grâce à leurs bacs à légumes à humidité contrôlée, leurs tiroirs garde-manger et leurs tiroirs-congélateurs à trois niveaux.",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/refrigerators-3/102310048/",
                        image: "./public/images/products/french-door.png",
                        id: "french-door",
                        ctaText: "En savoir plus"
                    },
            		{
                        title: "Côte à côte",
                        alt: "Réfrigérateur à portes françaises",
                        desc: "La conception pure et intemporelle de nos modèles côte à côte vous permet de garder les ingrédients du réfrigérateur aussi bien que du congélateur au niveau des yeux tout en conservant les articles que vous utilisez le plus fréquemment au frais et à portée de main.",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/refrigerators-3/102310048+105001144/",
                        image: "./public/images/products/side-by-side.png",
                        id: "side-by-side",
                        ctaText: "En savoir plus"
                    }
				]
			}
		}
	}

	get() {
		if (!(this.language in this.contents)) {
			this.logger.error('Language does not exist')
		}

		return this.contents[this.language];
	}

	getLanguage() {
		var url = window.location.href
		if (url.indexOf('/fr_CA') > -1) return 'fr'
		return 'en'
	}