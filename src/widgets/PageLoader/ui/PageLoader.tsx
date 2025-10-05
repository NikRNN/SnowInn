import { classNames } from "shared/lib/classNames/classNames.js";
import { Loader } from "shared/ui/Loader/Loader.js";
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string;
}

export function PageLoader({ className }: PageLoaderProps) {

        return (
        <div className={classNames(cls.PageLoader, [className])}>
           <Loader/>
        </div>
    );
}