export interface IRecipe {
    contentId: number;
    title: string;
    urlPartial: string;
    isFavourited: boolean;
    imageList: any;
    tags: ITag[];
    authors: Array<any>;
}

export interface ITag {
    id: number;
    catId: number;
    name: string;
}
