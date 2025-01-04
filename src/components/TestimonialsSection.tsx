import React, { useState } from 'react'
    import { ChevronLeft, ChevronRight } from 'lucide-react'
    import { Star } from 'lucide-react'

    const testimonials = [
      {
        name: "John D.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        text: "DECKBROS has completely changed how I connect with other men. The missions are engaging and the community is supportive.",
        rating: 5
      },
      {
        name: "Michael S.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
        text: "I've made lifelong friends through DECKBROS. The platform is easy to use and the activities are well-organized.",
        rating: 5
      }
    ]

    export default function TestimonialsSection() {
      const [currentTestimonial, setCurrentTestimonial] = useState(0)

      return (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Hear from Our Early Members</h2>
            <div className="relative max-w-3xl mx-auto">
              <div className="text-center">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="text-lg mb-4">"{testimonials[currentTestimonial].text}"</p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400" />
                  ))}
                </div>
                <p className="font-bold">{testimonials[currentTestimonial].name}</p>
              </div>

              {/* Navigation */}
              <button
                onClick={() => setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={() => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        </section>
      )
    }
