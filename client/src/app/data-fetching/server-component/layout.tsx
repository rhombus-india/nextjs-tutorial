
// const fetchData = async () => {
//     console.log("Called from layout")
//     const data  = await fetch('https://fluffy-space-waddle-x5pgjv6wvg5c6j6g-3001.app.github.dev')
//     const posts = await data.json()
//     return posts
// }

// interface IPosts {
//     userId : number
//     id: number
//     title : string
//     body: string
// }

export default async function CustomLayout({children} :  Readonly<{
  children: React.ReactNode;
}>){
    // const posts = await fetchData() as any
    return (
        <div className="h-8 w-full bg-cyan-100 text-black">
            <h1>This is Server Components</h1>
            <div className="text-white">
                {children}
            </div>
        </div>
    )
}