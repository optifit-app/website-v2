// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Optifit',
		aboutText:
			'Optifit is a sports tournament management platform that helps you organize and manage your sports tournaments with ease.',
		logo: {
			src: '/favicon.ico',
			alt: 'Optifit - Gestion de tournois sportifs',
			text: 'Optifit'
		}
	},
	footerColumns: [
		{
			category: 'Contact',
			subCategories: [
				{
					subCategory: 'Demander une démo',
					subCategoryLink: 'https://calendly.com/gabriel-optifit/demo-optifit',
				},
				{
					subCategory: 'info@optifit.app',
					subCategoryLink: 'mailto:info@optifit.app',
				},
				{
					subCategory: 'www.start.optifit.app',
					subCategoryLink: 'https://start.optifit.app',
				}
			]
		},
		{
			category: 'Optifit',
			subCategories: [
				{
					subCategory: 'Accueil',
					subCategoryLink: '/#',
				},
				{
					subCategory: 'Fonctionnalités',
					subCategoryLink: '/#features',
				},
				{
					subCategory: 'Connexion',
					subCategoryLink: 'https://optifit.app',
				}
			]
		},
		{
			category: 'Social',
			subCategories: [
				{
					subCategory: 'Instagram',
					subCategoryLink: 'https://www.instagram.com/optifit.app/',
				},
				{
					subCategory: 'LinkedIn',
					subCategoryLink: 'https://www.linkedin.com/company/optifit-software/',
				},
				{
					subCategory: 'Mail',
					subCategoryLink: 'mailto:info@optifit.app',
				}
			]
		}
	],
	subFooter: {
		copywriteText: `© Optifit ${new Date().getFullYear()}`
	}
}
