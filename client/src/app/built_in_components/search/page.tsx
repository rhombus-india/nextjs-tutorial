'use client'
import { useSearchParams } from "next/navigation";
export default function Search() {
    const searchParams = useSearchParams()

    const search = searchParams.get('query')
    console.log(search)
    return (
        <div className="text-white">{search}</div>
    )
}