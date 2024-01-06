'use client'
import { useState } from 'react';

import { Card, Text, Group, Badge, Button, ActionIcon, Modal } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import Image from 'next/image';
import classes from './BadgeCard.module.css';

interface Badge {
    emoji: string;
    label: string;
    link?: string;
}

interface BadgeCardProps {
    image: string;
    title: string;
    description: string;
    country: string;
    badges: Badge[];
}

export function BadgeCard({ image, title, description, country, badges }: BadgeCardProps) {
    const [isModalOpen, setModalOpen] = useState(null);


    const features = badges.map((badge) => (
        <Badge
            variant="light"
            key={badge.label}
            leftSection={badge.emoji}
            onClick={() => badge.link && window.open(badge.link, '_blank')}
            style={badge.link ? { cursor: 'pointer' } : undefined}
            color="red"
        >
            {badge.label}
        </Badge>
    ));





    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Image src={`/vacancies/${image}`} alt={title} height={160} width={250} layout="responsive" />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group justify="apart">
                    <Text fz="lg" fw={500}>
                        {title}
                    </Text>
                    <Badge size="sm" variant="light">
                        {country}
                    </Badge>
                </Group>
                <Text fz="sm" mt="xs">
                    {description}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Коротко о работе
                </Text>
                <Group gap={7} mt={5}>
                    {features}
                </Group>
            </Card.Section>

            <Group mt="xs">
                <Button radius="md" style={{ flex: 1 }} >
                    Подробнее
                </Button>
                <ActionIcon variant="default" radius="md" size={36} >
                    <IconHeart className={classes.like} stroke={1.5} />
                </ActionIcon>


            </Group>


        </Card>
    );
}
