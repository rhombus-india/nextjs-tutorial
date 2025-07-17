import Form from 'next/form'
export default function Built_in_Component() {

    return (
        <>
            <h1>Built In Components</h1>
            <Form action={"/built_in_components/search"}>
                {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
                <input name="query" />
                <button type="submit">Submit</button>
            </Form>
        </>
    )
}