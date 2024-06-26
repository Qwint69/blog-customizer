import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Separator } from '../separator/Separator';
import { defaultArticleState, fontFamilyOptions, fontColors, backgroundColors, contentWidthArr, fontSizeOptions } from '../../constants/articleProps';
import { Text } from '../text'

type ArticleParamsFormPropsType = {
	selected: typeof defaultArticleState,
	setSelected: Function,
	setApplied: Function,
	setDefault: Function,
	isMenuOpen: Boolean,
	setIsMenuOpen: Function 
}

export const ArticleParamsForm = ({ selected, setSelected, setApplied, setDefault, isMenuOpen, setIsMenuOpen }: ArticleParamsFormPropsType) => {

	return (
		<div >
			<ArrowButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
			<aside className={`${styles.container}${isMenuOpen ? ' ' + styles.container_open : ''}`} >
				<form className={styles.form} onSubmit={(e) => {
					e.preventDefault()
					setApplied(selected)
				}}
					onReset={(e) => {
						e.preventDefault()
						setDefault()
					}}
				>
					<Text weight={800} size={31}>
						ЗАДАЙТЕ ПАРАМЕТРЫ
					</Text>
					<Select options={fontFamilyOptions} selected={selected.fontFamilyOption} title='шрифт'
						onChange={(option) => setSelected({ ...selected, fontFamilyOption: option })} />
					<RadioGroup name='размер шрифта' options={fontSizeOptions} selected={selected.fontSizeOption}
						onChange={(option) => setSelected({ ...selected, fontSizeOption: option })} title='размер шрифта' />
					<Select options={fontColors} selected={selected.fontColor} title='цвет шрифта'
						onChange={(option) => setSelected({ ...selected, fontColor: option })} />
					<Separator />
					<Select options={backgroundColors} selected={selected.backgroundColor} title='цвет фона'
						onChange={(option) => setSelected({ ...selected, backgroundColor: option })} />
					<Select options={contentWidthArr} selected={selected.contentWidth} title='ширина контента'
						onChange={(option) => setSelected({ ...selected, contentWidth: option })} />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' variant='secondary' />
						<Button title='Применить' type='submit' variant='primary' />
					</div>
				</form>
			</aside>
		</ div>
	);
};
