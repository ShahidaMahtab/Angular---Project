import { Component } from '@angular/core';

@Component({
  selector: 'app-we-do',
  templateUrl: './we-do.component.html',
  styleUrls: ['./we-do.component.scss'],
})
export class WeDoComponent {
  accordionData = [
    {
      active: true,
      name: ` PHOTOGRAPHY`,
      icon: 'expand',
      content: `Photography isn't merely about capturing moments; it's about freezing time, preserving memories, and immortalizing emotions. It's an art form that transcends the ordinary, transforming fleeting instants into enduring treasures. At our company, we recognize the profound influence that photography holds in shaping our perception of the world and cherishing the beauty that surrounds us.Our approach to photography is rooted in a deep appreciation for the craft and a commitment to storytelling. We understand that behind every photograph lies a narrative waiting to be unveiled—a story of love, adventure, triumph, or serenity. Our team of dedicated photographers possesses not only technical expertise but also a keen eye for detail and a passion for storytelling. Whether it's capturing the majestic grandeur of nature, the tender intimacy of a family moment, or the vibrant energy of a bustling event, we strive to encapsulate the essence of each subject in every frame.Beyond mere aesthetics, our photographs serve as windows to the soul, inviting viewers to connect with the emotions and experiences captured within. With a blend of artistry, technique, and intuition, we aim to evoke a myriad of emotions—joy, nostalgia, wonder, or contemplation—through our imagery. Whether you're seeking to commemorate a special occasion, promote your brand, or convey a powerful message, our photography services are tailored to meet your unique needs and exceed your expectations.From conceptualization to execution, we collaborate closely with our clients to understand their vision, goals, and aspirations, ensuring that every photograph we produce reflects their unique identity and resonates with their target audience. Whether you're embarking on a personal journey or charting the course for your business, let our photographs be the visual testament to your story, capturing the moments that matter most and leaving a lasting impression for generations to come.`,
      customStyle: {
        background: 'white',
        'border-radius': '4px',
      },
    },
    {
      active: false,
      name: 'CREATIVITY',
      icon: 'desktop',
      content: `Creativity is the lifeblood of innovation, the spark that ignites imagination, and the driving force behind progress. It's the ability to see the world not as it is, but as it could be—to break free from the constraints of convention and explore new possibilities. At our company, we embrace creativity as a guiding principle, infusing every aspect of our work with innovation, originality, and passion.Our approach to creativity is rooted in a deep appreciation for the power of imagination and the transformative potential of ideas. We believe that creativity isn't a gift reserved for the few but a skill that can be nurtured, cultivated, and unleashed in everyone. Whether it's designing a captivating logo, crafting a compelling brand identity, or conceptualizing a groundbreaking marketing campaign, we empower our clients to harness their creative potential and bring their visions to life.Our team of creative professionals represents a diverse array of talents, perspectives, and disciplines, united by a shared commitment to excellence and a passion for pushing the boundaries of what's possible. From brainstorming sessions to final deliverables, we foster an environment of collaboration, experimentation, and innovation, where bold ideas are celebrated, and creative solutions are born.Beyond mere aesthetics, our creative endeavors are driven by a desire to make a meaningful impact—to inspire, educate, and provoke thought. Whether we're challenging the status quo, sparking conversations, or effecting positive change, our creativity serves as a catalyst for transformation, both within our organization and in the world at large. With our unwavering dedication to pushing the limits of creativity and innovation, we're committed to helping our clients achieve their goals and leave their mark on the world.`,
      customStyle: {
        background: 'white',
        'border-radius': '4px',
      },
    },
    {
      active: false,
      name: 'WEB DESIGN',
      icon: 'fund',
      content: `In today's digital landscape, a well-designed website is more than just a digital storefront—it's a dynamic platform for engagement, interaction, and connection. It's the first impression that visitors form of your brand, the gateway to your products and services, and the cornerstone of your online presence. At our company, we understand the pivotal role that web design plays in shaping the online experience and driving business success.Our approach to web design is rooted in a deep understanding of user behavior, design principles, and technological advancements. We believe that a successful website isn't just visually appealing—it's intuitive, responsive, and optimized for performance. From the layout and navigation to the color scheme and typography, every element of our designs is carefully crafted to enhance usability, captivate attention, and foster engagement.Our team of experienced designers combines technical expertise with creative flair to deliver websites that not only meet but exceed the expectations of our clients and their target audience. Whether you're a small business looking to establish your online presence or a multinational corporation seeking to revamp your digital strategy, we have the knowledge, skills, and resources to bring your vision to life.Beyond aesthetics, our web designs are driven by a commitment to results—to generating leads, driving conversions, and maximizing ROI. We understand that a successful website isn't measured by its appearance alone but by its ability to achieve tangible business objectives. That's why we take a holistic approach to web design, incorporating SEO best practices, responsive design principles, and user-centered design methodologies to create websites that not only look great but also deliver measurable results.With our proven track record of delivering exceptional web design solutions for clients across a wide range of industries, you can trust us to help you achieve your online objectives and stay ahead of the competition. Whether you're launching a new website, redesigning an existing one, or seeking ongoing support and optimization, we're here to help you succeed in the digital world and achieve your business goals.`,
      customStyle: {
        background: 'white',
        'border-radius': '4px',
      },
    },
  ];
}
