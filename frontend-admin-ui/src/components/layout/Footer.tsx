// import { NavLink } from "react-router-dom";
// import { Menu } from "lucide-react";


// export default function PublicFooter() {
//   return (
//     <footer className="bg-[#F4C430] mt-10">
      
//       <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">

//         {/* Services */}
//         <div>
//           <h3 className="font-semibold mb-3">Service</h3>
//           <ul className="space-y-2 text-sm">
//             <li>Individual Therapy</li>
//             <li>Couple Therapy</li>
//             <li>Follow Up Session</li>
//           </ul>
//         </div>

//         {/* Conditions */}
//         <div>
//           <h3 className="font-semibold mb-3">Conditions</h3>
//           <ul className="space-y-2 text-sm">
//             <li>Anxiety & Stress</li>
//             <li>Depression & Mood Disorder</li>
//             <li>Trauma & PTSD</li>
//             <li>Relationship Issues</li>
//             <li>Grief Counselling</li>
//             <li>Anger Management</li>
//             <li>Queer Affirmative Therapy</li>
//             <li>Work Stress & Burnout</li>
//             <li>Parenting & Child Behavioral Issues</li>
//           </ul>
//         </div>

//         {/*ParterShip Program*/}
//         <div>
//           <h3 className="font-semibold mb-3">About</h3>
//           <ul className="space-y-2 text-sm">
//             <li>Oppam Corporate</li>
//             <li>Oppam Campus</li>

//           </ul>
//           </div>

//         {/* About */}
//         <div>
//           <h3 className="font-semibold mb-3">About</h3>
//           <ul className="space-y-2 text-sm">
//             <li>Blog</li>
//             <li>Locations</li>
//             <li>Concern</li>
//             <li>Cancellation, Refund & Rescheduling Policy</li>
//             <li>Terms & Conditions</li>
//             <li>Privacy Policy</li>
//             <li>Minor Reporting Policy</li>
//             <li>Information & Security Policy</li>
//             <li>Clinical Report Release Policy</li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="font-semibold mb-3">Connect Us</h3>
//           <p className="text-sm">+91 85909 25353</p>
//           <p className="text-sm">help@oppam.me</p>
//           <p className="text-sm mt-2">Oppam Wellness Private Limited (Formerly Vishappco Private Limited), 3rd Floor, Multi Arcade, Mini Bypass Rd, Karaparamba, Kozhikode, Kerala 673010
//           </p>
//         </div>

//       </div>

//       {/* Bottom */}
//       <div className="text-center text-sm pb-6 px-4">
//         Oppam does not deal with medical emergencies.
//         <br />
//         © All rights reserved
//       </div>

//       {/* WhatsApp Floating Button */}
// <a
//   href="https://wa.me/918590925353"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl shadow-lg z-50"
// >
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-6 h-6"
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M20.52 3.48A11.8 11.8 0 0 0 12.02 0C5.4 0 .02 5.38.02 12c0 2.12.55 4.2 1.6 6.05L0 24l6.16-1.6A11.93 11.93 0 0 0 12.02 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.5-8.52zM12.02 21.8c-1.82 0-3.6-.5-5.15-1.45l-.37-.22-3.66.95.98-3.56-.24-.37A9.77 9.77 0 0 1 2.22 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.94 2.88a9.74 9.74 0 0 1 2.86 6.92c0 5.4-4.4 9.8-9.8 9.8zm5.4-7.3c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.57-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.48 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.48.7.3 1.24.47 1.67.6.7.22 1.34.2 1.84.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
//   </svg>
// </a>
//     </footer>
//   );
// }

// import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

// export default function PublicFooter() {
//   return (
//     <footer className="relative mt-16">

//       {/* Background Image */}
//       <div
//         className="h-[400px] bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/footer-bg.jpg')" // put your image in public folder
//         }}
//       />

//       {/* Yellow Overlay Section */}
//       <div className="absolute bottom-0 w-full bg-[#F4C430] py-8 px-6">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 items-center">


// <div>
//            <h3 className="font-semibold mb-3">Service</h3>
//            <ul className="space-y-2 text-sm">
//              <li>Individual Therapy</li>
//              <li>Couple Therapy</li>
//              <li>Follow Up Session</li>
//            </ul>
//          </div>

//           {/* Left Links */}
//           <div className="space-y-2 text-sm">
//              <h3 className="font-semibold mb-3">Conditions</h3>
//            <ul className="space-y-2 text-sm"></ul>
//             <p>Anxiety & Stress</p>
//             <p>Depression & Mood Disorder</p>
//             <p>Trauma & PTSD</p>
//             <p>Relationship Issues</p>
//             <p>Grief Counselling</p>
//             <p>Anger Management</p>
//             <p>Queer Affirmative Therapy</p>
//             <p>Work Stress & Burnout</p>
//             <p>Parenting & Child Behavioral Issues</p>
//           </div>

//            {/*ParterShip Program*/}
//          <div>
//            <h3 className="font-semibold mb-3">PartnerShip Program</h3>
//            <ul className="space-y-2 text-sm">
//              <li>Oppam Corporate</li>
//             <li>Oppam Campus</li>

//        </ul>
//            </div>

//           {/* Middle Links */}
//           <div className="space-y-2 text-sm">
//              <h3 className="font-semibold mb-3">About</h3>
//            <ul className="space-y-2 text-sm">
//            <li>Blog</li>
//             <li>Locations</li>
//             <li>Concern</li>
//             <li>Cancellation, Refund & Rescheduling Policy</li>
//             <li>Terms & Conditions</li>
//             <li>Privacy Policy</li>
//             <li>Minor Reporting Policy</li>
//             <li>Information & Security Policy</li>
//              <li>Clinical Report Release Policy</li>
//           </ul>
          
//           </div>

//           {/* Contact */}
//           <div className="space-y-2 text-sm">
//              <h3 className="font-semibold mb-3">Connect Us</h3>   
//                     <p className="text-sm">+91 85909 25353</p>
//           <p className="text-sm">help@oppam.me</p>
//           <p className="text-sm mt-2">Oppam Wellness Private Limited (Formerly Vishappco Private Limited), 3rd Floor, Multi Arcade, Mini Bypass Rd, Karaparamba, Kozhikode, Kerala 673010
//           </p>
        
//           </div>

//           {/* Right Section (Image + Hiring + Social) */}
//           <div className="flex items-center gap-4 justify-end">

//             {/* Team Image */}
//             <div className="relative">
//               <img src="/team.webp"
//                // src="/team.jpg"   // put image in public folder
//                 alt="team"
//                 className="w-80 h-60 object-cover rounded-md"
//               />

//               {/* Hiring Tag */}
//               <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-1 rounded">
//                 We are hiring
//               </span>
//             </div>

//             {/* Social Icons */}
//             <div className="flex gap-3 text-black text-lg">
//               <FaInstagram className="cursor-pointer hover:scale-110 transition" />
//               <FaFacebook className="cursor-pointer hover:scale-110 transition" />
//               <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Bottom Text */}
//       <div className="bg-[#F4C430] text-center text-sm py-4">
//         Oppam does not deal with medical emergencies. © All rights reserved
//       </div>

//     </footer>
//   );
// }






// import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

// export default function PublicFooter() {
//   return (
//     <footer className="relative mt-16">
//       {/* Background Image */}
//       <div
//         className="h-[500px] bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/footer-bg.jpg')", // Replace with your image path
//         }}
//       />

//       {/* Yellow Overlay Section */}
//       <div className="absolute bottom-0 w-full bg-[#F4C430] py-8 px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Main Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
//             {/* Service Column */}
//             <div>
//               <h3 className="font-semibold text-gray-800 mb-3">Service</h3>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li>Individual Therapy</li>
//                 <li>Couple Therapy</li>
//                 <li>Follow Up Session</li>
//               </ul>
//             </div>

//             {/* Conditions Column */}
//             <div>
//               <h3 className="font-semibold text-gray-800 mb-3">Conditions</h3>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li>Anxiety & Stress</li>
//                 <li>Depression & Mood Disorder</li>
//                 <li>Trauma & PTSD</li>
//                 <li>Relationship Issues</li>
//                 <li>Grief Counselling</li>
//                 <li>Anger Management</li>
//                 <li>Queer Affirmative Therapy</li>
//                 <li>Work Stress & Burnout</li>
//                 <li>Parenting & Child Behavioral Issues</li>
//               </ul>
//             </div>

//             {/* Partnership Programs Column */}
//             <div>
//               <h3 className="font-semibold text-gray-800 mb-3">Partnership Programs</h3>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li>Oppam Corporate</li>
//                 <li>Oppam Campus</li>
//               </ul>
//             </div>

//             {/* About Column */}
//             <div>
//               <h3 className="font-semibold text-gray-800 mb-3">About</h3>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li>Blog</li>
//                 <li>Locations</li>
//                 <li>Concern</li>
//                 <li>Cancellation, Refund & Rescheduling Policy</li>
//                 <li>Terms & Conditions</li>
//                 <li>Privacy Policy</li>
//                 <li>Minor Reporting Policy</li>
//                 <li>Information & Security Policy</li>
//                 <li>Clinical Report Release Policy</li>
//               </ul>
//             </div>

//             {/* Connect Us Column */}
//             <div>
//               <h3 className="font-semibold text-gray-800 mb-3">Connect Us</h3>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li>+91 85909 25353</li>
//                 <li>help@oppam.me</li>
//                 <li className="mt-2">
//                   Oppam Wellness Private Limited<br />
//                   (Formerly Vishappco Private Limited),<br />
//                   3rd Floor, Multi Arcade, Mini Bypass Rd,<br />
//                   Karaparamba, Kozhikode, Kerala 673010
//                 </li>
//               </ul>
//             </div>

//             {/* Right Section - Team Image + Hiring + Social */}
//             <div className="flex flex-col items-start gap-4">
//               <div className="relative">
//                 <img
//                   src="/team.webp" // Replace with your image path
//                   alt="team"
//                   className="w-64 h-48 object-cover rounded-md shadow-md"
//                 />
//                 <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-1 rounded">
//                   We're Hiring
//                 </span>
//               </div>
//               <div className="flex gap-4">
//                 <FaInstagram className="text-2xl text-gray-700 hover:text-black cursor-pointer transition" />
//                 <FaFacebook className="text-2xl text-gray-700 hover:text-black cursor-pointer transition" />
//                 <FaLinkedin className="text-2xl text-gray-700 hover:text-black cursor-pointer transition" />
//               </div>
//               <p className="text-sm font-medium text-gray-700">Join community</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Text */}
//       <div className="bg-[#F4C430] text-center text-sm py-4 text-gray-700 border-t border-yellow-600/20">
//         Oppam does not deal with medical or psychological emergencies. We are not designed to offer support in crisis situations. All rights are reserved on oppam.me organization.
//       </div>
//     </footer>
//   );
// }



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