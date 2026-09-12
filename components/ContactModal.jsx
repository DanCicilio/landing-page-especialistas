'use client'

import { content } from '@/lib/i18n/content'

export function ContactModal({ locale, isOpen, setIsOpen }) {
  const t = content[locale].contactModal

  return (
    <>
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3 md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all button"
        >
          {t.chatTrigger}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-dark">{t.title}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-gray-400 hover:text-dark transition"
              >
                ✕
              </button>
            </div>

            <p className="text-gray-600 mb-6">{t.description}</p>

            <div className="space-y-3">
              <a href="https://linkedin.com/in/dancicilio" target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition button">{t.links.linkedin}</a>
              <a href={`https://wa.me/55${process.env.NEXT_PUBLIC_DAN_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700 transition button">{t.links.danWhatsapp}</a>
              <a href={`mailto:${process.env.NEXT_PUBLIC_DAN_EMAIL}`} className="block w-full bg-red-600 text-white text-center py-3 rounded-lg font-bold hover:bg-red-700 transition button">{t.links.danEmail}</a>
              <a href={`https://wa.me/55${process.env.NEXT_PUBLIC_PRI_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700 transition button">{t.links.priWhatsapp}</a>
              <a href={`mailto:${process.env.NEXT_PUBLIC_PRI_EMAIL}`} className="block w-full bg-red-600 text-white text-center py-3 rounded-lg font-bold hover:bg-red-700 transition button">{t.links.priEmail}</a>
              <a href="https://instagram.com/dancicilio" target="_blank" rel="noopener noreferrer" className="block w-full bg-pink-600 text-white text-center py-3 rounded-lg font-bold hover:bg-pink-700 transition button">{t.links.instagram}</a>
            </div>

            <button onClick={() => setIsOpen(false)} className="w-full mt-6 bg-gray-200 text-dark py-3 rounded-lg font-bold hover:bg-gray-300 transition">{t.closeLabel}</button>
          </div>
        </div>
      )}
    </>
  )
}
