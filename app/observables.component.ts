import {Component} from "angular2/core";
import {ControlGroup, FormBuilder} from "angular2/common";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";

@Component({
    selector: 'observables',
    template: `
            <form [ngFormModel]="form">
                <input type="text" ngControl="search">
            </form>
            
    `
})
export class ObservablesComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            search: ['']
        });
        var search = this.form.find('search');
        search.valueChanges
            .debounceTime(400)
            .map(str => (<string>str).replace(' ', '-'))
            .subscribe(x => console.log(x));

        var startDates = [];
        var startDate = new Date();

        for (var day = -2; day <= 2; day++) {
            var date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDay() + day);
            startDates.push(date);
        }

        Observable
            .fromArray(startDates)
            .map(date => {
                console.log("Getting deals for date " + date)
                return [1, 2, 3];
            })
            .subscribe(x => console.log(x));

        Observable.empty().subscribe(x => console.log(x));
        Observable.range(1, 5).subscribe(x => console.log(x));
        Observable.fromArray([1, 2, 3]).subscribe(x => console.log(x));
        Observable.of([1, 2, 3]).subscribe(x => console.log(x));

        Observable.interval(10000)
            .flatMap(x => {
                console.log("Calling server to get latest news");
                return Observable.of([1, 2, 3]);
            })
            .subscribe(news => console.log(news));

        var userStream = Observable.of({
            userId: 1,
            username: 'Mosh'
        }).delay(2000);

        var tweetsStream = Observable.of([1, 2, 3]).delay(1500);

        Observable
            .forkJoin(userStream, tweetsStream)
            .map(joined => new Object({user: joined[0], tweets: joined[1]}))
            .subscribe(result => console.log(result));

        Observable
            .throw(new Error("Something went wrong!"))
            .subscribe(
                x => console.log(x),
                error => console.error(error));

        var counter = 0;
        Observable
            .of('url')
            .flatMap(() => {
                if (++counter < 2) {
                    console.log("Counter: " + counter);
                    return Observable.throw(new Error("Request failed"));
                }
                return Observable.of([4, 5, 6]);
            })
            .retry(3)
            .subscribe(
                result => console.log(result),
                error => console.error(error));

        Observable
            .throw(new Error("Something failed."))
            .catch(err => {
                console.error((<Error>err).message);
                return Observable.of([7, 8, 9]);
            })
            .subscribe(x => console.log(x));

        Observable
            .of([1, 2, 3])
            .delay(5000)
            .timeout(1000)
            .subscribe(
                x => console.log(x),
                err => console.error(err)
            );

        Observable
            .throw(new Error("error!"))
            .subscribe(
                x => console.log(x),
                err => console.error(err),
                () => console.log("complete")
            );

        Observable
            .fromArray([1, 2, 3])
            .subscribe(
                x => console.log(x),
                err => console.error(err),
                () => console.log("completed")
            );
    }
}