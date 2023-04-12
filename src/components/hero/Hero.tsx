import { FC } from 'react';
import Button from '../button/Button';
import Container from '../container/Container';

import style from './Hero.module.scss';

interface IProps {
	openModal: (name: string) => void;
	handleClose: () => void;
}

const Hero: FC<IProps> = ({ openModal, handleClose }) => {
	const handleOpen = () => {
		openModal('courses');
	};
	return (
		<section className={style.hero} id="home">
			<Container>
				<h1 className={style.hero__title}>Welcome to EduSite</h1>
				<div className={style.hero__wrapper}>
					<p className={style.hero__text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
						nobis tenetur illum at nisi dignissimos mollitia ad molestiae
						nostrum vero, tempore necessitatibus laudantium distinctio corporis
						eveniet soluta ex ipsam velit et pariatur rem autem consectetur
						recusandae fugit? Dolorum quisquam dolor possimus assumenda illum
						consectetur fugiat nam suscipit. Asperiores officia iusto, officiis
						non ullam maxime eveniet omnis molestias facilis eligendi nobis ex
						beatae quasi atque. Laudantium optio maxime veniam ab adipisci
						cupiditate atque incidunt explicabo, illo, obcaecati rerum quisquam
						perspiciatis! Nemo.
					</p>
					<Button title="Explore Courses" onClick={handleOpen} />
				</div>
			</Container>
		</section>
	);
};
export default Hero;
