import React from 'react'
    import { Target, Shield, Star } from 'lucide-react'

    export default function FeaturesSection() {
      const features = [
        {
          icon: <Target size={48} className="text-blue-600" />,
          title: "Missions",
          description: "Plan or join activities aligned with your interests."
        },
        {
          icon: <Star size={48} className="text-blue-600" />,
          title: "Reputation System",
          description: "Earn credibility through ratings and reviews."
        },
        {
          icon: <Shield size={48} className="text-blue-600" />,
          title: "Safety & Privacy",
          description: "Secure ID verification and emergency contact options."
        }
      ]

      return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Why Join DECKBROS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    }
