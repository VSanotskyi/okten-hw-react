import {ReactNode} from 'react';
// @ts-ignore
import css from './Container.module.css';

interface ContainerProps {
    title: string;
    children: ReactNode;
}

const Container = ({title, children}: ContainerProps) => {
    return (
        <div className={css.container}>
            <h2 className={css.title}>{title}</h2>
            {children}
        </div>
    );
};

export default Container;