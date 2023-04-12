import { FC } from 'react';

import Container from '../container/Container';
import { socialConfig } from '../../assets/config/config';

import style from './Footer.module.scss';

const Footer: FC = () => {
	const socialNetworksList = socialConfig.map(({ img, title, ref }) => (
		<li key={title} className={style.list__item}>
			<a
				className={style.list__link}
				href={ref}
				title={'Go to ' + title}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					className={style.list__ico}
					width={24}
					height={24}
					src={img}
					alt={title}
				/>
			</a>
		</li>
	));

	return (
		<footer className={style.footer} id="contact">
			<Container>
				<p className={style.footer__text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
					voluptas optio minima sit fugiat ipsam!
				</p>
				<ul className={style.list}>{socialNetworksList}</ul>
			</Container>
		</footer>
	);
};

export default Footer;
