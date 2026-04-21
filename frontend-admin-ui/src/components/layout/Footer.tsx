import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function PublicFooter() {
  return (
    <footer className="relative mt-0 bg-[#F4C430]">
      {/* No separate background image – the protruding image from About covers the top part */}
      {/* Negative margin-top to pull the footer up and make the lower half of the image visible */}
      <div className="relative" style={{ marginTop: '-50px' }}>
        {/* Main content wrapper – adjust padding to avoid overlapping text with image */}
        <div className="pt-32 pb-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {/* Service Column */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Service</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Individual Therapy</li>
                  <li>Couple Therapy</li>
                  <li>Follow Up Session</li>
                </ul>
              </div>

              {/* Conditions Column */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Conditions</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Anxiety & Stress</li>
                  <li>Depression & Mood Disorder</li>
                  <li>Trauma & PTSD</li>
                  <li>Relationship Issues</li>
                  <li>Grief Counselling</li>
                  <li>Anger Management</li>
                  <li>Queer Affirmative Therapy</li>
                  <li>Work Stress & Burnout</li>
                  <li>Parenting & Child Behavioral Issues</li>
                </ul>
              </div>

              {/* Partnership Programs Column */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Partnership Programs</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Oppam Corporate</li>
                  <li>Oppam Campus</li>
                </ul>
              </div>

              {/* About Column */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">About</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Blog</li>
                  <li>Locations</li>
                  <li>Concern</li>
                  <li>Cancellation, Refund & Rescheduling Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Minor Reporting Policy</li>
                  <li>Information & Security Policy</li>
                  <li>Clinical Report Release Policy</li>
                </ul>
              </div>

              {/* Connect Us Column */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Connect Us</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>+91 85909 25353</li>
                  <li>help@oppam.me</li>
                  <li className="mt-2">
                    Oppam Wellness Private Limited<br />
                    (Formerly Vishappco Private Limited),<br />
                    3rd Floor, Multi Arcade, Mini Bypass Rd,<br />
                    Karaparamba, Kozhikode, Kerala 673010
                  </li>
                </ul>
              </div>

              {/* Right Section - Team Image + Hiring + Social */}
              <div className="flex flex-col items-start gap-4">
                <div className="relative">
                  <img
                    src="/team.webp"
                    alt="team"
                    className="w-64 h-48 object-cover rounded-md shadow-md"
                  />
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-1 rounded">
                    We're Hiring
                  </span>
                </div>
                <div className="flex gap-4">
                  <FaInstagram className="text-2xl text-gray-700 hover:text-black cursor-pointer transition" />
                  <FaFacebook className="text-2xl text-gray-700 hover:text-black cursor-pointer transition" />
                  <FaLinkedin className="text-2xl text-gray-700 hover:text-black cursor-pointer transition" />
                </div>
                <p className="text-sm font-medium text-gray-700">Join community</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm py-4 text-gray-700 border-t border-yellow-600/20 bg-[#F4C430]">
        Oppam does not deal with medical or psychological emergencies. We are not designed to offer support in crisis situations. All rights are reserved on oppam.me organization.
      </div>
    </footer>
  );
}