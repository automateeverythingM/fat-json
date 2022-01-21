import { ReactNode } from "react";

export interface IGeneratedResponse {
	id: string;
	index: number;
	guid: string;
	isActive: boolean;
	balance: string;
	picture: string;
	age: number;
	eyeColor: string;
	date: string;
	name: string;
	gender: string;
	company: string;
	email: string;
	phone: string;
	address: string;
	about: string;
	registered: string;
	latitude: number;
	longitude: number;
	greeting: string;
	favoriteFruit: string;
}

export interface IProviderProps {
	children: ReactNode;
}

export type IState = IGeneratedResponse[];
