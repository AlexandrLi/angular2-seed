import {Injectable} from "angular2/core";

@Injectable()
export class AuthorService {
    getAuthors(): string[] {
        return ['Author1', 'Author2', 'Author3'];
    }

}


