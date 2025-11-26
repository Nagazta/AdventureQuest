const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">📚 Reading Quest</h3>
            <p className="text-amber-100">
              Making reading comprehension an exciting adventure for every Grade 3 learner.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                f
              </button>
              <button className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                ▶
              </button>
              <button className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                ✉
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-amber-100">
              <li className="hover:text-yellow-300 cursor-pointer">🏠 Home</li>
              <li className="hover:text-yellow-300 cursor-pointer">ℹ️ About Us</li>
              <li className="hover:text-yellow-300 cursor-pointer">⭐ Features</li>
              <li className="hover:text-yellow-300 cursor-pointer">❓ FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-amber-100">
              <li>📧 quest@readingadventure.com</li>
              <li>📱 Available 24/7</li>
              <li>🌍 English & Cebuano Support</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-700 text-center text-amber-200">
          <p>© 2024 Reading Quest. All rights reserved. | Privacy Policy | Terms of Service</p>
          <p className="mt-2 text-sm">Compliant with Data Privacy Act of 2012</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;