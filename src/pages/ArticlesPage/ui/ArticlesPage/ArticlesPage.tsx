import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { Article } from "entities/Article";
import { ArticleBlockType, ArticleType, ArticleTypeView } from "entities/Article/model/types/article";
import cls from "./ArticlePage.module.scss";

interface ArticlePageProps {
  className?: string;
  articles: Article[]
}

function ArticlesPage({ className, articles }: ArticlePageProps) {
    const { t } = useTranslation();

    const article = {
        id: "1",
        title: "СОЧИ",
        subtitle: "От легендарных Олимпийских трасс до бескрайнего фрирайда — где рождается ваш горнолыжный миф.",
        img: "https://resize.tripster.ru/JkJnz8k5TxD9TatTNkr4lMxgC6k=/fit-in/1080x810/filters:no_upscale()/https://cdn.tripster.ru/photos/9d94324a-cd3d-4d09-87fe-9b625349e3a9.jpg",
        views: 90,
        createdAt: "04.02.2026",
        user: {
            id: "1",
            username: "Никита Романов",
            avatar: "https://sport-marafon.ru/upload/iblock/db3/0757-001.jpg",
        },
        type: [ArticleType.SEA],
        blocks: [
            {
                id: "1",
                type: ArticleBlockType.TEXT,
                title: "За снежной вертикалью: Сочи — новая альпийская мечта России",
                paragraphs: [
                    "Забудьте о стереотипах про пальмы и море. С декабря по апрель Большой Сочи — это иная вселенная, где пики Главного Кавказского хребта подпирают небо, а современные курорты предлагают один из самых масштабных и технологичных горнолыжных опытов в Восточной Европе.",
                    "Это место, где наследие Зимних Игр 2014 года ощущается в идеальной нарезке трасс и работе подъёмников, а уровень сервиса и инфраструктуры сравним с лучшими европейскими направлениями. Здесь русский размах встречает альпийские стандарты, а гостеприимство Кавказа согревает после самого активного дня на склоне.",
                ],
            },
            {
                id: "2",
                type: ArticleBlockType.IMAGE,
                src: "https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/75165295-5e1f-46b4-bd68-e7342cb6c5e5/-/format/webp/-/quality/lightest/-/stretch/off/-/resize/450x/",
                title: "Панорама курорта Роза Хутор с вершины",
            },
            {
                id: "3",
                type: ArticleBlockType.TEXT,
                title: "Три гиганта: Роза Хутор, Горки Город и Газпром",
                paragraphs: [
                    "Сердце горнолыжного Сочи бьется на двух крупнейших курортах, каждый из которых обладает уникальным характером.",
                    "Роза Хутор — это флагман, наследие Олимпиады. 102 километра подготовленных трасс любого уровня сложности спускаются с высоты 2320 метров.",
                ],
            },
            {
                id: "4",
                type: ArticleBlockType.IMAGE,
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWOxKQT2HQKSgWNuHlN4uOquKb1AZVAl_aA&s",
                title: "Горки Город",
            },
            {
                id: "5",
                type: ArticleBlockType.TEXT,
                title: "Еще одна сокровищница Сочи - горнолыжный курорт Газпром",
                paragraphs: [
                    "Газпром — это элегантный горнолыжный курорт в сердце Красной Поляны, созданный для семейного отдыха и комфортного катания.",
                    "Современные трассы общей протяженностью 25 километров, пологие склоны и развитая инфраструктура делают его идеальным местом для новичков и тех, кто ценит спокойный, размеренный отдых в горах.",
                ],
            },
            {
                id: "6",
                type: ArticleBlockType.IMAGE,
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrD5z7OvSl24Z_TK_SY7roJ22izH7AllU9WA&s",
                title: "Газпром Альпика",
            },
        ],
    } as unknown as Article;

    return (
        <div className={classNames(cls.ArticlePage, [className])}>
            <ArticleList
                view={ArticleTypeView.LIST}
                articles={new Array(16).fill(0).map((item, index) => ({
                    ...article,
                    id: String(index),
                }))}
            />
        </div>
    );
}

export default memo(ArticlesPage);
