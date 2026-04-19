import { useTranslation } from "react-i18next";
import { PageWrapper } from "widgets/PageWrapper/PageWrapper";
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";
import cls from "./AboutPage.module.scss";

function AboutPage() {
    const { t } = useTranslation("about");
    return (
        <PageWrapper className={cls.aboutPage}>
            <Text size={TextSize.XXL} title="SnowInn" />
            <div className={cls.textBlock}>
                <Text className={cls.title} size={TextSize.L} title="О проекте" />
                <div className={cls.text}>
                    <Text size={TextSize.L} text="Меня зовут Никита Романов, и я являюсь автором проекта" />
                    <Text size={TextSize.L} theme={TextTheme.PRIMARY} text="SnowInn — это гид в мире горных лыж и сноуборда для тех, кто ищет лучшие склоны и маршруты" />
                    <Text size={TextSize.L} theme={TextTheme.PRIMARY} text="Этот проект — для всех нас: от первого снега до последнего подъёмника, для тех, кто живёт снегом, скоростью и горами" />
                </div>
            </div>
        </PageWrapper>
    );
}

export default AboutPage;
