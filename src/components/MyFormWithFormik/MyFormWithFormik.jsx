import React from 'react';
import styles from "./myFormikStyles.module.css"
import {Formik, Form} from "formik"
import * as Yup from "yup"
import FormikField from "./FormikField";
import {useDispatch, useSelector} from "react-redux";
import {addTeam, teamsCountIncrement} from "../../store/slicers/teamsList";
import {setTeamToFirebase} from "../../api/firebase";
import {useNavigate} from "react-router-dom";


const MyFormWithFormik = () => {

    const teamsCount = useSelector(state => state.teamsListSlice.teamsCount)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValues = {
        name1: "",
        name2: "",
        phone: "",
    }
    const validationSchema = Yup.object({
        name1: Yup.string().required("Имя первого участника обязательно").min(5, "лишком маленькое имя"),
        name2: Yup.string().required("Имя второго участника обязательно").min(5, "лишком маленькое имя"),
        phone: Yup.string().required("Введите номер телефона для связи").min(10, "неверный номер телефона"),

    })

    const onSubmit = (values, onSubmitProps) => {
        const payload = {
            id: teamsCount,
            player1: values.name1,
            player2: values.name2,
            phone: values.phone
        }
        setTeamToFirebase(teamsCount, payload).then(() => {
            dispatch(addTeam(payload))
            onSubmitProps.resetForm()
            onSubmitProps.setSubmitting(false)
            navigate("/confirm")
        })
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