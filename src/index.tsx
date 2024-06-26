import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {

	const [selected, setSelected] = useState(defaultArticleState)
	const [applied, setApplied] = useState(defaultArticleState)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const setDefault = () => {
		setSelected(defaultArticleState)
		setApplied(defaultArticleState)
	}

	return (
		<div
			className={clsx(styles.main)}

		>
			<ArticleParamsForm
				selected={selected}
				setSelected={setSelected}
				setApplied={setApplied}
				setDefault={setDefault}
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
			/>
			<Article style={
				{
					'--font-family': applied.fontFamilyOption.value,
					'--font-size': applied.fontSizeOption.value,
					'--font-color': applied.fontColor.value,
					'--container-width': applied.contentWidth.value,
					'--bg-color': applied.backgroundColor.value
				} as CSSProperties

			}
				onClick={() => setIsMenuOpen(false)} />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
