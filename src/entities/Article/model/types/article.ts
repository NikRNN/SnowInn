export enum ArticleBlockType {
TEXT = "text",
IMAGE = "image"
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
SKI = "ski",
SEA = "sea",
MOUNTAINS = "mountains"
}

export interface Article {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType,
    blocks: ArticleBlock[]
}
