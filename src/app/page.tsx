"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { HelpCircle, Settings, Star, Twitter, Instagram, Youtube, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="small"
      background="none"
      cardStyle="glass-depth"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Cars", id: "hero" },
            { name: "Technology", id: "about" },
            { name: "Features", id: "feature" },
            { name: "Team", id: "team" }
          ]}
          brandName="F1 Demo"
          button={{
            text: "Experience F1",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience F1 Racing"
          description="Witness the pinnacle of motorsport with cutting-edge technology, incredible speed, and precision engineering that pushes the boundaries of what's possible on the track."
          tag="Formula 1 Demo"
          tagIcon={Zap}
          buttons={[
            { text: "Explore Cars", href: "feature" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763460182308-ibcyduna.jpg"
          imageAlt="Modern Formula 1 racing car"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Technology"
          description="Formula 1 represents the absolute pinnacle of automotive technology and engineering excellence. Every component, from the hybrid power units producing over 1000 horsepower to the advanced aerodynamics generating massive downforce, is designed to extract maximum performance while operating at the very limits of physics and human capability."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="F1 Car Features"
          description="Discover the advanced technology that makes Formula 1 cars the fastest racing machines on Earth"
          tag="Innovation"
          tagIcon={Settings}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Advanced Aerodynamics",
              description: "Complex wing systems and aerodynamic packages that generate massive downforce while minimizing drag, allowing cars to corner at incredible speeds.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763460186461-jd79x92f.jpg",
              imageAlt: "F1 car aerodynamic wings"
            },
            {
              id: "02",
              title: "Hybrid Power Unit",
              description: "1.6L V6 turbocharged engines combined with advanced energy recovery systems producing over 1000 horsepower with remarkable efficiency.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763460188207-ym5a0kjl.jpg",
              imageAlt: "Formula 1 hybrid engine"
            },
            {
              id: "03",
              title: "Real-time Telemetry",
              description: "Advanced data collection systems that monitor thousands of parameters in real-time, providing crucial information for performance optimization.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763460189354-metapuvm.jpg",
              imageAlt: "F1 telemetry dashboard"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="F1 Team"
          description="Meet the professionals who make Formula 1 racing possible"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Alex Hamilton",
              role: "Lead Driver",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763460191737-szdj29f7.jpg",
              imageAlt: "Alex Hamilton F1 driver"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Race Engineer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763460194971-lzvmo6kd.jpg",
              imageAlt: "Sarah Chen race engineer"
            },
            {
              id: "3",
              name: "Mike Rodriguez",
              role: "Chief Mechanic",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763460196551-f374uper.jpg",
              imageAlt: "Mike Rodriguez mechanic"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Racing Enthusiasts Love F1"
          description="Hear from fans and professionals who experience the thrill of Formula 1"
          tag="Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Racing Enthusiast",
              company: "Motorsport Club",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763460197957-qcxocft6.jpg",
              imageAlt: "Marcus Johnson",
              testimonial: "Formula 1 represents the ultimate in motorsport technology and excitement. Every race is a masterclass in precision and speed."
            },
            {
              id: "2",
              name: "Elena Vasquez",
              role: "Automotive Journalist",
              company: "Speed Magazine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763460201086-k8v8hbup.jpg",
              imageAlt: "Elena Vasquez",
              testimonial: "The engineering brilliance behind F1 cars is absolutely incredible. It's automotive technology at its finest."
            },
            {
              id: "3",
              name: "David Kim",
              role: "Former F1 Mechanic",
              company: "Racing Heritage",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763460202773-nazuap2s.jpg",
              imageAlt: "David Kim",
              testimonial: "Working on F1 cars taught me that perfection is the only acceptable standard. Every detail matters at this level."
            },
            {
              id: "4",
              name: "Sophie Laurent",
              role: "Racing Academy",
              company: "Professional Driver",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763460211226-pr61l9fh.jpg",
              imageAlt: "Sophie Laurent",
              testimonial: "F1 represents the pinnacle of racing. The skill, technology, and teamwork required is unmatched in any other sport."
            },
            {
              id: "5",
              name: "James Wilson",
              role: "F1 Commentator",
              company: "Sports Broadcasting",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763460212465-hc4fdpqc.jpg",
              imageAlt: "James Wilson",
              testimonial: "Every F1 race is a spectacle of human achievement and technological excellence. It never gets old."
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="F1 Questions Answered"
          description="Common questions about Formula 1 racing and technology"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763460213632-gihwc5yv.jpg"
          imageAlt="Formula 1 car technical view"
          mediaPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How fast do F1 cars go?",
              content: "Formula 1 cars can reach speeds of over 370 km/h (230 mph) on long straights. However, average race speeds are typically around 200-250 km/h due to corners and track configuration."
            },
            {
              id: "2",
              title: "What makes F1 engines so powerful?",
              content: "Modern F1 cars use 1.6L V6 turbocharged hybrid power units that combine traditional combustion with energy recovery systems (ERS), producing over 1000 horsepower total."
            },
            {
              id: "3",
              title: "How much do F1 cars cost?",
              content: "A complete F1 car costs approximately $10-15 million to build, with the engine alone costing around $10 million. Teams spend hundreds of millions annually on development."
            },
            {
              id: "4",
              title: "What is DRS in Formula 1?",
              content: "DRS (Drag Reduction System) is an adjustable rear wing element that reduces drag and increases straight-line speed. It can only be used in designated zones during qualifying and races when following another car closely."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="F1 Demo"
          copyrightText="© 2025 F1 Demo | Formula 1 Racing Experience"
          columns={[
            {
              title: "Racing",
              items: [
                { label: "Cars", href: "hero" },
                { label: "Technology", href: "about" },
                { label: "Features", href: "feature" }
              ]
            },
            {
              title: "Team",
              items: [
                { label: "Drivers", href: "team" },
                { label: "Engineers", href: "team" },
                { label: "Support", href: "team" }
              ]
            },
            {
              title: "Experience",
              items: [
                { label: "Testimonials", href: "testimonial" },
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com/f1",
              ariaLabel: "Follow F1 on Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/f1",
              ariaLabel: "Follow F1 on Instagram"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/f1",
              ariaLabel: "Watch F1 on YouTube"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}