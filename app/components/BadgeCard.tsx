'use client'
import { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
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
    const [isModalOpen, setModalOpen] = useState(false);
    const [likeCount, setLikeCount] = useState<number>(() => {
        // Проверяем, определен ли localStorage
        if (typeof window !== 'undefined') {
            const savedLikeCount = localStorage.getItem(`likeCount_${title}`);
            return savedLikeCount ? parseInt(savedLikeCount, 10) : 0;
        }
        return 0;
    });

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

    const handleLikeClick = () => {
        setLikeCount((prevCount) => {
            const newCount = prevCount + 1;
            // Сохраняем новое значение в localStorage, если он определен
            if (typeof window !== 'undefined') {
                localStorage.setItem(`likeCount_${title}`, newCount.toString());
            }
            return newCount;
        });
    };

    // Используем useEffect для отслеживания изменений likeCount и сохранения их в localStorage
    useEffect(() => {
        // Сохраняем новое значение в localStorage, если он определен
        if (typeof window !== 'undefined') {
            localStorage.setItem(`likeCount_${title}`, likeCount.toString());
        }
    }, [likeCount, title]);

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
                <Button radius="md" style={{ flex: 1 }} onClick={() => setModalOpen(true)}>
                    Подробнее
                </Button>
                <ActionIcon variant="default" radius="md" size={36} onClick={handleLikeClick}>
                    <IconHeart className={classes.like} stroke={1.5} />
                </ActionIcon>
                {/* Отображение числа лайков */}
                <Badge variant="light" color="red" style={{ cursor: 'default' }}>
                    {likeCount}
                </Badge>
            </Group>

            <Modal opened={isModalOpen} onClose={() => setModalOpen(false)} title="Подробности о вакансии">
                {/* Содержимое модального окна */}
                <p>Здесь может быть более подробная информация о вакансии.</p>
            </Modal>
        </Card>
    );
}
