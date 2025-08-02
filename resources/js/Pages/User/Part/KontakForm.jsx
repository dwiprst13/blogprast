import { useState } from "react";
import { Head, useForm } from "@inertiajs/react";

export default function KontakForm() {
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

            <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Mari Berkolaborasi
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Punya pertanyaan, ide proyek, atau ingin
                            berkolaborasi? Saya siap membantu dan berdiskusi
                            dengan Anda.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Kirim Pesan
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Isi form di bawah ini dan saya akan
                                        merespon secepatnya.
                                    </p>
                                </div>

                                {/* Success Message */}
                                {isSubmitted && (
                                    <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg">
                                        <div className="flex items-center">
                                            <svg
                                                className="w-5 h-5 text-green-600 dark:text-green-400 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <p className="text-green-800 dark:text-green-200 font-medium">
                                                Pesan berhasil dikirim! Terima
                                                kasih atas pesan Anda.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={submit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name Input */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Nama Lengkap *
                                            </label>
                                            <input
                                                type="text"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white"
                                                placeholder="Masukkan nama lengkap Anda"
                                                required
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email Input */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white"
                                                placeholder="email@example.com"
                                                required
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Subject Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Subjek *
                                        </label>
                                        <input
                                            type="text"
                                            value={data.subject}
                                            onChange={(e) =>
                                                setData(
                                                    "subject",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white"
                                            placeholder="Topik pesan Anda"
                                            required
                                        />
                                        {errors.subject && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.subject}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message Textarea */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Pesan *
                                        </label>
                                        <textarea
                                            rows={6}
                                            value={data.message}
                                            onChange={(e) =>
                                                setData(
                                                    "message",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white resize-none"
                                            placeholder="Tulis pesan Anda di sini..."
                                            required
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        {processing ? (
                                            <>
                                                <svg
                                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Mengirim...
                                            </>
                                        ) : (
                                            <>
                                                Kirim Pesan
                                                <svg
                                                    className="w-5 h-5 ml-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                    />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info & Social */}
                        <div className="space-y-8">
                            {/* Contact Information */}
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
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
                                            <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-200">
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
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
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
                                    Saya biasanya merespon dalam 24 jam. Untuk urusan mendesak, silakan hubungi via
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
