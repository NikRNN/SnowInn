import { http, HttpResponse } from "msw";


const notifications = [
    {
        id: "1",
        description: "Произошло какое-то событие",
        userId: "1"
    },
    {
        id: "2",
        description: "Произошло какое-то событие",
        userId: "1",
        href: "http://localhost:5173/admin"
    },
    {
        id: "3",
        description: "Произошло какое-то событие",
        userId: "1",
        href: "http://localhost:5173/admin"
    }
    
];

export const notificationsListStories = [
    http.get("http://localhost:8000/notifications", () => {
        
        return HttpResponse.json(notifications);
    }),
];