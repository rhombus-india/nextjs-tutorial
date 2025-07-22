import { Suspense } from "react"

const fetchData = async () => {
    console.log("Called from page")
    
    const data = await fetch('https://fluffy-space-waddle-x5pgjv6wvg5c6j6g-3001.app.github.dev')
    const posts = await data.json()
    return posts
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


interface IPosts {
    userId: number
    id: number
    title: string
    body: string
}

export default async function DataFetching() {
    const posts: Array<IPosts> = await fetchData()
    return (
        <Suspense fallback={<h1>Loading Movies</h1>}>
            <div className="w-3/5 p-8 h-screen mx-auto space-y-8">
                <h1 className="text-2xl ">
                    Data Fetching from Movies
                </h1>
                {
                    posts && posts.map((post: IPosts) => (
                        <div>

                            <h2 className="text-lg">{post.id}</h2>
                            <h2 className="text-lg">{post.title}</h2>
                            <h2 className="text-sm">{post.body}</h2>
                        </div>
                    ))
                }
            </div>
        </Suspense>

    )
}