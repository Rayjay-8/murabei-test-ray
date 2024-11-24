

// export async function fetchPosts(page: number, perPage: number) {
//    const start = (page - 1) * perPage;
//    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${perPage}`);
//    const posts: post[] = await res.json();
//    const totalPosts = parseInt(res.headers.get('X-Total-Count') || '0');
 
//    return { posts, totalPosts }
//  }