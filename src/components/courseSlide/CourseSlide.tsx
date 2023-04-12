import { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './CourseSlide.module.scss';
import { ICourses } from '../../assets/config/config';

interface IProp extends ICourses {
	handleClose: () => void;
}

const CourseSlide: FC<IProp> = ({ img, text, title, price, handleClose }) => {
	return (
		<Link
			to={{ pathname: '/courses', hash: title }}
			className={style.slide}
			onClick={handleClose}
		>
			<div className={style.slide__wrapper}>
				<div className={style.slide__thumb}>
					<img className={style.slide__img} src={img} alt={title} />
				</div>
				<p className={style.slide__text}>{text}</p>
			</div>

			<div className={style.slide__descr}>
				<h2 className={style.slide__title}>{title}</h2>
				<p className={style.slide__price}>
					<span className={style.slide__amount}>{price}</span>
					<span className={style.slide__curr}>USD</span>
				</p>
			</div>
		</Link>
	);
};
export default CourseSlide;
