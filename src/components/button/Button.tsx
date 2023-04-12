import { FC } from 'react';
import clsx from 'clsx';
import style from './Button.module.scss';

interface IProps {
	type?: 'button' | 'submit' | 'reset';
	title: string | number;
	userStyle?: string;
	onClick: Function;
}

const Button: FC<IProps> = ({
	type = 'button',
	title = '',
	userStyle,
	onClick,
}) => {
	return (
		<button
			className={clsx(userStyle, style.button)}
			type={type}
			onClick={() => onClick()}
		>
			{title}
		</button>
	);
};

export default Button;
