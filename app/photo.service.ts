import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import "rxjs/add/operator/map";

@Injectable()
export class PhotoService {
    private _url = "http://jsonplaceholder.typicode.com/albums";

    constructor(private _http: Http) {
    }

    getAlbums() {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    getPhotos(id) {
        return this._http.get(this._url + "/" + id + "/photos")
            .map(res => res.json());
    }

    getArchives() {
        return [
            {year: 2016, month: 1},
            {year: 2016, month: 2},
            {year: 2016, month: 3}
        ];
    }

    getArchive(year, month) {
        return {year: year, month: month};
    }
}