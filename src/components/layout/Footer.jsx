
// Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Bespoke Bundles</h3>
            <p className="text-indigo-200">Your personalized gift solution</p>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/build" className="text-indigo-200 hover:text-white">Create Bundle</a></li>
              <li><a href="/about" className="text-indigo-200 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-indigo-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Contact Us</h4>
            <p className="text-indigo-200">Email: hello@bespokebundles.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-800 text-center text-indigo-200">
          <p>© 2024 Bespoke Bundles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer