import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, fontFamilyOptions, fontColors, backgroundColors, contentWidthArr, fontSizeOptions } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {

	const defaultValues = {
		font: fontFamilyOptions[0], fontSize: fontSizeOptions[0], color: fontColors[0],
		bgColor: backgroundColors[0], width: contentWidthArr[0]
	}

	const [selected, setSelected] = useState<any>(defaultValues)
	const [applied, setApplied] = useState<any>(defaultValues)

	const setDefault = () => {
		setSelected(defaultValues)
		setApplied(defaultValues)
	}
 
	return (
		<div
			className={clsx(styles.main)}
			
			>
			<ArticleParamsForm
				fontOptions={fontFamilyOptions}
				fontSizeOptions={fontSizeOptions}
				colorOptions={fontColors}
				bgColorOptions={backgroundColors}
				widthOptions={contentWidthArr}
				selected={selected}
				setSelected={setSelected}
				setApplied={setApplied}
				setDefault={setDefault}
			/>
			<Article style={
				{
					'--font-family': applied.font.value,
					'--font-size': applied.fontSize.value,
					'--font-color': applied.color.value,
					'--container-width': applied.width.value,
					'--bg-color': applied.bgColor.value
				} as CSSProperties
			} />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
