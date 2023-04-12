export const socialConfig = [
	{
		title: 'Instagram',
		ref: 'https://www.instagram.com/',
		img: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
	},
	{
		title: 'Twitter',
		ref: 'https://twitter.com/',
		img: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Logo_of_Twitter%2C_Inc..svg',
	},
	{
		title: 'Facebook',
		ref: 'https://www.facebook.com/',
		img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
	},
	{
		title: 'LinkedIn',
		ref: 'https://www.linkedin.com/',
		img: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg',
	},
];

export type LevelType = 'Beginner' | 'Intermediate' | 'Advanced';
export type CategorieType = 'Science' | 'Mathematics' | 'History';

export interface ICourses {
	id?: number;
	img: string;
	text: string;
	title: string;
	price: number;
	level: LevelType;
	categorie: CategorieType;
}

export const levels: LevelType[] = ['Beginner', 'Intermediate', 'Advanced'];

export const categories: CategorieType[] = [
	'Science',
	'Mathematics',
	'History',
];

export function isLevelType(level: string): level is LevelType {
	return ['Beginner', 'Intermediate', 'Advanced'].includes(level);
}
export function isCategoriesType(cat: string): cat is CategorieType {
	return ['Science', 'Mathematics', 'History'].includes(cat);
}

export const filter = {
	levels,
	categories,
};

export const coursesConfig: ICourses[] = [
	{
		id: 1,
		img: 'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est provident dolore facere temporibus, delectus quia cum perferendis exercitationem mollitia, quam ipsa? Numquam, quidem.',
		title: 'Start',
		price: 1500,
		level: 'Beginner',
		categorie: 'Science',
	},
	{
		id: 2,
		img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		text: 'st provident dolore facere temporibus, delectus quia cum perferendis exercitationem mollitia, quam ipsa? Numquam, quidem.',
		title: 'Group',
		price: 2000,
		level: 'Intermediate',
		categorie: 'Mathematics',
	},
	{
		id: 3,
		img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est provident dolore facere temporibus, delectus quia cum perferendis exercitationem mollitia, quam ipsa? Numquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est provident dolore facere temporibus, delectus quia cum perferendis exercitationem mollitia, quam ipsa? Numquam, quidem.',
		title: 'Individual',
		price: 5000,
		level: 'Advanced',
		categorie: 'History',
	},
	{
		id: 4,
		img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est provident dolore facere met consectetur adipisicing elit. Est provident dolore facere temporibus, delectus quia cum perferendis exercitationem mollitia, quam ipsa? Numquam, quidem.',
		title: 'Individual intensive',
		price: 6500,
		level: 'Advanced',
		categorie: 'Mathematics',
	},
	{
		id: 5,
		img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est provident dolore facere temporibus, delectus quia cum perferendis exercitationem mollitia, quam ipsa? Numquam',
		title: 'Test',
		price: 750,
		level: 'Beginner',
		categorie: 'History',
	},
];
