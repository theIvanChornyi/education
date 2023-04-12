import { useState, useCallback, useMemo, useEffect } from 'react';
import Container from '../../components/container/Container';
import CoursesList from '../../components/coursesList/CoursesList';
import {
	CategorieType,
	ICourses,
	LevelType,
	coursesConfig,
} from '../../assets/config/config';
import FilterByWord from '../../components/filterByWord/FilterByWord';
import FilterByCheck from '../../components/filterByCheck/FilterByCheck';

export interface IFilter {
	levels: LevelType[];
	categories: CategorieType[];
}

function Courses() {
	const [courses, setCourses] = useState<ICourses[]>(() => coursesConfig);
	const [findWord, setFindWord] = useState('');
	const [filtres, setFiltres] = useState<IFilter>();

	useEffect(() => {
		setCourses(
			coursesConfig.filter(
				({ categorie, level }) =>
					filtres?.categories.includes(categorie) &&
					filtres?.levels.includes(level)
			)
		);
	}, [filtres]);

	const getUserRequestWord = useCallback((request: string) => {
		setFindWord(request);
	}, []);

	const getUserFilters = useCallback(
		(levels: LevelType[], categories: CategorieType[]) => {
			setFiltres({ levels, categories });
		},
		[]
	);

	const filtredCourses = useMemo(
		() =>
			courses.filter(({ text, title }) => {
				const normalizedWord = findWord.toLocaleLowerCase();
				return (
					text.toLocaleLowerCase().includes(normalizedWord) ||
					title.toLocaleLowerCase().includes(normalizedWord)
				);
			}),
		[findWord, courses]
	);

	return (
		<Container>
			<FilterByCheck getUserFiltres={getUserFilters} />
			<FilterByWord
				findWord={findWord}
				getUserRequestWord={getUserRequestWord}
			/>
			<CoursesList coursesData={filtredCourses} />
		</Container>
	);
}
export default Courses;
