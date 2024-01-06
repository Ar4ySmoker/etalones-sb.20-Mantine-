import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export function HeroImageRight() {
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            Более{' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'red', to: 'yellow' }}
                            >
                                50-ти
                            </Text>{' '}
                            Свободных рабочих мест
                        </Title>

                        <Text className={classes.description} mt={30}>
                            Мы работаем по всей територии Евросоюза - Польша, Германия, Бельния, Голландия,
                            Франция. Присоединяйтесь к нашей команде уже сегодня!
                        </Text>

                        <Button
                            variant="gradient"
                            gradient={{ from: 'red', to: 'yellow' }}
                            size="xl"
                            className={classes.control}
                            mt={40}
                        >
                            Отправить заявку
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}