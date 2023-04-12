import { Link } from 'react-router-dom';
import Container from '../../components/container/Container';
import style from './EmptyPage.module.scss';

const EmptyPage = () => {
	return (
		<Container>
			<section className={style.section}>
				<h1 className={style.title}>404</h1>
				<p className={style.text}>Page not found 🕵️‍♀️</p>
				<Link className={style.link} to="/">
					Go to homepage
				</Link>
			</section>
		</Container>
	);
};

export default EmptyPage;
