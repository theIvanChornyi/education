import { useOutletContext } from 'react-router-dom';
import Hero from '../../components/hero/Hero';
import style from './Home.module.scss';
import { ContextType } from '../../components/sharedLayout/SharedLayout';

function Home() {
	const { openModal, handleClose } = useOutletContext<ContextType>();
	return (
		<div className={style.page}>
			<Hero openModal={openModal} handleClose={handleClose} />
		</div>
	);
}
export default Home;
