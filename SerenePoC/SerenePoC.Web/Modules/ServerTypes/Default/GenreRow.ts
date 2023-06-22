import { fieldsProxy } from "@serenity-is/corelib/q";

export interface GenreRow {
    GenreId?: number;
    Name?: string;
}

export abstract class GenreRow {
    static readonly idProperty = 'GenreId';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'Default.Genre';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<GenreRow>();
}