import React from "react";
import "./LoginForm.css";
import Form from "./Form";
import FormButton from "./form_button/FormButton";
import FormField from "./form_field/FormField";


const submissionDisabled = true;
const formName = "loginForm";

function LoginForm() {
    return (
        <Form className="LoginForm" name={formName}>
            <h2>Acesse sua conta</h2>
            <FormField/>
            <FormField/>
            <FormButton/>
            <FormButton/>
        </Form>
    );
}

export default LoginForm;