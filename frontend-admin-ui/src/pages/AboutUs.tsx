export default function AboutUs() {
  return (
    <>

      {/* HERO */}
      <section className="bg-[#e8897f] text-center py-20">
        <p className="text-sm mb-2">○ About Us</p>
        <h1 className="text-3xl md:text-4xl font-bold">
          Building a mental health <br />
          platform that just – <span className="italic">gets it</span>
        </h1>
      </section>

      {/* STORY */}
      <section className="bg-[#e7e2d9] py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            The Story of <span className="italic">Oppam</span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Once upon a time in Kasaragod, there were two friends...
            (Replace with your real content)
          </p>

          <button className="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm">
            Read More
          </button>
        </div>

        {/* IMAGE */}
        <img
          src="/images/story.png"
          alt="story"
          className="w-full max-w-md mx-auto"
        />
      </section>

      {/* WHY OPPAM */}
      <section className="bg-[#e7e2d9] px-6 md:px-20 pb-16">
        <h2 className="text-center text-2xl font-bold mb-10">
          Why <span className="italic">Oppam</span> Matters
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "The Mental Health Crisis",
            "Barriers to Seeking Help",
            "A System That Falls Short",
          ].map((title, i) => (
            <div
              key={i}
              className="bg-green-500 text-white p-6 rounded-xl shadow"
            >
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm">
                Short description about this section goes here.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE'RE CHANGING */}
      <section className="bg-[#e7e2d9] px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <img
          src="/images/illustration.png"
          alt="change"
          className="w-64 mx-auto"
        />

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            What We’re <span className="italic">Changing</span>
          </h2>

          <ul className="space-y-6 text-sm">
            <li>
              <strong>Affordable Therapy</strong>
              <p>Quality care within reach</p>
            </li>
            <li>
              <strong>Personalized Matching</strong>
              <p>Therapists tailored to you</p>
            </li>
            <li>
              <strong>Flexibility & Choice</strong>
              <p>Switch anytime</p>
            </li>
            <li>
              <strong>24/7 Support</strong>
              <p>Always available</p>
            </li>
          </ul>
        </div>
      </section>

      {/* CHANGE MAKERS */}
      <section className="bg-[#d9d9d9] py-16 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-12">
          Our <span className="italic">Change Makers</span>
        </h2>

        <div className="space-y-12">

          {/* PERSON 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/images/person1.png" className="w-60 mx-auto" />

            <div>
              <h3 className="font-semibold">Brahm Hameez</h3>
              <p className="text-sm text-gray-600 mb-2">Co-Founder & CEO</p>
              <p className="text-sm text-gray-700">

                Engineer-Turned-Growth Marketer | Problem Solver <br></br><br></br>
OPPAM wasn’t just an idea for Hawaz : it was a realization. When he struggled to find the kind of support he needed, he couldn’t shake the thought: If things need to change, why not start with me? Instead of waiting for a better system, he decided to build one. That’s how OPPAM came to life. With a mission to make therapy accessible, and available in vernacular languages so that no one feels unheard. He is the kind of person who doesn’t let an idea stay an idea. Once something sparks in his mind, he’ll push, test, and build until it becomes real. And that’s exactly what he’s doing with OPPAM: turning it into one of India’s leading mental health platforms, available 24/7 for those who need it most.
              </p>
            </div>
          </div>

          <hr />

          {/* PERSON 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-semibold">Abdullah Kuril</h3>
              <p className="text-sm text-gray-600 mb-2">Co-Founder & CTO</p>
              <p className="text-sm text-gray-700">
Marketing Strategist | The Guy Who Asks the Tough Questions <br></br><br></br>
Abdullah is an engineering dropout turned entrepreneur, he runs an educational startup and knows what it takes to build something from the ground up. At OPPAM, he’s the one who asks the questions no one else does, plays devil’s advocate when needed, and pushes ideas until they’re not just good..but great. With a sharp eye for strategy and a mind that never settles, Abdullah is shaping how OPPAM reaches people, making sure mental health support isn’t just available but actually connects. If there’s a better way to do something, he’ll find it. And if no one’s asking the right questions, he will.              </p>
            </div>

            <img src="/images/person2.png" className="w-60 mx-auto" />
          </div>

          <hr />

          {/* PERSON 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/images/person3.png" className="w-60 mx-auto" />

            <div>
              <h3 className="font-semibold">Mubashira Rahman</h3>
              <p className="text-sm text-gray-600 mb-2">Co-Founder & COO</p>
              <p className="text-sm text-gray-700">
Affirmative Social Psychologist | Systems Thinker<br></br><br></br>
Mubashira is a therapist and an overthinker- so naturally, she overthinks every possible way to make mental health support actually work for people. With experience working with diverse clients and building a community with a vision, she’s on a mission to create a culture that makes care accessible, inclusive, and stigma-free. At OPPAM, she’s the one structuring chaos and shaping a culture where both the team and the community grow together. Whether it’s fine-tuning operations or making sure every person who reaches out feels heard, she’s always figuring out how this can be better and then making it happen.              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e7e2d9] py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Welcome to The 1% – Let’s Make Waves!
        </h2>
        <p className="text-gray-600 mb-6">
          We’re building a movement. Join us.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-full">
          Join Us →
        </button>
      </section>

    </>
  );
}