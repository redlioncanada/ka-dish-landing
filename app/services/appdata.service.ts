
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
				alt: "Dynamic wash arms in action",
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
						link: "http://blog.kitchenaid.ca/kitchenaid-dishwasher-buying-guide/",
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
						alt: "Clean water wash system",
						text: "Continuously filters the wash water for outstanding results. Plus, thanks to the innovative filter design there's no need to ever remove and clean the filter.",
						cta: "",
						analytics: {
							category: '@category',
							action: 'Hovered Over Dish-Features',
							label: 'Dish Clean Water Wash System'
						}
					},
					{
						title: "Bottle Wash",
						image: "./public/images/more-features-2.jpg",
						link: false,
						alt: "Bottle wash feature",
						text: "Dedicated and adjustable spray nozzles designed for tall glasses and bottles provide a high-powered spray wash for hard-to-reach places.",
						cta: "",
						analytics: {
							category: '@category',
							action: 'Hovered Over Dish-Features',
							label: 'Dish Bottle Wash'
						}
					},
					{
						title: "Advanced ProDry<sup>&trade;</sup> System",
						image: "./public/images/more-features-3.jpg",
						link: false,
						alt: "ProDry feature",
						text: "The best drying performance without using a rinse aid delivered through an innovative system that draws moisture out of the wash tub to ensure dry dishes at the end of each cycle.",
						cta: "",
						analytics: {
							category: '@category',
							action: 'Hovered Over Dish-Features',
							label: 'Dish ProDry'
						}
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
						alt: 'Dishwasher design video content',
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
						alt: 'Dynamic wash arm video content',
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
						alt: 'Proscrub feature video content',
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
					link: 'http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/dishwashers-3/102310014/',
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
                        alt: "Dishwasher with window",
                        desc: "Introducing an innovative new design, this dishwasher with window is a great aesthetic enhancement to your kitchen and allows you see when your dishes are done so you can move on to what’s next.",
                        link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/dishwashers-3/102310014+105000792/",
                        id: "dish-with-window",
                        ctaText: "Learn More",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Dish Style",
							label: "Dish With Window",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/top-control.png",
                        title: "Top Control",
                        alt: "Top-control Dishwasher",
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
                        alt: "Front-control Dishwasher",
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
                        alt: "Panel ready Dishwasher",
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
				image: "./public/images/refer-landing-masthead.jpg",
				alt: "Bras gicleurs dynamiques en marche",
				title: "Lave-vaisselle"
			},
			banner: {
				enabled: true,
				link: 'http://www.kitchenaid.ca/fr_CA/new/',
				image: './public/images/banner_fr.jpg',
				ctaText: 'En savoir plus',
				analytics: {
					category: "@language-@category",
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
						link: "/pdf/global/promotions/KA-Dish-Buying-Guide-FR.pdf",
						type: "cart",
						analytics: {
							category: "@language-@category",
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
							category: "@language-@category",
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
							category: "@language-@category",
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
						alt: "Système de lavage à l'eau propre",
						text: "Filtre continuellement l'eau de lavage pour des résultats impeccables. Par ailleurs, il n'est plus nécessaire de retirer et nettoyer le filtre grâce à sa conception innovante.",
						cta: "",
						analytics: {
							category: '@language-@category',
							action: 'Hovered Over Dish-Features',
							label: 'Dish Clean Water Wash System'
						}
					},
					{
						title: "Gicleur pour bouteilles",
						image: "./public/images/more-features-2.jpg",
						link: false,
						alt: "Gicleurs pour bouteille",
						text: "Les buses spécifiques et réglables sont conçues pour les verres hauts et les bouteilles et procurent une pulvérisation puissante dans les endroits difficiles à atteindre.",
						cta: "",
						analytics: {
							category: '@language-@category',
							action: 'Hovered Over Dish-Features',
							label: 'Dish Bottle Wash'
						}
					},
					{
						title: "Système perfectionné ProDry<sup>&trade;</sup>",
						image: "./public/images/more-features-3.jpg",
						link: false,
						alt: "Fonction de séchage ProDry®",
						text: "La meilleure performance de séchage sans agent de rinçage, grâce à un système innovant qui élimine l'humidité de la cuve et permet d'obtenir des assiettes parfaitement sèches à la fin de chaque programme.",
						cta: "",
						analytics: {
							category: '@language-@category',
							action: 'Hovered Over Dish-Features',
							label: 'Dish ProDry'
						}
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Conçu Pour Inspirer",
				videos: [
					{
						id: 'lQXv1imsjfA',
						thumb: './public/images/video-select-1.jpg',
						title: 'Un sceau révolutionnaire pour une gamme révolutionnaire | Le médaillon KitchenAid<sup>&reg;</sup>',
						ctaTitle: 'Conception',
						alt: 'Vidéo de conception des lave-vaisselle',
						cta: 'Voir la video',
						desc: 'Voici le médaillon KitchenAid®, notre emblème de finition présent sur tous nos nouveaux électroménagers révolutionnaires, qu\'il s\'agisse de réfrigérateurs, fours encastrés, lave-vaisselle, fours à micro-ondes ou cuisinières. C\'est une marque qui indique que vous cuisinez avec une série d\'électroménagers de gamme supérieure, inspirés par des chefs.',
						analytics: {
							category: "@language-@category",
							action: "Clicked Dish-Designed to Inspire Media",
							label: "Dish Design Video"
						}
					},
					{
						id: '8P1pIn_JJNs',
						thumb: './public/images/video-select-2.jpg',
						title: 'Bras Gicleurs Dynamiques Révolutionnaires | KitchenAid<sup>&reg;</sup>',
						ctaTitle: 'Bras Gicleurs Dynamiques',
						alt: 'Vidéo des bras gicleurs dynamiques',
						cta: 'Voir la video',
						desc: 'Découvrez notre nouvelle gamme de lave-vaisselle dotés des bras gicleurs dynamiques révolutionnaires. Ils projettent de l\'eau dans toutes les directions, offrant un nettoyage efficace au moindre recoin de votre vaisselle.Voici donc un souci de moins et plus de temps pour démarrer votre prochaine création culinaire.',
						analytics: {
							category: "@language-@category",
							action: "Clicked Dish-Designed to Inspire Media",
							label: "Dish Dynamic Wash Arms Video"
						}
					},
					{
						image: './public/images/video-thumb-3.jpg',
						thumb: './public/images/video-select-3.jpg',
						title: 'Récurage Proscrub | KitchenAid<sup>&reg;</sup>',
						ctaTitle: 'Proscrub<sup>&trade;</sup>',
						thumbAlt: 'Pulvérisation avec les bras gicleurs dynamiques',
						alt: 'Vidéo de la fonction de récurage Proscrub®',
						cta: 'Voir',
						desc: 'Plus besoin de prélaver, faire tremper ni récurer. Placez vos casseroles et poêles directement dans le lave-vaisselle, peu importe leur niveau de saleté.',
						analytics: {
							category: "@language-@category",
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
					text: 'Tout voir',
					link: 'http://www.kitchenaid.ca/fr_CA/magasiner/gros-electromenagers-1/lave-vaisselle-3/102310014/',
					analytics: {
						category: "@language-@category",
						action: "Clicked Choose Your Dish Style",
						label: "See All Dish"
					}
				},
				products: [
					{
						image: "./public/images/products/window.png",
                        title: "Lave-vaisselle à hublot",
                        alt: "Lave-vaisselle à hublot",
                        desc: "Ce lave-vaisselle à hublot, de conception innovante, rehausse l'allure de votre cuisine et vous permet de voir vos assiettes lorsqu'elles sont propres.",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/dishwashers-3/102310014/",
                        id: "dish-with-window",
                        ctaText: "En savoir plus",
                        analytics: {
							category: "@language-@category",
							action: "Clicked Choose Your Dish Style",
							label: "Dish With Window",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/top-control.png",
                        title: "Commandes dissimulées",
                        alt: "Lave-vaisselle à commandes dissimulées",
                        desc: "Les commandes sont discrètement placées sur le haut du lave-vaisselle et sont invisibles lorsque la porte est fermée, pour une allure épurée et élégante. La poignée transversale rehausse le style et permet un accès facile pour ouvrir votre lave-vaisselle.",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/dishwashers-3/102310014/",
                        id: "fully-integrated",
                        ctaText: "En savoir plus",
                        analytics: {
							category: "@language-@category",
							action: "Clicked Choose Your Dish Style",
							label: "Fully Integrated Dish",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/front-control.png",
                        title: "Commandes frontales",
                        alt: "Lave-vaisselle à commandes frontales",
                        desc: "Les commandes sont situées sur le devant et sont facilement accessibles après avoir chargé votre vaisselle. Ce modèle est doté d'une poignée encastrée pour un fini sobre, idéal pour les petites cuisines et les configurations qui exigent un espace plus flexible devant le lave-vaisselle.",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/dishwashers-3/102310014/",
                        id: "front-control",
                        ctaText: "En savoir plus",
                        analytics: {
							category: "@language-@category",
							action: "Clicked Choose Your Dish Style",
							label: "Front Control Dish",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/panel-ready.png",
                        title: "Prêt à accueillir le panneau de recouvrement",
                        alt: "Lave-vaisselle prêt à accueillir le panneau de recouvrement",
                        desc: "Une allure intemporelle qui s'agence à la cuisine de vos rêves. Les lave-vaisselle prêts à accueillir le panneau de recouvrement sont dotés d'une porte non finie, vous pouvez donc assortir le panneau au reste de vos armoires, et donner à votre cuisine une allure épurée et entièrement intégrée.",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/dishwashers-3/102310014/",
                        id: "panel-ready",
                        ctaText: "En savoir plus",
                        analytics: {
							category: "@language-@category",
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