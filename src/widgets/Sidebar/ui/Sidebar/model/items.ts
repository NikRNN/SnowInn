import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainPageIcon from "shared/assets/icons/main-page.svg";
import AboutPageIcon from "shared/assets/icons/about-us.svg";
import ProfilePageIcon from "shared/assets/icons/profile.svg";

const MainIcon = MainPageIcon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const AboutIcon = AboutPageIcon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const ProfileIcon = ProfilePageIcon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

// import { MainPageIcon } from "widgets/Sidebar/ui/Sidebar/storybook/MainPageIcon"; - для сторибука
// import { AboutUsIcon } from "widgets/Sidebar/ui/Sidebar/storybook/AboutUsIcon";
// storybook тказывается работать с svg, поэтому для тестов вместо svg использую компоненты (для prod расскоментируй комметарии выше и ниже)

export interface ItemsPropsType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export const SideBarItemsList : ItemsPropsType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: "Главная",
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: "О нас",
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: "Профиль",
    },
];
