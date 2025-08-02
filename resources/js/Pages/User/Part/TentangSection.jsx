import { useState } from "react";
import { Users, BookOpen, Target, Heart } from "lucide-react";

export default function TentangSection() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative overflow-hidden">

            <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen backdrop-blur-sm shadow-xl rounded-2xl p-8 transition-all duration-500 ">
                {/* Header with icon */}
                <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Tentang Kami
                    </h2>
                </div>

                {/* Main content */}
                <div className="space-y-6">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Blog ini adalah tempat berbagi informasi dan pengetahuan
                        tentang berbagai topik menarik. Kami berkomitmen untuk
                        menyediakan konten yang berkualitas dan bermanfaat bagi
                        pembaca kami.
                    </p>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Kami percaya bahwa pengetahuan adalah kekuatan, dan
                        melalui blog ini, kami ingin memberdayakan pembaca
                        dengan informasi yang relevan dan berguna.
                    </p>

                    {/* Feature cards */}
                    <div className="grid md:grid-cols-3 gap-4 mt-8">
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700 transition-transform duration-300 hover:scale-105">
                            <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">
                                Konten Berkualitas
                            </h3>
                            <p className="text-sm text-blue-700 dark:text-blue-400">
                                Informasi yang akurat dan bermanfaat
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700 transition-transform duration-300 hover:scale-105">
                            <Target className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-2" />
                            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-1">
                                Fokus Pembaca
                            </h3>
                            <p className="text-sm text-purple-700 dark:text-purple-400">
                                Mengutamakan kebutuhan pembaca
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-4 rounded-xl border border-green-200 dark:border-green-700 transition-transform duration-300 hover:scale-105">
                            <Heart className="w-8 h-8 text-green-600 dark:text-green-400 mb-2" />
                            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-1">
                                Dengan Hati
                            </h3>
                            <p className="text-sm text-green-700 dark:text-green-400">
                                Dibuat dengan dedikasi tinggi
                            </p>
                        </div>
                    </div>

                    {/* Call to action */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                        <div className="relative">
                            <p className="text-lg font-medium mb-3">
                                Terima kasih telah mengunjungi blog kami!
                            </p>
                            <p className="text-blue-100">
                                Kami harap Anda menemukan artikel-artikel kami
                                bermanfaat dan menginspirasi.
                            </p>
                        </div>

                        {/* Animated decorative dots */}
                        <div className="absolute top-2 right-2 flex space-x-1">
                            <div
                                className={`w-2 h-2 bg-white/50 rounded-full transition-all duration-500 ${
                                    isHovered ? "animate-pulse" : ""
                                }`}
                            ></div>
                            <div
                                className={`w-2 h-2 bg-white/30 rounded-full transition-all duration-700 ${
                                    isHovered ? "animate-pulse" : ""
                                }`}
                            ></div>
                            <div
                                className={`w-2 h-2 bg-white/20 rounded-full transition-all duration-1000 ${
                                    isHovered ? "animate-pulse" : ""
                                }`}
                            ></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
