import { MapLocationProps } from '@/components/MapLocation/MapLocation';
import { ITRentalChat } from '@/interfaces/Ichat';
import { IRentalPost } from './IRentalPost';

export interface ICar {
	id?: string;
	brand?: string;
	model?: string;
	year?: number;
	mileage?: string;
	color?: string;
	availability?: boolean;
	image_url?: string[];
}

export interface IUser {
	id: string;
	name: string;
	email: string;
	image_url: string;
	phone: string;
	addresses: {
		latitude: number | null;
		longitude: number | null;
	}[];
}

export interface IReview {
	id: string;
	rating: number;
	comment: string;
	created_at: string;
	updated_at: string;
	user: IUser;
	post: IPost;
}

export interface IPost {
	id: string;
	title: string;
	description: string;
	price: number;
	user: IUser;
	car: ICar;
	review: IReview[];
	created_at: string;
	updated_at: string;
	rentals: IRentalPost[];
}
