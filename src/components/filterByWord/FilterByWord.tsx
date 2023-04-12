import { FC, SyntheticEvent } from 'react';
import style from './FilterByWord.module.scss';

interface IProps {
	findWord: string;
	getUserRequestWord: (req: string) => void;
}

const FilterByWord: FC<IProps> = ({ findWord, getUserRequestWord }) => {
	const handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
		getUserRequestWord(e.currentTarget.value);
	};

	return (
		<div className={style.wrapper}>
			<input
				className={style.input}
				value={findWord}
				onInput={handleInputChange}
				placeholder="Write youre request"
			/>
		</div>
	);
};
export default FilterByWord;
