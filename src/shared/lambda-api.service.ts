import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class LambdaApi {

    public baseUrl: string = 'https://www.lambdaphx.org/api/v1';

    constructor(private http: Http, public storage: Storage) {

    }
    getArticles() : Observable<any> {
        return this.http.get(`${this.baseUrl}/articles`)
            .map((response: Response) => {
                return response.json().data
            });
    }

    getArticleById(pageId) : Observable<any> {
        return this.http.get(`${this.baseUrl}/articles/${pageId}`)
            .map((response: Response) => {
                return response.json().data[0];
            });
    }

    getFellowships() : Observable<any> {
        return this.http.get(`${this.baseUrl}/fellowships`)
            .map((response: Response) => {
                return response.json().data;
            });
    }

    getFellowshipById(fellowshipId) : Observable<any> {
        return this.http.get(`${this.baseUrl}/fellowships/${fellowshipId}`)
            .map((response: Response) => {
                return response.json().data;
            });
    }

    getMeetingsByFellowship(abbreviation) : Observable<any> {
        return this.http.get(`${this.baseUrl}/meetings-by-fellowship/${abbreviation}`)
            .map((response: Response) => {
                return response.json().data;
            });
    }

    getResourceCateogries() : Observable<any> {
        return this.http.get(`${this.baseUrl}/resource-categories`)
            .map((response: Response) => {
                return response.json().data;
            });
    }

    getResourcesByCategoryId(categoryId) : Observable<any> {
        return this.http.get(`${this.baseUrl}/resources/${categoryId}`)
            .map((response: Response) => {
                return response.json().data;
            });
    }

    getResourceCategoryById(categoryId) : Observable<any> {
        return this.http.get(`${this.baseUrl}/resource-categories/${categoryId}`)
            .map((response: Response) => {
                return response.json().data;
            });
    }

    getMeetingsByDay(day) : Observable<any> {
        return this.http.get(`${this.baseUrl}/meetings-by-day/${day}`)
            .map((response: Response) => {
                return response.json().data;
            });
    }

    getBoard(): Observable<any> {
        return this.http.get(`${this.baseUrl}/board`)
            .map((response: Response) => {
                return response.json();
            });
    }

    getSponsors(): Observable<any> {
        return this.http.get(`${this.baseUrl}/sponsors`)
            .map((response: Response) => {
                return response.json().data;
            });
    }
}