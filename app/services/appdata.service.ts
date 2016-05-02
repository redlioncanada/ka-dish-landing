
import {Injectable} from 'angular2/core';
import {LoggerService} from './logger.service'

@Injectable()
export class AppDataService {
	private contents;
	public language: string;
	private init: boolean

	constructor(private logger: LoggerService) {
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
				ctaText: 'Learn More',
				analytics: {
					category: "@category",
					action: "Clicked Dish-Footer Banner",
					label: "VBL-Learn More"
				}
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
						type: "cart",
						analytics: {
							category: "@category",
							action: "Clicked Dish Resources",
							label: "Dish Buying Guide"
						}
					},
					{
						image: "./public/images/refer-landing-star.png",
						title: "Ratings & Reviews",
						alt: "Ratings and reviews",
						desc: "See what others are saying",
						cta: "Click Here",
						link: "http://www.kitchenaid.ca/en_CA/2_2_89/global_best-products.content.html#dishwashers",
						type: "star",
						analytics: {
							category: "@category",
							action: "Clicked Dish Resources",
							label: "Dish Ratings & Reviews"
						}
					},
					{
						image: "./public/images/refer-landing-mag-glass.png",
						title: "Find Your KitchenAid",
						alt: "Find your KitchenAid",
						desc: "Need help finding your dishwasher?",
						cta: "Click Here",
						link: "http://findmy.kitchenaid.ca/#/question/Appliance",
						type: "magnifier",
						analytics: {
							category: "@category",
							action: "Clicked Dish Resources",
							label: "Dish Find Your KAD"
						}
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
						id: '1AZPb80TNdc',
						thumb: './public/images/video-select-1.jpg',
						title: 'A Revolutionary Mark On A Revolutionary New Line | The KitchenAid<sup>&reg;</sup> Medallion',
						ctaTitle: 'Design',
						alt: 'test',
						cta: 'Play Video',
						desc: 'Behold the KitchenAid<sup>®</sup> Medallion, the iconic finishing stamp on all of our revolutionary new refrigerators, wall-ovens, dishwashers, microwaves and ranges. It’s a mark that lets you know you’re cooking with a suite of chef-inspired, premium appliances.',
						analytics: {
							category: "@category",
							action: "Clicked Dish-Designed to Inspire Media",
							label: "Dish Design Video"
						}
					},
					{
						id: 'Jnosm33VWtE',
						thumb: './public/images/video-select-2.jpg',
						title: 'Revolutionary Dynamic Wash Arms | KitchenAid<sup>&reg;</sup>',
						ctaTitle: 'Dynamic Wash Arms',
						alt: 'test',
						cta: 'Play Video',
						desc: 'Behold, our new line of dishwashers with revolutionary Dynamic Wash Arms. They blast water in every direction, giving every inch of each dish a powerful clean so you can start on your next creation.',
						analytics: {
							category: "@category",
							action: "Clicked Dish-Designed to Inspire Media",
							label: "Dish Dynamic Wash Arms Video"
						}
					},
					{
						id: 'wwpCbQn2s4c',
						thumb: './public/images/video-select-3.jpg',
						title: 'Dishwasher with ProScrub<sup>&trade;</sup> Option | KitchenAid<sup>&reg;</sup>',
						ctaTitle: 'Proscrub<sup>&trade;</sup>',
						alt: 'test',
						cta: 'Play Video',
						desc: 'Skip the soaping, the soaking, and the pre-scrubbing. Send your pots and pans straight in to the dishwasher no matter the mess.',
						analytics: {
							category: "@category",
							action: "Clicked Dish-Designed to Inspire Media",
							label: "Dish Proscrub Video"
						}
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choose your style',
				nav: {
					text: 'See All',
					link: 'http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048/',
					analytics: {
						category: "@category",
						action: "Clicked Choose Your Dish Style",
						label: "See All Dish"
					}
				},
				products: [
					{
						image: "./public/images/products/window.png",
                        title: "Dishwasher<br/>With Window",
                        alt: "test",
                        desc: "Introducing an innovative new design, this dishwasher with window is a great aesthetic enhancement to your kitchen and allows you see when your dishes are done so you can move on to what’s next.",
                        link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/dishwashers-3/102310014+105000792/",
                        id: "dish-with-window",
                        ctaText: "Learn More",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Dish Style",
							label: "Four-door",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/top-control.png",
                        title: "Top Control",
                        alt: "test",
                        desc: "The controls are discreetly placed at the top of the dishwasher and remain hidden when the door is closed to provide a sleek and clean looking front. The sleek bar handle perfectly complements the design and provides easy access to open your dishwasher.",
                        link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/dishwashers-3/102310014+105000265/",
                        id: "fully-integrated",
                        ctaText: "Learn More",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Dish Style",
							label: "Top Control Dish",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/front-control.png",
                        title: "Front Control",
                        alt: "test",
                        desc: "The controls are located on the front and are easily accessible for use after you load your dishes. This model also comes with a pocket handle for a smoother finish and is great for smaller kitchens to allow for more space flexibility in front of the dishwasher.",
                        link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/dishwashers-3/102310014+105000266/",
                        id: "front-control",
                        ctaText: "Learn More",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Dish Style",
							label: "Front Control Dish",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/panel-ready.png",
                        title: "Panel Ready",
                        alt: "test",
                        desc: "The premium look to go with your dream kitchen. Custom panel-ready dishwashers have an unfinished door, so you can seamlessly match the custom panel to your cabinetry to give your kitchen a stylish and coordinated look.",
                        link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/dishwashers-3/102310014+4294967137/",
                        id: "panel-ready",
                        ctaText: "Learn More",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Dish Style",
							label: "Panel Ready Dish",
							learnMore: 'Learn More'
						}
                    }
				]
			}
		}

		this.contents.fr = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead-fr.jpg",
				alt: "test",
				title: "Lave-vaisselle"
			},
			banner: {
				enabled: true,
				link: 'http://www.kitchenaid.ca/fr_CA/new/',
				image: './public/images/banner.jpg',
				ctaText: 'En savoir plus',
				analytics: {
					category: "@category",
					action: "Clicked Dish-Footer Banner",
					label: "VBL-Learn More"
				}
			},
			features: {
				enabled: true,
				features: [
					{
						image: "./public/images/refer-landing-shopping-cart.png",
						title: "Guide D’achat",
						alt: "Guide D’achat",
						desc: "Éléments à considérer lorsque vous magasinez",
						cta: "Cliquez ici",
						link: "https://www.google.ca/webhp?hl=en#hl=en&q=placeholder",
						type: "cart",
						analytics: {
							category: "@category",
							action: "Clicked Dish Resources",
							label: "Dish Buying Guide"
						}
					},
					{
						image: "./public/images/refer-landing-star.png",
						title: "Évaluation et Commentaires",
						alt: "Évaluation et Commentaires",
						desc: "Découvrez ce que nos clients en disent",
						cta: "Cliquez ici",
						link: "http://www.kitchenaid.ca/fr_CA/2_2_89/global_best-products.content.html",
						type: "star",
						analytics: {
							category: "@category",
							action: "Clicked Dish Resources",
							label: "Dish Ratings & Reviews"
						}
					},
					{
						image: "./public/images/refer-landing-mag-glass.png",
						title: "Trouver Mon Kitchenaid",
						alt: "Trouver Mon Kitchenaid",
						desc: "Vous avez besoin d'aide pour trouver le lave-vaisselle qui vous convient?",
						cta: "Cliquez ici",
						link: "http://trouvermon.kitchenaid.ca/#/question/Appliance",
						type: "magnifier",
						analytics: {
							category: "@category",
							action: "Clicked Dish Resources",
							label: "Dish Find Your KAD"
						}
					}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Plus de fonctions fraîcheur",
				features: [
					{
						title: "Système de lavage à l'eau propre",
						image: "./public/images/more-features-1.jpg",
						link: false,
						alt: "test",
						text: "Filtre continuellement l'eau de lavage pour des résultats impeccables. Par ailleurs, il n'est plus nécessaire de retirer et nettoyer le filtre grâce à sa conception innovante.",
						cta: ""
					},
					{
						title: "Gicleur pour bouteilles",
						image: "./public/images/more-features-2.jpg",
						link: false,
						alt: "test",
						text: "Les buses spécifiques et réglables sont conçues pour les verres hauts et les bouteilles et procurent une pulvérisation puissante dans les endroits difficiles à atteindre.",
						cta: ""
					},
					{
						title: "Système perfectionné ProDry<sup>&trade;</sup>",
						image: "./public/images/more-features-3.jpg",
						link: false,
						alt: "test",
						text: "La meilleure performance de séchage sans agent de rinçage, grâce à un système innovant qui élimine l'humidité de la cuve et permet d'obtenir des assiettes parfaitement sèches à la fin de chaque programme.",
						cta: ""
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Conçu pour Inspirer",
				videos: [
					{
						id: '1AZPb80TNdc',
						thumb: './public/images/video-select-1.jpg',
						title: 'A Revolutionary Mark On A Revolutionary New Line | The KitchenAid<sup>&reg;</sup> Medallion(fr)',
						ctaTitle: 'Conception',
						alt: 'test',
						cta: 'Voir la video',
						desc: 'Voici le médaillon KitchenAid®, notre emblème de finition présent sur tous nos nouveaux électroménagers révolutionnaires, qu\'il s\'agisse de réfrigérateurs, fours encastrés, lave-vaisselle, fours à micro-ondes ou cuisinières. C\'est une marque qui indique que vous cuisinez avec une série d\'électroménagers de gamme supérieure, inspirés par des chefs.',
						analytics: {
							category: "@category",
							action: "Clicked Dish-Designed to Inspire Media",
							label: "Dish Design Video"
						}
					},
					{
						id: 'Jnosm33VWtE',
						thumb: './public/images/video-select-2.jpg',
						title: 'Bras Gicleurs Dynamiques Révolutionnaires | KitchenAid<sup>&reg;</sup>',
						ctaTitle: 'Bras Gicleurs Dynamiques',
						alt: 'test',
						cta: 'Voir la video',
						desc: 'Découvrez notre nouvelle gamme de lave-vaisselle dotés des bras gicleurs dynamiques révolutionnaires. Ils projettent de l\'eau dans toutes les directions, offrant un nettoyage efficace au moindre recoin de votre vaisselle.Voici donc un souci de moins et plus de temps pour démarrer votre prochaine création culinaire.',
						analytics: {
							category: "@category",
							action: "Clicked Dish-Designed to Inspire Media",
							label: "Dish Dynamic Wash Arms Video"
						}
					},
					{
						id: 'wwpCbQn2s4c',
						thumb: './public/images/video-select-3.jpg',
						title: 'Dishwasher with ProScrub<sup>&trade;</sup> Option | KitchenAid<sup>&reg;</sup>(fr)',
						ctaTitle: 'Proscrub<sup>&trade;</sup>',
						alt: 'test',
						cta: 'Voir la video',
						desc: 'Plus besoin de prélaver, faire tremper ni récurer. Placez vos casseroles et poêles directement dans le lave-vaisselle, peu importe leur niveau de saleté.',
						analytics: {
							category: "@category",
							action: "Clicked Dish-Designed to Inspire Media",
							label: "Dish Proscrub Video"
						}
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choisissez votre style',
				nav: {
					text: 'Voir tout',
					link: 'http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/refrigerators-3/102310048/',
					analytics: {
						category: "@category",
						action: "Clicked Choose Your Dish Style",
						label: "See All Dish"
					}
				},
				products: [
					{
						image: "./public/images/products/window.png",
                        title: "Dishwasher<br/>With Window(fr)",
                        alt: "test",
                        desc: "Introducing an innovative new design, this dishwasher with window is a great aesthetic enhancement to your kitchen and allows you see when your dishes are done so you can move on to what’s next.(fr)",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/dishwashers-3/102310014+105000792/",
                        id: "dish-with-window",
                        ctaText: "En savoir plus",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Dish Style",
							label: "Four-door",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/top-control.png",
                        title: "Fully Integrated(fr)",
                        alt: "test",
                        desc: "The controls are discreetly placed at the top of the dishwasher and remain hidden when the door is closed to provide a sleek and clean looking front. The sleek bar handle perfectly complements the design and provides easy access to open your dishwasher.(fr)",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/dishwashers-3/102310014+105000265/",
                        id: "fully-integrated",
                        ctaText: "En savoir plus",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Dish Style",
							label: "Fully Integrated Dish",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/front-control.png",
                        title: "Front Control(fr)",
                        alt: "test",
                        desc: "The controls are located on the front and are easily accessible for use after you load your dishes. This model also comes with a pocket handle for a smoother finish and is great for smaller kitchens to allow for more space flexibility in front of the dishwasher.(fr)",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/dishwashers-3/102310014+105000266/",
                        id: "front-control",
                        ctaText: "En savoir plus",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Dish Style",
							label: "Front Control Dish",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/panel-ready.png",
                        title: "Panel Ready(fr)",
                        alt: "test",
                        desc: "The premium look to go with your dream kitchen. Custom panel-ready dishwashers have an unfinished door, so you can seamlessly match the custom panel to your cabinetry to give your kitchen a stylish and coordinated look.(fr)",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/dishwashers-3/102310014+4294967137/",
                        id: "panel-ready",
                        ctaText: "En savoir plus",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Dish Style",
							label: "Panel Ready Dish",
							learnMore: 'Learn More'
						}
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
}