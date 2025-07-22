'use client'
import { createUser } from "./update.action"
export function UpdateUSerForm () {
    return (
        <form action={createUser}>
            <input name="users" className="border border-cyan-200" placeholder="Enter name" />
            <input name="id" className="border border-cyan-200" placeholder="Enter id" />
            <button className="p-4 bg-cyan-500" type="submit">Submit</button>
        </form>
    )
}