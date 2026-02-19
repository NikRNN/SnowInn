import { User } from "entities/User";

export enum ArticleBlockType {
TEXT = "TEXT",
IMAGE = "IMAGE"
}

export interface ArticleBlockBase {
    id: string,
    type: ArticleBlockType
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT,
    title?: string,
    paragraphs: string[]
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE,
    src: string,
    title: string
}

export type ArticleBlock = ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
SKI = "SKI",
SEA = "SEA",
MOUNTAINS = "mountains"
}

export interface Article {
    id: string,
    user: User,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ArticleBlock[]
}

export enum ArticleTypeView {
    LIST = "list",
    TILE = "tile"
}
