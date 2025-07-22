"use server"
export async function myAction(formData: FormData) {
    // ... server logic using formData ...
    console.log("Server action called with data:", formData);
}