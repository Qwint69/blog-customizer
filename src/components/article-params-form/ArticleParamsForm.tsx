import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Separator } from '../separator/Separator';



export const ArticleParamsForm = ({ fontOptions, colorOptions, bgColorOptions, widthOptions, selected, setSelected, fontSizeOptions, setApplied, setDefault }: any) => {

	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<ArrowButton onClick={() => setIsOpen(!isOpen)} />
			<aside className={`${styles.container}${isOpen ? ' ' + styles.container_open : ''}`}>
				<form className={styles.form} onSubmit={(e) => {
					e.preventDefault()
					setApplied(selected)
				}}
					onReset={(e) => {
						e.preventDefault()
						setDefault()
					}}>
					<Select options={fontOptions} selected={selected.font} title='шрифт'
						onChange={(option) => setSelected({ ...selected, font: option })} />
					<RadioGroup name='размер шрифта' options={fontSizeOptions} selected={selected.fontSize}
						onChange={(option) => setSelected({ ...selected, fontSize: option })} title='размер шрифта' />
					<Select options={colorOptions} selected={selected.color} title='цвет шрифта'
						onChange={(option) => setSelected({ ...selected, color: option })} />
					<Separator />
					<Select options={bgColorOptions} selected={selected.bgColor} title='цвет фона'
						onChange={(option) => setSelected({ ...selected, bgColor: option })} />
					<Select options={widthOptions} selected={selected.width} title='ширина контента'
						onChange={(option) => setSelected({ ...selected, width: option })} />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' variant='secondary' />
						<Button title='Применить' type='submit' variant='primary' />
					</div>
				</form>
			</aside>
		</>
	);
};
