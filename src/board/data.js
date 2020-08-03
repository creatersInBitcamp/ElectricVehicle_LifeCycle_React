import profile from "./imgs/thumb.jpeg";
import profile2 from './imgs/thumb02.jpg'
import profile3 from './imgs/thumb03.jpg'
import profile4 from './imgs/hyejung.jpg'
import profile5 from './imgs/sunghee.jpg'
import profile6 from './imgs/sunghee2.jpg'
import img from "./imgs/img_section/img01.jpg";
import img02 from './imgs/img_section/img02.jpg'
import img03 from './imgs/img_section/img03.jpg'
import img04 from './imgs/img_section/img04.jpg'
import img05 from './imgs/img_section/img05.jpg'
import img06 from './imgs/img_section/img06.png'
import img07 from './imgs/img_section/img07.png'

const time = new Date().toLocaleTimeString()

export const user = {
    userId: "tedd911",
    name: "이형태",
    profileImg: profile,
    follow: [
        {
            userId: 'wnsghk16',
            profileImg: profile2,
            dateTime: time
        },
        {
            userId: 'sbxxxia',
            profileImg: profile3,
            dateTime: time
        },
        {
            userId: 'kharkky',
            profileImg: profile4,
            dateTime: time
        },
        {
            userId: 'jusun',
            profileImg: profile5,
            dateTime: time
        },
        {
            userId: 'tmdrbdi',
            profileImg: profile6,
            dateTime: time
        }
    ],
    follower: [
        {userId: 'wnsghk16'},
        {userId: 'sbxxxia'},
        {userId: 'kharkky'},
        {userId: 'jusun'},
        {userId: 'tmdrbdi'}
    ],
    bookMarks: [
        {
            postId: 8,
            userId: "wnsghk16",
            name: "이준화",
            profileImg: profile,
            location: "대한민국, 서울",
            img: img06,
            hits: 123,
            like: 1,
            comments: [
                {
                    commentId: 1,
                    userId: 'wnsghk16',
                    comment: '코멘트 출력 테스트'
                },
                {
                    commentId: 2,
                    userId: 'tedd911',
                    comment: '코멘트 출력 테스트2'
                },
                {
                    commentId: 3,
                    userId: 'karkky',
                    comment: '다시 연습 중.'
                }
            ],
            dateTime: time,
        },
    ]
}
export const posts = [
    {
        postId: 1,
        userId: "tedd911",
        name: "이형태",
        profileImg: profile,
        location: "대한민국, 인천 계양",
        img: img,
        hits: 123,
        like: 12,
        content: 'post 글쓴이의 글',
        comments: [
            {
                commentId: 1,
                userId: 'wnsghk16',
                comment: '코멘트 출력 테스트'
            },
            {
                commentId: 2,
                userId: 'tedd911',
                comment: '코멘트 출력 테스트2'
            },
            {
                commentId: 3,
                userId: 'karkky',
                comment: '다시 연습 중.'
            }
        ],
        dateTime: time,
    },
    {
        postId: 2,
        userId: "tedd911",
        name: "이형태",
        profileImg: profile,
        location: "대한민국, 인천 계양",
        img: img02,
        hits: 123,
        like: 32,
        comments: [
            {
                commentId: 1,
                userId: 'wnsghk16',
                comment: '코멘트 출력 테스트'
            },
            {
                commentId: 2,
                userId: 'tedd911',
                comment: '코멘트 출력 테스트2'
            },
            {
                commentId: 3,
                userId: 'karkky',
                comment: '다시 연습 중.'
            }
        ],
        dateTime: time,
    },
    {
        postId: 3,
        userId: "tedd911",
        name: "이형태",
        profileImg: profile,
        location: "대한민국, 인천 계양",
        img: img03,
        hits: 123,
        like: 3,
        comments: [
            {
                commentId: 1,
                userId: 'wnsghk16',
                comment: '코멘트 출력 테스트'
            },
            {
                commentId: 2,
                userId: 'tedd911',
                comment: '코멘트 출력 테스트2'
            },
            {
                commentId: 3,
                userId: 'karkky',
                comment: '다시 연습 중.'
            }
        ],
        dateTime: time,
    },
    {
        postId: 4,
        userId: "tedd911",
        name: "이형태",
        profileImg: profile,
        location: "대한민국, 인천 계양",
        img: img04,
        hits: 123,
        like: 7,
        comments: [
            {
                commentId: 1,
                userId: 'wnsghk16',
                comment: '코멘트 출력 테스트'
            },
            {
                commentId: 2,
                userId: 'tedd911',
                comment: '코멘트 출력 테스트2'
            },
            {
                commentId: 3,
                userId: 'karkky',
                comment: '다시 연습 중.'
            }
        ],
        dateTime: time,
    },
    {
        postId: 5,
        userId: "tedd911",
        name: "이형태",
        profileImg: profile,
        location: "대한민국, 인천 계양",
        img: img05,
        hits: 123,
        like: 125,
        comments: [
            {
                commentId: 1,
                userId: 'wnsghk16',
                comment: '코멘트 출력 테스트'
            },
            {
                commentId: 2,
                userId: 'tedd911',
                comment: '코멘트 출력 테스트2'
            },
            {
                commentId: 3,
                userId: 'karkky',
                comment: '다시 연습 중.'
            }
        ],
        dateTime: time,
    },
    {
        postId: 6,
        userId: "tedd911",
        name: "이형태",
        profileImg: profile,
        location: "대한민국, 인천 계양",
        img: img06,
        hits: 123,
        like: 67,
        comments: [
            {
                commentId: 1,
                userId: 'wnsghk16',
                comment: '코멘트 출력 테스트'
            },
            {
                commentId: 2,
                userId: 'tedd911',
                comment: '코멘트 출력 테스트2'
            },
            {
                commentId: 3,
                userId: 'karkky',
                comment: '다시 연습 중.'
            }
        ],
        dateTime: time,
    },
    {
        postId: 7,
        userId: "tedd911",
        name: "이형태",
        profileImg: profile,
        location: "대한민국, 인천 계양",
        img: img07,
        hits: 123,
        like: 97,
        comments: [
            {
                commentId: 1,
                userId: 'wnsghk16',
                comment: '코멘트 출력 테스트'
            },
            {
                commentId: 2,
                userId: 'tedd911',
                comment: '코멘트 출력 테스트2'
            },
            {
                commentId: 3,
                userId: 'karkky',
                comment: '다시 연습 중.'
            }
        ],
        dateTime: time,
    },
]