import React from "react";
import {
  ArrowRight,
  Star,
  Shield,
  Truck,
  HeadphonesIcon,
  Smartphone,
  Shirt,
  Home,
  Volleyball,
  Footprints,
  Sparkles,
  MessageCircle,
  MessageCircleCode,
  User,
  Mail,
  Phone
} from "lucide-react";
import { useNavigate } from "react-router-dom";
function FrontBelow() {
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    navigate(`/home/category/${category}`);
  };



  return (
    <div className="min-h-screen bg-white">

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the best shopping experience
              possible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FF735C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-[#FF735C]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Free Shipping*
              </h3>
              <p className="text-gray-600">Free delivery on orders over $50</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FF735C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#FF735C]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Secure Payment
              </h3>
              <p className="text-gray-600">
                Your transactions are always protected
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FF735C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-8 h-8 text-[#FF735C]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                We're here to help whenever you need
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FF735C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#FF735C]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Top Quality
              </h3>
              <p className="text-gray-600">
                Only the finest products make it to our store
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find exactly what you're looking for
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Smartphones",
                cat: "smartphones",
                image: "https://images.unsplash.com/photo-1719945421298-f03d3d80c3e1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                items: "500+ items",
                icon: Smartphone,
              },
              {
                name: "Fashion",
                cat: "womens-dresses",
                image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                items: "800+ items",
                icon: Shirt,
              },
              {
                name: "Home & Garden",
                cat: "home-decoration",
                image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                items: "300+ items",
                icon: Home,
              },
              {
                name: "Sports",
                cat: "sports-accessories",
                image: "https://images.unsplash.com/photo-1517591333073-96680dc97639?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                items: "200+ items",
                icon: Volleyball,
              },
              {
                name: "Shoes",
                cat: "mens-shoes",
                image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                items: "1000+ items",
                icon: Footprints,
              },
              {
                name: "Beauty",
                cat: "beauty",
                image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                items: "400+ items",
                icon: Sparkles,
              },
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  onClick={() => handleCategoryClick(category.cat)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={`${category.image}`}
                    alt={category.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                    <p className="text-orange-200">{category.items}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#FF735C]/5 to-orange-100/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                comment:
                  "Amazing quality products and super fast delivery! I'm a customer for life.",
                avatar: "https://images.unsplash.com/photo-1514489024785-d5ba8dfb2198?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Mike Chen",
                rating: 4,
                comment:
                  "The customer service is outstanding. They helped me find exactly what I needed.",
                avatar: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Emily Davis",
                rating: 3,
                comment:
                  "Great prices and the shopping experience is so smooth. Highly recommend!",
                avatar: "https://images.unsplash.com/photo-1538991383142-36c4edeaffde?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={`${testimonial.avatar}`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <div className="flex text-[#FF735C]">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FF735C]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover why we're the
            preferred choice for online shopping.
          </p>
          <button onClick={() => navigate("/home")} className="bg-white text-[#FF735C] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#FF735C] hover:text-white border-2 hover:border-black transition-colors duration-300 inline-flex items-center gap-2">
            Start Shopping Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
      <footer className="bg-gray-900 hidden md:block text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Company Info with Social Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#FF735C]">
                SketchyStore
              </h3>
              <p className="text-gray-300">
                Your trusted partner for quality products and exceptional
                shopping experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FF735C]/10 hover:bg-[#FF735C] rounded-full flex items-center justify-center transition-colors duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 text-[#FF735C] group-hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FF735C]/10 hover:bg-[#FF735C] rounded-full flex items-center justify-center transition-colors duration-300 group"
                >
                  <User className="w-5 h-5 text-[#FF735C] group-hover:text-white" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FF735C]/10 hover:bg-[#FF735C] rounded-full flex items-center justify-center transition-colors duration-300 group"
                >
                  <MessageCircleCode className="w-5 h-5 text-[#FF735C] group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#FF735C]">
                Stay Connected
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#FF735C]" />
                  <span className="text-gray-300">support@sketchystore.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#FF735C]" />
                  <span className="text-gray-300">+91 XXXX XXXX</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-4">
                <h5 className="text-sm font-semibold text-white mb-2">
                  Subscribe for updates
                </h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-[#FF735C] text-white"
                  />
                  <button className="px-4 py-2 bg-[#FF735C] hover:bg-[#e55a42] rounded-r-lg transition-colors duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-0">
          </div> 
        </div>
      </footer>
    </div>
  );
}

export default FrontBelow;
