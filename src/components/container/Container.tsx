import { FC } from 'react';
import style from './Container.module.scss';

interface IProps {
	children?: JSX.Element | string | JSX.Element[];
}

const Container: FC<IProps> = ({ children }) => {
	return <div className={style.container}>{children}</div>;
};
export default Container;
