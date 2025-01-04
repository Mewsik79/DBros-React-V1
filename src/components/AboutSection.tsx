import React from 'react'

    export default function AboutSection() {
      return (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">What is DECKBROS?</h2>
              <p className="text-lg mb-8">
                DECKBROS is a platform designed to foster meaningful connections among men through shared activities and experiences. We believe in the power of connection, collaboration, and personal growth. Our mission is to create a space where men can come together, share their skills, and build lasting friendships.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
                alt="About DECKBROS"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      )
    }
