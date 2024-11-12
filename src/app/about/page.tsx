
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Users,
  Target
} from "lucide-react";
import { Footer, Navbar } from "@/components/navigation";
import HeroImage from "@/assets/image/about_banner.png";
import AnotherImage from "@/assets/image/futuristic_ai.png";

export default function AboutUs() {
  const achievements = [
    {
      year: "2024",
      title: "Platform Launch",
      description:
        "Successfully launched our tech education platform reaching 10,000+ users in the first month.",
    },
    {
      year: "2024",
      title: "Community Growth",
      description:
        "Built a thriving community of 50,000+ tech enthusiasts and developers.",
    },
    {
      year: "2024",
      title: "Innovation Award",
      description:
        "Received the Tech Innovation of the Year award for our unique approach to collaborative learning.",
    },
  ];

//   const techStack = [
//     "React",
//     "Next.js",
//     "TypeScript",
//     "Node.js",
//     "Python",
//     "TensorFlow",
//     "AWS",
//     "Docker",
//     "Kubernetes",
//     "GraphQL",
//     "PostgreSQL",
//     "Redis",
//   ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Blur Effects */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-purple-500 opacity-30 blur-[128px]" />
        <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-500 opacity-30 blur-[128px]" />
        <div className="absolute bottom-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500 opacity-30 blur-[128px]" />
      </div>

      <div className="relative">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={HeroImage}
              alt="Hero background"
              fill
              className="object-cover opacity-50"
            />
          </div>
          <h1 className="relative text-5xl md:text-7xl font-bold text-white text-center">
            About us
          </h1>
        </section>

        {/* Brief History Section */}
        <section className="container mx-auto lg:px-10 px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            A brief history
          </h2>
          <p className="text-purple-100 text-lg text-center max-w-3xl mx-auto">
            CodeCraft was founded in 2024 with the vision of creating a vibrant
            community for tech enthusiasts. Inspired by the rapid advancements
            in technology and the growing demand for accessible and engaging
            tech experiences, our founders set out to build a platform that
            would connect people with the latest innovations.
          </p>
        </section>

        {/* Vision Section */}
        <section className="container mx-auto lg:px-10 px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative mx-auto h-[400px] rounded-lg overflow-hidden">
              <Image
                src={AnotherImage}
                alt="Vision illustration"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Vision
              </h2>
              <p className="text-purple-100 text-lg">
                Our vision is to be the leading global platform for tech
                enthusiasts, empowering individuals and communities through
                technology. We aim to create a world where everyone has the
                opportunity to explore, learn, and thrive in the digital age.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-purple-900/30 border-purple-700/50">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <Target className="w-6 h-6 text-purple-400" />
                    <span className="text-purple-100">Mission-driven</span>
                  </CardContent>
                </Card>
                <Card className="bg-purple-900/30 border-purple-700/50">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <Users className="w-6 h-6 text-purple-400" />
                    <span className="text-purple-100">Community-first</span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="container mx-auto lg:px-10 px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="bg-purple-900/30 border-purple-700/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Badge
                        variant="outline"
                        className="text-purple-200 border-purple-500"
                      >
                        {achievement.year}
                      </Badge>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-purple-100">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section
        <section className="container mx-auto lg:px-10 px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <Card
                key={index}
                className="bg-purple-900/30 border-purple-700/50"
              >
                <CardContent className="p-4 flex items-center justify-center">
                  <span className="text-purple-100">{tech}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}

        {/* FAQ Section */}
        <section className="container mx-auto lg:px-10 px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-purple-700/50">
                <AccordionTrigger className="text-white hover:text-purple-200">
                  What makes CodeCraft different?
                </AccordionTrigger>
                <AccordionContent className="text-purple-100">
                  {`We combine cutting-edge technology with a community-driven
                  approach, creating a unique learning environment that adapts
                  to each individual's needs while fostering collaboration and
                  growth.`}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-purple-700/50">
                <AccordionTrigger className="text-white hover:text-purple-200">
                  How can I join the community?
                </AccordionTrigger>
                <AccordionContent className="text-purple-100">
                  {`Simply sign up for a free account to get started. You'll
                  immediately gain access to our community forums, basic
                  learning resources, and the ability to connect with other
                  members.`}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-purple-700/50">
                <AccordionTrigger className="text-white hover:text-purple-200">
                  Do you offer certifications?
                </AccordionTrigger>
                <AccordionContent className="text-purple-100">
                  Yes, we offer industry-recognized certifications upon
                  completion of our structured learning paths. These
                  certifications are designed to validate your skills and
                  knowledge in specific technology areas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
