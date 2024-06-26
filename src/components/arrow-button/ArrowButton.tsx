import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { useState } from 'react';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export const ArrowButton = ({isOpen, onClick} : any) => {

	// const [isOpen, setIsOpen] = useState(false)

	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${styles.container}${isOpen ? ' ' + styles.container_open : ''}`}
			onClick = {() => {onClick()}}>
			<img src={arrow} alt='иконка стрелочки' className={`${styles.arrow}${isOpen ? ' ' + styles.arrow_open : ''}`} />
		</div>
	);
};
