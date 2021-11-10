let obj1 = {
    href: "ob1",
    items: [1,2,3,4,5,6,7,8,9,10],
    limit: 50,
    next: "www.next.com"
}

let obj2= {
    href: "ob2",
    items: [11,12,13,14,15,16,17,18,19,20],
    limit: 50,
    next: "www.next2.com"
}

let obj3= {
    href: "ob3",
    items: [21,22,23,24,25,26,27,28,29,30],
    limit: 50,
    next: "www.next2.com"
}

let data = obj1.items
data.push(...obj2.items)
data.push(...obj3.items)


let url = "https://api.spotify.com/v1/me/tracks?offset=50&limit=50"

let paramStr = url.slice(url.indexOf('?'));
let searchParams = new URLSearchParams(paramStr);

console.log(searchParams.get('offset'))