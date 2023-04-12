import { FC } from 'react';
import CoursesItem from '../coursesItem/CoursesItem';
import style from './CoursesList.module.scss';
import { ICourses } from '../../assets/config/config';

interface IProps {
	coursesData: ICourses[];
}

const CoursesList: FC<IProps> = ({ coursesData }) => {
	const courses = coursesData.map(({ id, title, ...other }) => (
		<li className={style.item} key={id}>
			<CoursesItem title={title} {...other} />
		</li>
	));

	return coursesData.length > 0 ? (
		<ul className={style.list}>{courses}</ul>
	) : (
		<div className={style.message}>
			Sorry but don`t have any coursen from your 🙏
		</div>
	);
};
export default CoursesList;
