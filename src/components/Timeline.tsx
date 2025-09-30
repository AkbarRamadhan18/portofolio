"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TimelineItemProps {
    date: string;
    title: string;
    category: string;
    description: string;
    image: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    date,
    title,
    category,
    description,
    image,
}) => {
    return (
        <motion.div
            className="relative bg-gradient-to-r from-[#1e1e1e] to-[#2a2a2a] p-6 rounded-2xl shadow-md mb-8 flex gap-6"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Garis timeline di kiri */}
            <div className="absolute left-[-20px] top-0 bottom-0 w-[2px] bg-gray-600"></div>

            {/* Gambar project */}
            <div className="w-32 h-24 relative flex-shrink-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            {/* Konten */}
            <div>
                <span className="text-sm text-gray-400">{date}</span>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm text-blue-400 mb-2">#{category}</p>
                <p className="text-gray-300">{description}</p>
            </div>
        </motion.div>
    );
};

const Timeline: React.FC = () => {
    const items = [
        {
            date: "25/06/2024",
            title: "Yap2Type",
            category: "App",
            description:
                "Yap2Type adalah tool AI untuk merangkum konten berbasis audio seperti podcast, berita, dan percakapan. User bisa upload/record audio lalu AI akan membuat ringkasan poin-poin.",
            image: "/projects/yap2type.png",
        },
        {
            date: "15/07/2024",
            title: "Notion AI",
            category: "Productivity",
            description:
                "Notion AI membantu catatan & manajemen tugas dengan fitur AI untuk merangkum, brainstorming, dan mempercepat workflow.",
            image: "/projects/notion.png",
        },
        {
            date: "05/08/2024",
            title: "NextCloud Deploy",
            category: "Cloud",
            description:
                "Deploy Nextcloud di AWS Kubernetes dengan RDS MariaDB & EFS, dilengkapi monitoring CloudWatch.",
            image: "/projects/project3.png",
        },
    ];

    return (
        <section className="max-w-4xl mx-auto py-16 px-6">
            <motion.h2
                className="text-4xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                🚀 My Project Timeli
            </motion.h2>
            <div>
                {items.map((item, index) => (
                    <TimelineItem key={index} {...item} />
                ))}
            </div>
        </section>
    );
};

export default Timeline;
