import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .email("The email must be in valid format.")
    .required("The email is required"),
  password: yup
    .string()
    .required("The password is required.")
    .min(4, "The mail must contain four caracters minimum.")
    .max(10, "The password should not be more than ten caracters."),
});
export default schema;
