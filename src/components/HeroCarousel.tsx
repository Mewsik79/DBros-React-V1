import React, { useState, useEffect } from 'react'
    import { ChevronLeft, ChevronRight } from 'lucide-react'

    const images = [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop'
    ]

    export default function HeroCarousel() {
      const [currentIndex, setCurrentIndex] = useState(0)

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 20000)
        return () => clearInterval(interval)
      }, [])

      const goToSlide = (index) => {
        setCurrentIndex(index)
      }

      return (
        <section className="relative h-[600px]">
          <div className="absolute inset-0 bg-black/30"></div>
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Building Connections, One Mission at a Time
            </h1>
            <p className="text-xl mb-8">
              Join DECKBROS—A Community for Men Built Around Shared Activities and Lasting Friendships
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 px-8 py-3 rounded hover:bg-blue-700 hover:scale-105 transition-transform">
                Join Now
              </button>
              <button className="bg-transparent border-2 border-white px-8 py-3 rounded hover:bg-white hover:text-black hover:scale-105 transition-transform">
                Explore Missions
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80"
          >
            <ChevronRight size={32} />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              ></button>
            ))}
          </div>
        </section>
      )
    }
