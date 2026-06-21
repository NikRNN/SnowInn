import type { Meta, StoryObj } from "@storybook/react";
import {ArticlesLoaderList} from "./ArticlesLoaderList";
import { StoreDecoratorWithState } from "shared/config/storybook/StoreDecorator/StoreDecorator.js";
import { addArticlesListReducer } from "../../model/slices/addArticlesListSlice";
import { ArticleTypeView , ArticleSortField , ArticleType , Article, ArticleBlockType } from "entities/Article";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";

const meta = {
    title: "pages/ArticlestPage/ArticlesLoaderList",
    component: ArticlesLoaderList,
    parameters: {
        layout: "centered",
    },
    
    tags: ["autodocs"],
    argTypes: { },

    args: { },
} satisfies Meta<typeof ArticlesLoaderList>;

export default meta;
type Story = StoryObj<typeof meta>;

const articles = {
    "1": {
        id: "1",
        title: "Сочи",
        subtitle: "От легендарных Олимпийских трасс до бескрайнего фрирайда — где рождается ваш горнолыжный миф.",
        img: "https://resize.tripster.ru/JkJnz8k5TxD9TatTNkr4lMxgC6k=/fit-in/1080x810/filters:no_upscale()/https://cdn.tripster.ru/photos/9d94324a-cd3d-4d09-87fe-9b625349e3a9.jpg",
        views: 90,
        createdAt: "04.02.2026",
        type: [ArticleType.SKI_TRACK],
        user: {
            id: "1",
            username: "Никита",
        },
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
        ],

    },
    "2": {
        id: "2",
        title: "Газпром",
        subtitle: "альпика",
        img: "https://resize.tripster.ru/JkJnz8k5TxD9TatTNkr4lMxgC6k=/fit-in/1080x810/filters:no_upscale()/https://cdn.tripster.ru/photos/9d94324a-cd3d-4d09-87fe-9b625349e3a9.jpg",
        views: 90,
        createdAt: "04.02.2026",
        type: [ArticleType.SKI_TRACK],
        user: {
            id: "1",
            username: "Никита",
        },
        blocks: [
            {
                id: "1",
                type: ArticleBlockType.TEXT,
                title: "За снежной вертикалью: Сочи — новая альпийская мечта России",
                paragraphs: [
                    "jffhweg hgrjwg ffei h fjwh grh g ef hg fj fgwwhefghhefg fwhg fehg"
                ]
            },
            {
                id: "2",
                type: ArticleBlockType.IMAGE,
                src: "https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/75165295-5e1f-46b4-bd68-e7342cb6c5e5/-/format/webp/-/quality/lightest/-/stretch/off/-/resize/450x/",
                title: "Панорама курорта Роза Хутор с вершины",
            },
        ],
    } 
};

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecoratorWithState({
            articlesList: {
                ids: ["1", "2"],
                entities: articles,
                view: ArticleTypeView.LIST,
                isLoading: false,
                error: undefined,
                page: 1,
                hasMore: true,
                _inited: false,
                sort: ArticleSortField.VIEWS,
                order: "asc",
                search: "",
                type: ArticleType.ALL,
            }
        }, {articlesList: addArticlesListReducer}),
        RouterDecorator("/articles?sort=views&order=asc&search=", "/*")
    ],
};


export const PrimaryTile: Story = {
    args: {},
    decorators: [
        StoreDecoratorWithState({
            articlesList: {
                ids: ["1", "2"],
                entities: articles,
                view: ArticleTypeView.TILE,
                isLoading: false,
                error: undefined,
                page: 1,
                hasMore: true,
                _inited: false,
                sort: ArticleSortField.VIEWS,
                order: "asc",
                search: "",
                type: ArticleType.ALL,
            }
        }, {articlesList: addArticlesListReducer}),
        RouterDecorator("/articles?sort=views&order=asc&search=", "/*")
    ],
};

export const IsLoading: Story = {
    args: {},
    decorators: [
        StoreDecoratorWithState({
            articlesList: {
                ids: [],
                entities: {},
                view: ArticleTypeView.LIST,
                isLoading: true,
                error: undefined,
                page: 1,
                hasMore: true,
                _inited: false,
                sort: ArticleSortField.VIEWS,
                order: "asc",
                search: "",
                type: ArticleType.ALL,
            }
        }, {articlesList: addArticlesListReducer}),
        RouterDecorator("/articles?sort=views&order=asc&search=", "/*")
    ],
};

export const IsLoadingTile: Story = {
    args: {},
    decorators: [
        StoreDecoratorWithState({
            articlesList: {
                ids: [],
                entities: {},
                view: ArticleTypeView.TILE,
                isLoading: true,
                error: undefined,
                page: 1,
                hasMore: true,
                _inited: false,
                sort: ArticleSortField.VIEWS,
                order: "asc",
                search: "",
                type: ArticleType.ALL,
            }
        }, {articlesList: addArticlesListReducer}),
        RouterDecorator("/articles?sort=views&order=asc&search=", "/*")
    ],
};


