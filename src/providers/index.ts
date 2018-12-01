import { HttpParams } from "@angular/common/http/src/params";
import { HttpHeaders } from "@angular/common/http/src/headers";



export class RequestOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: "body";
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: "json";
  withCredentials?: boolean;
}
