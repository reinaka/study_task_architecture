import * as styles from './button.module.scss';

type ButtonPropsT = {
    children: string;
    onClickHandler: () => void;
}

export const Button = ({ children, onClickHandler } : ButtonPropsT) => {
    return (
        <button className={styles.button} onClick={onClickHandler}>
            {children}
        </button>
    )
}