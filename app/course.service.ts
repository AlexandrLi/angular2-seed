import {Injectable} from "angular2/core";

@Injectable()
export class CourseService {
    getCourses(): string[] {
        return ["Course1", "Course2", "Course3"];
    }

}
