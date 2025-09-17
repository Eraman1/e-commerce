import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-12">
            <div className="w-full mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
                {/* Brand Section */}
                <div>
                    <h2 className="text-white text-xl font-bold mb-3">MyShop</h2>
                    <p className="text-sm">
                        Your one-stop shop for all baby products. Safe, reliable, and
                        affordable – because your baby deserves the best.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-white transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart" className="hover:text-white transition">
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-white transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Customer Support</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/faq" className="hover:text-white transition">
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link href="/shipping" className="hover:text-white transition">
                                Shipping & Returns
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:text-white transition">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="hover:text-white transition">
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                        <Link href="https://facebook.com" target="_blank">
                            <Facebook className="hover:text-blue-500 transition" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank">
                            <Instagram className="hover:text-pink-500 transition" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank">
                            <Twitter className="hover:text-sky-400 transition" />
                        </Link>
                        <Link href="mailto:support@myshop.com">
                            <Mail className="hover:text-green-400 transition" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
                © {new Date().getFullYear()} MyShop. All Rights Reserved.
            </div>
        </footer>
    );
}
