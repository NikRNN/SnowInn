import { classNames } from "shared/lib/classNames/classNames.js";
import { memo } from "react";
import { ArticleTypeView } from "entities/Article";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { IconWrapper } from "shared/ui/IconWrapper/IconWrapper";
import cls from "./ArticleViewSelector.module.scss";
import IconListView from "../../../../shared/assets/icons/list-24-24.svg";
import IconTileView from "../../../../shared/assets/icons/tiled-24-24.svg";

const ListIcon = IconListView as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const TileIcon = IconTileView as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleTypeView;
  onToggleView: (view : ArticleTypeView) => void;
}

export const ArticleViewSelector = memo(({ className, view, onToggleView }: ArticleViewSelectorProps) => {
    const viewTypes = [
        {
            view: ArticleTypeView.TILE,
            icon: TileIcon,
        },
        {
            view: ArticleTypeView.LIST,
            icon: ListIcon,
        },
    ];

    const onClick = (articleView : ArticleTypeView) => () => {
        onToggleView(articleView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, [className])}>
            {viewTypes.map((item, index) => (
                <Button theme={ButtonTheme.CLEAR} key={index} onClick={onClick(item.view)}>
                    <IconWrapper Svg={item.icon} className={classNames("", [], { [cls.selected]: item.view === view })} />
                </Button>
            ))}
        </div>
    );
});
