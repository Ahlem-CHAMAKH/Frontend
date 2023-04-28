export interface FolderStruct {
    name: string;
    hasChild: boolean;
    content: string;
    children?: FolderStruct[];
}