import { http, HttpResponse } from "msw";
import { ArticleType } from "entities/Article";


const articles = [
    {
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
        blocks: [],
    },
    {
        id: "2",
        title: "Газпром",
        subtitle: "Альпика",
        img: "https://resize.tripster.ru/JkJnz8k5TxD9TatTNkr4lMxgC6k=/fit-in/1080x810/filters:no_upscale()/https://cdn.tripster.ru/photos/9d94324a-cd3d-4d09-87fe-9b625349e3a9.jpg",
        views: 90,
        createdAt: "04.02.2026",
        type: [ArticleType.SKI_TRACK],
        user: {
            id: "1",
            username: "Никита",
        },
        blocks: [],
    },
    {
        id: "3",
        title: "Роза Хутор",
        subtitle: "Флагман Красной Поляны",
        img: "https://resize.tripster.ru/JkJnz8k5TxD9TatTNkr4lMxgC6k=/fit-in/1080x810/filters:no_upscale()/https://cdn.tripster.ru/photos/9d94324a-cd3d-4d09-87fe-9b625349e3a9.jpg",
        views: 120,
        createdAt: "05.02.2026",
        type: [ArticleType.SKI_TRACK],
        user: {
            id: "1",
            username: "Никита",
        },
        blocks: [],
    },
    {
        id: "4",
        title: "Архыз",
        subtitle: "Кавказские просторы",
        img: "https://resize.tripster.ru/JkJnz8k5TxD9TatTNkr4lMxgC6k=/fit-in/1080x810/filters:no_upscale()/https://cdn.tripster.ru/photos/9d94324a-cd3d-4d09-87fe-9b625349e3a9.jpg",
        views: 70,
        createdAt: "06.02.2026",
        type: [ArticleType.SKI_TRACK],
        user: {
            id: "1",
            username: "Никита",
        },
        blocks: [],
    },
    {
        id: "5",
        title: "Домбай",
        subtitle: "Легенда Кавказа",
        img: "https://resize.tripster.ru/JkJnz8k5TxD9TatTNkr4lMxgC6k=/fit-in/1080x810/filters:no_upscale()/https://cdn.tripster.ru/photos/9d94324a-cd3d-4d09-87fe-9b625349e3a9.jpg",
        views: 200,
        createdAt: "07.02.2026",
        type: [ArticleType.SKI_TRACK],
        user: {
            id: "1",
            username: "Никита",
        },
        blocks: [],
    },
];

export const articleRecommendationsListStories = [
    http.get("http://localhost:8000/articles", ({ request }) => {
        const url = new URL(request.url);
        const limit = url.searchParams.get("_limit");
        

        return HttpResponse.json(articles);
    }),
];