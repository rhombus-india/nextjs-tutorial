import { UpdateUSerForm } from "./UpdateUSerForm"

const fetchData = async () => {
    console.log("Called from page")
    const data  = await fetch('https://fluffy-space-waddle-x5pgjv6wvg5c6j6g-3001.app.github.dev/users')
    const posts = await data.json()
    return posts
}

export default async function DataUpdating() {
    const user_data = await fetchData()
    return (
        <>
        <div>{user_data?.length}</div>
        <UpdateUSerForm />
        </>
    )
}