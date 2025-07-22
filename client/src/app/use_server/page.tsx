import { myAction } from './action';


export default function Use_Server() {
    return (
        <form action={myAction}>
            <input type="text" name="name" />
            <button type="submit">Submit</button>
        </form>
    )
}