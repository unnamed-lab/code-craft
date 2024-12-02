"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
// import { Countdown } from "./countdown"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Github, Twitter, Linkedin } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Footer, Navbar } from "@/components/navigation";
import HeroImage from "@/assets/image/futuristics_lady.png";
import { CountdownTimer } from "./countdown-timer";
import Sponsor1 from "@/assets/image/logo_1.png";
import Sponsor2 from "@/assets/image/logo_2.png";
import Sponsor3 from "@/assets/image/logo_3.png";
import RegistrationDialog from "./registration-dialog";
import AnuImage from "@/assets/image/anu.jpg"
import PraiseImage from "@/assets/image/praise.jpg"
import SamImage from "@/assets/image/samantha.jpg"
import CeeJayImage from "@/assets/image/ceejay.jpg"

export default function Component() {
  const speakers = [
    {
      name: "Adebayo S. Anuoluwa",
      title: "Full stack Engineer",
      image: AnuImage,
      social: {
        twitter: "https://twitter.com/unnamedcodes",
        github: "https://github.com/unnamed-lab",
        linkedin: "https://linkedin.com/in/mradebayo2018",
      },
    },
    {
      name: "Adibe C. Praise",
      title: "Product Designer",
      image: PraiseImage,
      social: {
        twitter: "https://twitter.com/unnamedcodes",
        github: "https://github.com/unnamed-lab",
        linkedin: "https://linkedin.com/in/mradebayo2018",
      },
    },
    {
      name: "Ojimadu B. Chinaza",
      title: "UI/UX Designer & Prioect Manager",
      image: SamImage,
      social: {
        twitter: "https://twitter.com/unnamedcodes",
        github: "https://github.com/unnamed-lab",
        linkedin: "https://linkedin.com/in/mradebayo2018",
      },
    },{
      name: "Okereafor O. Chijioke",
      title: "Frontend Developer",
      image: CeeJayImage,
      social: {
        twitter: "https://twitter.com/unnamedcodes",
        github: "https://github.com/unnamed-lab",
        linkedin: "https://linkedin.com/in/mradebayo2018",
      },
    },
  ];
  return (
    <div className="min-h-screen max-w-full overflow-hidden bg-[url('/placeholder.svg?height=2000&width=2000')] bg-cover bg-center">
      <div className="min-h-screen bg-gradient-to-br from-background/90 via-background/90 to-indigo-900/90 flex flex-col items-center">
        {/* Blur Effects */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full bg-purple-500 opacity-30 blur-[128px]" />
          <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-500 opacity-30 blur-[128px]" />
          <div className="absolute bottom-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500 opacity-30 blur-[128px]" />
        </div>

        <Navbar />

        {/* Hero Section */}
        <section className="container mx-auto md:px-10 px-4 py-10 md:py-7">
          <div className="grid md:grid-cols-2 gap-12 items-center  w-full lg:w-11/12 mx-auto justify-between">
            <div className="my-auto flex flex-col gap-5">
              <div className="space-y-2 flex flex-col gap-3">
                <h2 className="text-purple-200 text-lg lg:text-xl">
                  Empowering Innovation
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Leading the way in cutting-edge technology
                </h1>
              </div>
              <p className="text-purple-100 text-lg">
                Innovation is like a spark that starts a fire. It helps us move
                forward and create a better future. It makes us think in new
                ways and come up with new ideas. When we encourage innovation,
                we can do great things and help others.
              </p>
              <RegistrationDialog
                props={{
                  variant: "outline",
                  className:
                    "border-purple-600 py-6 hover:bg-purple-700 text-lg text-white md:w-[200px]",
                  title: "Register for free",
                }}
              />
            </div>
            <div className="relative overflow-hidden w-fit h-[300px] lg:h-[500px] items-center justify-center">
              <Image
                src={HeroImage}
                alt="VR Headset"
                width={500}
                height={500}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Countdown Timer Section */}
        <section className="container mx-auto md:px-10 px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Next Event Starts In
          </h2>
          <CountdownTimer targetDate="2024-12-31T23:59:59" />
        </section>

        {/* Speakers Carousel */}
        <section className="container mx-auto md:px-10 px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Featured Speakers
          </h2>
          <Carousel
            className="max-w-4xl mx-auto"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {speakers.map((speaker, index) => (
                <CarouselItem key={index}>
                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="relative w-48 h-48">
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {speaker.name}
                        </h3>
                        <p className="text-purple-200 mb-4">{speaker.title}</p>
                        <div className="flex justify-center md:justify-start space-x-4">
                          <Link
                            href={speaker.social.twitter}
                            className="text-purple-200 hover:text-white"
                          >
                            <Twitter className="w-5 h-5" />
                            <span className="sr-only">Twitter</span>
                          </Link>
                          <Link
                            href={speaker.social.github}
                            className="text-purple-200 hover:text-white"
                          >
                            <Github className="w-5 h-5" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                          <Link
                            href={speaker.social.linkedin}
                            className="text-purple-200 hover:text-white"
                          >
                            <Linkedin className="w-5 h-5" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white border-white hover:bg-white hover:text-purple-900" />
            <CarouselNext className="text-white border-white hover:bg-white hover:text-purple-900" />
          </Carousel>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto md:px-10 px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              We&apos;re passionate about making technology accessible and
              enjoyable for everyone.
            </h2>
            <p className="text-purple-100 text-lg text-center">
              We aim to bridge the gap between tech enthusiasts and the latest
              innovations. Our mission is to empower individuals and communities
              through technology by providing a platform for discovery,
              learning, and connection.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto md:px-10 px-4 py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation",
                description:
                  "We embrace innovation and are constantly seeking new ways to enhance the tech experience.",
              },
              {
                title: "Community",
                description:
                  "We believe in the power of community and strive to create a welcoming and inclusive environment for all.",
              },
              {
                title: "Accessibility",
                description:
                  "We are committed to making technology accessible to everyone, regardless of their technical background.",
              },
              {
                title: "Quality",
                description:
                  "We prioritize delivering high-quality products and services that exceed our customers' expectations.",
              },
              {
                title: "Trust",
                description:
                  "We value trust and transparency in all our interactions.",
              },
            ].map((value, index) => (
              <Card key={index} className="bg-purple-900/50 border-purple-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-purple-100">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-white text-xl">Contact us:</h3>
              <p className="text-purple-100">codecraft3@gmail.com</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-white text-xl">Sponsors:</h3>
              <div className="flex justify-center items-center gap-7 space-x-8">
                <Image src={Sponsor1} alt="Sponsor 1" width={120} height={40} />
                <Image src={Sponsor2} alt="Sponsor 2" width={120} height={40} />
                <Image src={Sponsor3} alt="Sponsor 3" width={60} height={40} />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
