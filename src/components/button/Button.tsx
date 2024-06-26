import { Text } from 'components/text';

import styles from './Button.module.scss';

export const Button = ({
	title,
	onClick,
	type,
	variant,
}: {
	title: string;
	onClick?: () => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	variant: string
}) => {
	return (
		<button className={variant === 'secondary' ? styles.button_secondary : styles.button} type={type} onClick={onClick}>
			<Text weight={800} uppercase dynamic>
				{title}
			</Text>
		</button>
	);
};
