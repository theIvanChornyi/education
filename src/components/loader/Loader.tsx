import { TailSpin } from 'react-loader-spinner';
import style from './Loader.module.scss';

const Loader = () => {
	return (
		<div className={style.loader}>
			<TailSpin
				height="80"
				width="80"
				color="#0E91EF"
				ariaLabel="tail-spin-loading"
				radius="1"
				visible={true}
			/>
		</div>
	);
};

export default Loader;
