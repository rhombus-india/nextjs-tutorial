'use client'

import useSWR from 'swr'
interface IPosts {
    userId : number
    id: number
    title : string
    body: string
}

const fetcher = async () => {
    console.log("Called from page")
    const data  = await fetch('https://fluffy-space-waddle-x5pgjv6wvg5c6j6g-3001.app.github.dev')
    const posts = await data.json()
    return posts
}

export default function ClientComponent(){
    const {data , error} = useSWR('client-component', fetcher, {
        refreshInterval: 1
    }) as any
    console.log(data)
    if(error) return <>Error occured</>
    if(!data) return <>Loading</>
    return (
        <div className="w-3/5 p-8 h-screen mx-auto space-y-8">
            <h1 className="text-2xl ">
                Data Fetching
            </h1>
            { 
                data.map(post => (
                    <div>

                        <h2 className="text-lg">{post.id}</h2>
                        <h2 className="text-lg">{post.title}</h2>
                        <h2 className="text-sm">{post.body}</h2>
                    </div>
                ))
            }
        </div>
    )
}