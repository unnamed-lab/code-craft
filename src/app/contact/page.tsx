"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Footer, Navbar } from "@/components/navigation";
import HeroImage from "@/assets/image/about_banner.png";

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Blur Effects */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-purple-500 opacity-30 blur-[128px]" />
        <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-500 opacity-30 blur-[128px]" />
        <div className="absolute bottom-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500 opacity-30 blur-[128px]" />
      </div>

      <div className="relative">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={HeroImage}
              alt="Contact hero background"
              fill
              className="object-cover opacity-50"
            />
          </div>
          <h1 className="relative text-5xl md:text-7xl font-bold text-white text-center">
            Contact Us
          </h1>
        </section>

        {/* Contact Form and Info Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-purple-900/30 border-purple-700/50">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-purple-200 mb-1"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-purple-900/50 border-purple-700 text-white placeholder-purple-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-purple-200 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-purple-900/50 border-purple-700 text-white placeholder-purple-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-purple-200 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="bg-purple-900/50 border-purple-700 text-white placeholder-purple-300"
                      rows={4}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <Card className="bg-purple-900/30 border-purple-700/50">
                <CardContent className="p-6 flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Address</h3>
                    <p className="text-purple-200">
                      123 Tech Street, Innovation City, TC 12345
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-purple-900/30 border-purple-700/50">
                <CardContent className="p-6 flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-purple-200">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-purple-900/30 border-purple-700/50">
                <CardContent className="p-6 flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-purple-200">contact@codecraft.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-2xl font-bold text-white mb-6">Find Us</h2>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15888.636947508134!2d6.9861481!3d5.3926901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10425f066c658699%3A0xbc7453a96a27c8f5!2sFederal%20University%20of%20Technology%20-%20Owerri!5e0!3m2!1sen!2sch!4v1733105844117!5m2!1sen!2sch"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={undefined}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
