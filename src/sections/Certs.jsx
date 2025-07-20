import Buttons from "../components/buttons";
import { FaArrowDown } from "react-icons/fa";
import rwd from "../img/achievement/responsiveWebDesign.png";

const Achievement = () => {
    return (
        <div className="w-full ">
  {/* Achievement Section */}
  <div className="relative py-20 px-4 lg:px-8 overflow-hidden ovo-regular">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
      My Little Achievements
      </h1>
      <p className="text-xl lg:text-2xl  max-w-4xl mx-auto">
      "Milestones That Reflect My Journey"
      </p>
    </div>
  </div>

  {/* Process Timeline */}
  <div className="max-w-7xl mx-auto py-16 px-4 lg:px-8">
    <div className="relative">
      {/* Timeline Line */}
      {/* <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-300 to-pink-300 -ml-px"></div> */}

      {/* Achievement One */}
      <div className="flex flex-col lg:flex-row items-center mb-24 lg:mb-32">
        <div className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0 order-1 lg:order-1">
          <div className=" p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 text-purple-600 font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                1
              </div>
              <h3 className="text-2xl font-bold">FreeCodeCamp - Responsive Web Design 2022</h3>
            </div>
            <p className=" mb-4">
              Projects Built:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Survey Form</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Tribute Page</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Technical Documentation Page</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Product Landing Page</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Personal Portfolio Website</span>
              </li>
            </ul>
            <p className="">
              <strong>Download Certification:</strong> <Buttons color={"border shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]"} textColor={""} icons={<FaArrowDown  className="w-5 h-5 mt-1 "/>} text={"Document"} doc={rwd}/>
            </p>

          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-16 order-2 lg:order-2">
        </div>
      </div>

       {/* Achievement Two */}
      <div className="flex flex-col lg:flex-row items-center mb-24 lg:mb-32">
        <div className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0 order-1 lg:order-2">
          <div className=" p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                2
              </div>
              <h3 className="text-2xl font-bold">Platform Creation & Branding</h3>
            </div>
            <p className=" mb-4">
              Our team builds your complete digital foundation:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Custom blog design aligned with your brand</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>SEO-optimized technical setup</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Content management system training</span>
              </li>
            </ul>
            <p className="">
              <strong>Outcome:</strong> Fully functional blog ready for content
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-16 order-2 lg:order-1">
        </div>
      </div>

      {/* Achievement Three */}
      <div className="flex flex-col lg:flex-row items-center mb-24 lg:mb-32">
        <div className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0 order-1 lg:order-1">
          <div className=" p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-pink-100 text-pink-600 font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                3
              </div>
              <h3 className="text-2xl font-bold">Content Engine Development</h3>
            </div>
            <p className=" mb-4">
              We build your content machine:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Strategic content calendar creation</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>SEO-optimized article production</span>
              </li>
            </ul>
            <p className="">
              <strong>Outcome:</strong> 30 days of premium content ready to publish
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-16 order-2 lg:order-2">
        </div>
      </div>

       {/* Achievement Four */}
      <div className="flex flex-col lg:flex-row items-center mb-24 lg:mb-32">
        <div className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0 order-1 lg:order-2">
          <div className=" p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 text-yellow-600 font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                4
              </div>
              <h3 className="text-2xl font-bold">Audience Growth System</h3>
            </div>
            <p className=" mb-4">
              We implement proven growth tactics:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Search engine optimization strategy</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Social media amplification system</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Email list building framework</span>
              </li>
            </ul>
            <p className="">
              <strong>Outcome:</strong> Consistent traffic growth system
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-16 order-2 lg:order-1">
        </div>
      </div>

       {/* Achievement Five */}
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0 order-1 lg:order-1">
          <div className=" p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 text-green-600 font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                5
              </div>
              <h3 className="text-2xl font-bold">Performance Optimization</h3>
            </div>
            <p className=" mb-4">
              We ensure continuous improvement:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Monthly analytics review</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Content performance analysis</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Conversion rate optimization</span>
              </li>
            </ul>
            <p className="">
              <strong>Outcome:</strong> Data-driven blog that keeps improving
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-16 order-2 lg:order-2">
        </div>
      </div>
    </div>
  </div>

</div>
      );
}
 
export default Achievement;