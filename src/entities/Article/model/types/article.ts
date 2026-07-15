import type { User } from "entities/User/model/types/index";
import { ArticleBlockType , ArticleType } from "../const/consts";

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


