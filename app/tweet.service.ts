import {Injectable} from 'angular2/core'

@Injectable()
export class TweetService {
    getTweets() {
        return [
            {
                imageUrl: "http://lorempixel.com/100/100/people?1",
                title: "Test title1",
                author: "@test_author2",
                message: "test message",
                isLiked: false,
                totalLikes: 3,
                isFavorite: false
            },
            {
                imageUrl: "http://lorempixel.com/100/100/people?2",
                title: "Test title2",
                author: "@test_author2",
                message: "test message",
                isLiked: true,
                totalLikes: 10,
                isFavorite: true
            },
            {
                imageUrl: "http://lorempixel.com/100/100/people?3",
                title: "Test title3",
                author: "@test_author3",
                message: "test message",
                isLiked: false,
                totalLikes: 0,
                isFavorite: true
            }
        ];
    }
}