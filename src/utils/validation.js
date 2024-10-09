import * as Yup from "yup";

export const is_valid_string = (text) => {
    const pattern = /^[A-Za-z\s]+$/;
    return (
        typeof text === "string" &&
        text.trim() !== "" &&
        pattern.test(text) && text?.trim()?.length > 0
    );
};

export function auth_Validation() {
    return Yup.object().shape({
        username: Yup.string()
            .required("Username is required")
            .min(3, "Username must be at least 3 characters"),
        password: Yup.string()
            .required("Password is required")
            .min(3, "password must be at least 3 characters"),
    })
}