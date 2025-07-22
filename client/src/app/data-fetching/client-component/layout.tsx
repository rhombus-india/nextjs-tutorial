export default async function CustomLayout({children} :  Readonly<{
  children: React.ReactNode;
}>){
    // const posts = await fetchData() as any
    return (
        <div className="h-8 w-full bg-red-100 text-black">
            <h1>This is Client Components</h1>
            <div className="text-white">
                {children}
            </div>
        </div>
    )
}