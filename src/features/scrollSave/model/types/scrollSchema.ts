export type ScrollSchema = Record<string, number> // Полем будет адрес страницы, а значением - позиия скролла в пикселях

export interface ScrollSaveSchema {
    scroll: ScrollSchema;
}
