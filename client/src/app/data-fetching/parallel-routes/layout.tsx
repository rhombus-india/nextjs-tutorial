export default async function CustomLayout({children,movies,artists} :  Readonly<{
  children: React.ReactNode;
  movies: React.ReactNode;
  artists: React.ReactNode;
}>){
    // const posts = await fetchData() as any
    return (
        <div className="h-8 w-full bg-cyan-100 text-black">
            <h1>This is Parallel Component Components</h1>
            <div className="text-white">
                {children}
                <div className="grid grid-cols-2">
                {movies}
                {artists}
                </div>
                
            </div>
        </div>
    )
}