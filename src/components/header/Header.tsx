import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Container from '../container/Container';

import style from './Header.module.scss';

interface IProps {
	openModal: (name: string) => void;
}

const Header: FC<IProps> = ({ openModal }) => {
	return (
		<Container>
			<header className={style.header}>
				<nav className={style.nav}>
					<ul className={style.nav__list}>
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									clsx({
										[style.nav__link]: true,
										[style.nav__link_active]: isActive,
									})
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/courses"
								className={({ isActive }) =>
									clsx({
										[style.nav__link]: true,
										[style.nav__link_active]: isActive,
									})
								}
							>
								Courses
							</NavLink>
						</li>
						<li>
							<button
								className={style.nav__btn}
								type="button"
								onClick={() => openModal('about')}
							>
								About Us
							</button>
						</li>
						<li>
							<a href="#contact" className={style.nav__link}>
								Contact Us
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</Container>
	);
};
export default Header;
