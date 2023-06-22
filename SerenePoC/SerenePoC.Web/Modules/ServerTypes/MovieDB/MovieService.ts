﻿import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, ServiceRequest, serviceRequest } from "@serenity-is/corelib/q";
import { MovieRow } from "./MovieRow";

export namespace MovieService {
    export const baseUrl = 'MovieDB/Movie';

    export declare function Create(request: SaveRequest<MovieRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Update(request: SaveRequest<MovieRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<MovieRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<MovieRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function GetData(request: ServiceRequest, onSuccess?: (response: string) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Create: "MovieDB/Movie/Create",
        Update: "MovieDB/Movie/Update",
        Delete: "MovieDB/Movie/Delete",
        Retrieve: "MovieDB/Movie/Retrieve",
        List: "MovieDB/Movie/List",
        GetData: "MovieDB/Movie/GetData"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List', 
        'GetData'
    ].forEach(x => {
        (<any>MovieService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}