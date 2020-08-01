import profile from "./imgs/thumb.jpeg";
import img from "./imgs/img_section/img01.jpg";
import img02 from './imgs/img_section/img02.jpg'
import img03 from './imgs/img_section/img03.jpg'
import img04 from './imgs/img_section/img04.jpg'
import img05 from './imgs/img_section/img05.jpg'
import img06 from './imgs/img_section/img06.png'
import img07 from './imgs/img_section/img07.png'

export const user = {
    userId: "tedd911",
    name: "이형태",
    profileImg: profile,
    follow: [
        {userId: 'wnsghk16'},
        {userId: 'sbxxxia'},
        {userId: 'kharkky'},
        {userId: 'jusun'},
        {userId: 'tmdrbdi'}
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
            dateTime: '2020-08-30, 08:00'
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
        dateTime: '2020-07-30, 17:00'
    },
    {
        postId: 2,
        userId: "tedd911",
        name: "이형태",
        profileImg: profile,
        location: "대한민국, 인천 계양",
        img: img02,
        like: 0,
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
        dateTime: '2020-07-30, 17:00'
    },
    {
        postId: 3,
        userId: "tedd911",
        name: "이형태",
        profileImg: profile,
        location: "대한민국, 인천 계양",
        img: img03,
        like: 0,
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
        dateTime: '2020-07-30, 17:00'
    },
    {
        postId: 4,
        userId: "tedd911",
        name: "이형태",
        profileImg: profile,
        location: "대한민국, 인천 계양",
        img: img04,
        like: 0,
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
        dateTime: '2020-07-30, 17:00'
    },
    {
        postId: 5,
        userId: "tedd911",
        name: "이형태",
        profileImg: profile,
        location: "대한민국, 인천 계양",
        img: img05,
        like: 0,
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
        dateTime: '2020-07-30, 17:00'
    },
    {
        postId: 6,
        userId: "tedd911",
        name: "이형태",
        profileImg: profile,
        location: "대한민국, 인천 계양",
        img: img06,
        like: 0,
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
        dateTime: '2020-07-30, 17:00'
    },
    {
        postId: 7,
        userId: "tedd911",
        name: "이형태",
        profileImg: profile,
        location: "대한민국, 인천 계양",
        img: img07,
        like: 0,
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
        dateTime: '2020-07-30, 17:00'
    },
]