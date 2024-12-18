import { Link } from "react-router-dom";
import * as styles from './link.module.scss';

type CustomLinkPropsT = {
    to: string;
    children: string;
}

export const CustomLink = ({ to, children } : CustomLinkPropsT) => {
    console.log(styles);
    
    return (
        <Link to={to} className={styles.link}>
            {children}
        </Link>
    )
}