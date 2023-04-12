import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import CourseSlide from '../courseSlide/CourseSlide';
import { coursesConfig } from '../../assets/config/config';

interface IProps {
	handleClose: () => void;
}

const CoursesContent: FC<IProps> = ({ handleClose }) => {
	const slides = coursesConfig.map(({ id, ...other }) => (
		<SwiperSlide key={id}>
			<CourseSlide id={id} handleClose={handleClose} {...other} />
		</SwiperSlide>
	));
	return (
		<Swiper
			style={{ maxWidth: '80vw', minWidth: 300 }}
			loop
			spaceBetween={20}
			pagination={{ clickable: true }}
			modules={[Pagination]}
		>
			{slides}
		</Swiper>
	);
};

export default CoursesContent;
