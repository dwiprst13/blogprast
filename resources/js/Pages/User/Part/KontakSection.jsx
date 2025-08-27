import { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import KontakHeroSection from "@/Components/organisms/KontakHeroSection";
import KontakForm from "@/Components/organisms/KontakForm";



export default function KontakSection() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route("contact.store"), {
            onSuccess: () => {
                reset();
                setIsSubmitted(true);
                setTimeout(() => setIsSubmitted(false), 5000);
            },
        });
    };

    const contactInfo = [
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
            title: "Email",
            value: "dwiprasetia@example.com",
            link: "mailto:dwiprasetia@example.com",
        },
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                </svg>
            ),
            title: "Telepon",
            value: "+62 812-3456-7890",
            link: "tel:+6281234567890",
        },
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            ),
            title: "Lokasi",
            value: "Yogyakarta, Indonesia",
            link: "#",
        },
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            title: "Jam Kerja",
            value: "Sen - Jum, 9:00 - 17:00 WIB",
            link: "#",
        },
    ];

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com",
            color: "hover:text-gray-900 dark:hover:text-white",
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com",
            color: "hover:text-blue-600",
        },
        {
            name: "Twitter",
            href: "https://twitter.com",
            color: "hover:text-blue-400",
        },
        {
            name: "Instagram",
            href: "https://instagram.com",
            color: "hover:text-pink-500",
        },
    ];

    return (
        <>
            <Head title="Kontak" />

            <div className="bg-gray-50 dark:bg-black min-h-screen transition-colors duration-300">
                {/* Hero Section */}
                <KontakHeroSection />

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <KontakForm
                            data={data}
                            setData={setData}
                            errors={errors}
                            processing={processing}
                            submit={submit}
                            isSubmitted={isSubmitted}
                        />

                        {/* Contact Info & Social */}
                        <div className="space-y-8">
                            {/* Contact Information */}
                            <div className="bg-white dark:bg-black/80 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-900 dark:border-b-orange-600 dark:border-r-orange-600 dark:border-b-2 dark:border-r-2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                    Informasi Kontak
                                </h3>
                                <div className="space-y-4">
                                    {contactInfo.map((info, index) => (
                                        <a
                                            key={index}
                                            href={info.link}
                                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group"
                                        >
                                            <div className="flex-shrink-0 p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400 group-hover:bg-blue-200 dark:group-hover:bg-orange-900/50 transition-colors duration-200">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 dark:text-white">
                                                    {info.title}
                                                </h4>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white dark:bg-black/80 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-900 dark:border-b-orange-600 dark:border-r-orange-600 dark:border-b-2 dark:border-r-2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                    Temukan Saya Di
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center justify-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200 hover:shadow-md group`}
                                        >
                                            <span className="font-medium text-sm group-hover:scale-105 transition-transform duration-200">
                                                {social.name}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Response Info */}
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
                                <div className="flex items-center mb-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">
                                        Respon Cepat
                                    </h4>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Saya biasanya merespon dalam 24 jam. Untuk
                                    urusan mendesak, silakan hubungi via
                                    WhatsApp atau telepon.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
