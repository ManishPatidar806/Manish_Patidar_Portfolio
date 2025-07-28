import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manishpatidar1180@gmail.com",
      href: "mailto:manishpatidar1180@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6266209364",
      href: "tel:+91 6266209364",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pithampur, Madhya Pradesh",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ManishPatidar806",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/manishpatidar806/",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/alexjohnson",
      color: "hover:text-blue-300",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's <span className="text-blue-accent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities or working on
                interesting projects. Feel free to reach out through any of the
                channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card
                    key={info.label}
                    className="card-portfolio group cursor-pointer"
                    onClick={() =>
                      info.href !== "#" && window.open(info.href, "_blank")
                    }
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="p-3 bg-blue-accent/10 rounded-lg group-hover:bg-blue-accent/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-blue-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {info.label}
                        </p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-blue-accent/10 rounded-lg hover:bg-blue-accent/20 transition-all duration-300 hover:scale-110 ${social.color}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-portfolio">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Manish Patidar"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="manishpatidar1180@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-hero w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
