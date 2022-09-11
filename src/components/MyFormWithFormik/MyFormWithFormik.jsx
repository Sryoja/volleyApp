import React from 'react';
import styles from "./myFormikStyles.module.css"
import {Formik, Form} from "formik"
import * as Yup from "yup"
import FormikField from "./FormikField";
import {useSelector} from "react-redux";


const MyFormWithFormik = ({getNewTeam}) => {

    const teamsCount = useSelector(state => state.teamsListSlice.teamsCount)

    const initialValues = {
        name1: "test1",
        name2: "test2",
        phone: "0000000000",
    }
    const validationSchema = Yup.object({
        name1: Yup.string().required("Имя первого участника обязательно").min(5, "лишком маленькое имя"),
        name2: Yup.string().required("Имя второго участника обязательно").min(5, "лишком маленькое имя"),
        phone: Yup.string().required("Введите номер телефона для связи").min(10, "неверный номер телефона"),

    })

    const onSubmit = (values, onSubmitProps) => {
        const newTeam = {
            id: teamsCount,
            player1: values.name1,
            player2: values.name2,
            phone: values.phone
        }
        getNewTeam(newTeam)
        onSubmitProps.resetForm()
        onSubmitProps.setSubmitting(false)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    return <Form className={styles.myFormikForm}>
                        <FormikField
                            fieldType="input"
                            name="name1"
                            label="1 участник"
                            type="text"
                            placeholder="Имя и фамилия первого участника"
                        />
                        <FormikField
                            fieldType="input"
                            name="name2"
                            label="2 участник"
                            type="text"
                            placeholder="Имя и фамилия второго участника"
                        />
                        <FormikField
                            fieldType="input"
                            name="phone"
                            label="телефон для связи"
                            type="phone"
                            placeholder="9099090909"
                        />

                        <button
                            className={styles.myFormikButton}
                            disabled={!formik.isValid || formik.isSubmitting}
                        >Send
                        </button>
                    </Form>
                }
            }
        </Formik>
    );
};

export default MyFormWithFormik;