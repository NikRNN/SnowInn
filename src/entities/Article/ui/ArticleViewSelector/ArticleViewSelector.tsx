import { classNames } from "shared/lib/classNames/classNames.js";
import { memo } from "react";
import { ArticleTypeView } from "../../model/const/consts";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { IconWrapper } from "shared/ui/IconWrapper/IconWrapper";
import IconListView from "shared/assets/icons/list-24-24.svg";
import IconTileView from "shared/assets/icons/tiled-24-24.svg";
import cls from "./ArticleViewSelector.module.scss";

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
            {viewTypes.map((item) => (
                <Button theme={ButtonTheme.CLEAR} key={item.view} onClick={onClick(item.view)}>
                    <IconWrapper key={item.view} Svg={item.icon} className={classNames("", [], { [cls.selected]: item.view === view })} />
                </Button>
            ))}
        </div>
    );
});
