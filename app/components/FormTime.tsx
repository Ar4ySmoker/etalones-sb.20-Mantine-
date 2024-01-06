'use client'
// import { IMaskInput } from 'react-imask';
import { NumberInput, TextInput, Button, Group, Box, Container } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { useForm } from '@mantine/form';

import styles from './FormTime.module.css'

function FormTime() {
    const form = useForm({
        initialValues: {
            email: '',
            termsOfService: false,
        },


    });

    return (
        <>
            <Container>
                <div className={styles.h1}>Оставьте свой номер телефона и мы сразу свяжемся с Вами.</div>
                <span>Назначьте время разговора с нами и мы поможем Вам выбрать вакансию и ответим на Ваши вопросы.</span>
            </Container>
            <Box mx="auto">
                <form className={styles.form} onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput
                        size="xs"
                        radius="xl"
                        withAsterisk
                        label="Укажите имя"
                        placeholder="Ваше Имя"
                        {...form.getInputProps('name')}
                    />
                    <NumberInput
                        size="xs"
                        radius="xl"
                        withAsterisk
                        hideControls
                        label="Номер телефона"
                        placeholder="Ваш номер телефона в месседжерах"
                        {...form.getInputProps('phone')}
                    />
                    <TimeInput
                        size="xs"
                        radius="xl"
                        label="Выберите время"

                        placeholder="Input placeholder"
                    />

                    <Button
                        mt={25}
                        size="xs"
                        radius="xl" type="submit">Отправить</Button>
                </form>
            </Box>
        </>
    );
}


export default FormTime;