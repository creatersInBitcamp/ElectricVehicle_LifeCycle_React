const TIMEOUT = 1000

export  default {
    getPosts: (cb, timeout) => setTimeout(() => cb([]), timeout || TIMEOUT)
}