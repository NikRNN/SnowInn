import { baseRTKApi } from "shared/api/baseRTKApi"
import { Notification } from "../model/types/notifications";

const notificationApi = baseRTKApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: () => ({
                url: "/notifications", //адрес, с которого получаю данные по get запросу, оно же название соответствующего массива в моей базе данных
               
            }),
        }),
    })
})

export const useNotification = notificationApi.useGetNotificationsQuery;