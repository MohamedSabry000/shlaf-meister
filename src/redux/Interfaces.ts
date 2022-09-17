export interface ISlider {
  id: number,
	english_title: string,
	arabic_title: string,
	english_description: string,
	arabic_description: string,
	discover_now: string,
	image: string,
};

export interface IProduct {
	id: number,
	category_english: string,
	title_english: string,
	title_arabic: string,
	description_english: string,
	description_arabic: string,
	beforePrice: number,
	afterPrice: number,
	product_photos: [{
		id: number,
		imageCode: string,
		photo_path: string
	}],
}

export interface IProductType {
	id: number,
	header_title_english: string,
	header_title_arabic: string,
	header_subtitle_english: string,
	header_subtitle_arabic: string,
	header_photo_path: string,
	title_english: string,
	title_arabic: string,
	description_english: [{key: string, value: string}],
	description_arabic: [{key: string, value: string}],
	photo_path: string,
	products: IProduct[],
}

export interface IPresidentMessage {
	id: number,
	english_description: string,
	image: string,
}

export interface IMissionVision {
	id: number,
	type: string,
	english_description: string,
	photo_path: string,
	icon: string,
}

export interface IOffer {
	id: number,
	english_title: string,
	arabic_title: string,
	english_description: string | null,
	arabic_description: string | null,
	image: string,
}