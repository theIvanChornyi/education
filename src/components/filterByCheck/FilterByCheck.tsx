import { SyntheticEvent, FC, useEffect, useMemo } from 'react';
import style from './FilterByCheck.module.scss';

import {
	CategorieType,
	LevelType,
	filter,
	isCategoriesType,
	isLevelType,
} from '../../assets/config/config';

interface IProps {
	getUserFiltres: (levels: LevelType[], categories: CategorieType[]) => void;
}

const FilterByCheck: FC<IProps> = ({ getUserFiltres }) => {
	const levelsValue = useMemo(() => new Set(filter.levels), []);
	const CategoriesValue = useMemo(() => new Set(filter.categories), []);

	useEffect(() => {
		getUserFiltres(Array.from(levelsValue), Array.from(CategoriesValue));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onChange = (e: SyntheticEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		if (isLevelType(value)) {
			setValues(levelsValue, value);
		}
		if (isCategoriesType(value)) {
			setValues(CategoriesValue, value);
		}
		getUserFiltres(Array.from(levelsValue), Array.from(CategoriesValue));
	};

	const setValues = <
		T extends Set<CategorieType | LevelType>,
		U extends CategorieType | LevelType
	>(
		set: T,
		value: U
	) => {
		if (set.has(value)) {
			set.delete(value);
		} else {
			set.add(value);
		}
	};

	return (
		<div className={style.filters}>
			<ul className={style.list}>
				{filter.levels.map(name => (
					<li key={name} className={style.item}>
						<input
							className={style.input}
							type="checkbox"
							onChange={onChange}
							name={name}
							id={name}
							value={name}
							defaultChecked={levelsValue.has(name)}
						/>
						<label className={style.label} htmlFor={name}>
							<span>{name}</span>
						</label>
					</li>
				))}
			</ul>
			<ul className={style.list}>
				{filter.categories.map(name => (
					<li key={name} className={style.item}>
						<input
							className={style.input}
							type="checkbox"
							onChange={onChange}
							name={name}
							id={name}
							value={name}
							defaultChecked={CategoriesValue.has(name)}
						/>
						<label className={style.label} htmlFor={name}>
							<span>{name}</span>
						</label>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FilterByCheck;
