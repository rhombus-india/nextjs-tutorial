import { CustomButton } from "../components/Button"

export default function SSR_CSR() {
    console.log("Page Rendered")
    return (
        <>
        <h1>Client Side and Server Side rendering</h1>
        <CustomButton onClick={()=>console.log("Clicked")}>Click Me</CustomButton>
        </>
    )
}