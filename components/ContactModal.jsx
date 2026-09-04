'use client'

import { useState } from 'react'

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Modal Trigger Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3 md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all button"
        >
          Conversar
        </button>
      </div>

      {/* Modal Background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-dark">Vamos Conversar?</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-gray-400 hover:text-dark transition"
              >
                ✕
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              Entre em contato conosco através de um desses canais:
            </p>

            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/dancicilio"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition button"
              >
                💼 LinkedIn
              </a>
              <a
                href={`https://wa.me/55${process.env.NEXT_PUBLIC_DAN_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700 transition button"
              >
                💬 Dan - WhatsApp
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_DAN_EMAIL}`}
                className="block w-full bg-red-600 text-white text-center py-3 rounded-lg font-bold hover:bg-red-700 transition button"
              >
                📧 Dan - Email
              </a>
              <a
                href={`https://wa.me/55${process.env.NEXT_PUBLIC_PRI_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700 transition button"
              >
                💬 Pri - WhatsApp
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_PRI_EMAIL}`}
                className="block w-full bg-red-600 text-white text-center py-3 rounded-lg font-bold hover:bg-red-700 transition button"
              >
                📧 Pri - Email
              </a>
              <a
                href="https://instagram.com/dancicilio"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-pink-600 text-white text-center py-3 rounded-lg font-bold hover:bg-pink-700 transition button"
              >
                📸 Instagram
              </a>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-6 bg-gray-200 text-dark py-3 rounded-lg font-bold hover:bg-gray-300 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
