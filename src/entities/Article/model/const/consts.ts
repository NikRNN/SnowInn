export enum ArticleBlockType {
TEXT = "TEXT",
IMAGE = "IMAGE"
}

export enum ArticleType {
SKI_TRACK = "Трассовое катание",
FREERIDE = "Фрирайд",
ALL = "Все статьи"
}

export enum ArticleTypeView {
    LIST = "list",
    TILE = "tile"
}

export enum ArticleSortField { // поле, по которому будет идти сортировка статей
    VIEWS = "views",
    TITLE = "title",
    CREATED = "createdAt"
}