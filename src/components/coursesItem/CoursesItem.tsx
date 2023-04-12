import { FC } from 'react';
import { ICourses } from '../../assets/config/config';
import style from './CoursesItem.module.scss';

interface IProps extends ICourses {}
const CoursesItem: FC<IProps> = ({
	img,
	text,
	title,
	price,
	level,
	categorie,
}) => {
	return (
		<div className={style.card}>
			<div className={style.thumb}>
				<img className={style.image} src={img} alt={title} />
			</div>
			<div className={style.text}>{text}</div>

			<div>
				<h2 className={style.title}>{title}</h2>
				<p className={style.level}>{level}</p>
				<p className={style.categorie}>{categorie}</p>
				<p>
					<span>{price}</span>
					<span className={style.curr}>USD</span>
				</p>
			</div>
		</div>
	);
};

export default CoursesItem;
