'use server'
import axios from "axios"
import { revalidatePath } from "next/cache"
export async function createUser(formData) {
    const data = Object.fromEntries(formData)
    const res = await axios.post("https://fluffy-space-waddle-x5pgjv6wvg5c6j6g-3001.app.github.dev/users", data)
    console.log("dATA",res)
    revalidatePath('data-updating')

}