"use client";

import {
  ScrollAnimation,
  ScrollContainer,
  ScrollItem,
} from "../ui/ScrollAnimation";

const ProcessTimeline = () => {

  const steps = [
    {
      id: 1,
      title: "Discovery & Assessment",
      description:
        "We start by understanding your business needs and IT challenges through in-depth consultations.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Strategy Development",
      description:
        "Our team creates a customized roadmap tailored to your goals and technological requirements.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Implementation",
      description:
        "We execute the strategy with precision, whether providing staff, implementing solutions, or both.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Monitoring & Optimization",
      description:
        "We continuously monitor performance and make adjustments to ensure optimal results.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-linear-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full -translate-y-1/3 -translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 rounded-full translate-y-1/3 translate-x-1/3 blur-3xl"></div>

      <div className="section-shell relative z-10">
        <ScrollAnimation className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Our Methodology
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Proven Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a structured approach to deliver consistent, high-quality
            results.
          </p>
        </ScrollAnimation>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical line for desktop */}
          <ScrollAnimation className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-1">
            <div className="h-full w-1 bg-linear-to-b from-primary/20 via-primary/15 to-primary/20 rounded-full" />
          </ScrollAnimation>

          <ScrollContainer className="space-y-14 md:space-y-16">
            {steps.map((step, index) => (
              <ScrollItem
                key={step.id}
                delay={index * 0.08}
                direction={index % 2 === 0 ? "right" : "left"}
                className="group"
              >
                <div
                  className={`mb-8 md:mb-0 flex flex-col md:flex-row items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  <div className="md:w-1/2 mb-6 md:mb-0 md:px-10">
                    <div
                      className={`text-center ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                        }`}
                    >
                      <div className="inline-flex items-center mb-2 text-primary">
                        <span className="text-sm font-semibold mr-2">
                          STEP {step.id}
                        </span>
                        <div className="h-px w-10 bg-primary/30"></div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>

                      {/* Feature list - optional */}
                      <ul
                        className={`mt-4 space-y-2 text-sm text-gray-600 ${index % 2 === 0 ? "md:ml-auto" : ""
                          } inline-block text-left`}
                      >
                        {index === 0 && (
                          <>
                            <li className="flex items-center">
                              <svg
                                className="w-4 h-4 mr-2 text-success"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>Initial consultation</span>
                            </li>
                            <li className="flex items-center">
                              <svg
                                className="w-4 h-4 mr-2 text-success"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>Needs analysis</span>
                            </li>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <li className="flex items-center">
                              <svg
                                className="w-4 h-4 mr-2 text-success"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>Custom solution design</span>
                            </li>
                            <li className="flex items-center">
                              <svg
                                className="w-4 h-4 mr-2 text-success"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>Detailed planning</span>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Circle with icon for desktop */}
                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20"
                    style={{ top: `${index * 33.33}%` }}
                  >
                    <div className="w-16 h-16 rounded-full bg-linear-to-r from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/20">
                      {step.icon}
                    </div>
                  </div>

                  {/* Circle with icon for mobile */}
                  <div className="md:hidden flex w-16 h-16 rounded-full bg-linear-to-r from-primary to-primary-dark items-center justify-center shadow-lg shadow-primary/20 mb-4">
                    {step.icon}
                  </div>

                  <div className="md:w-1/2 md:px-10">
                    <div className="md:hidden">
                      <h3 className="text-2xl font-bold mb-3 text-center text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollItem>
            ))}
          </ScrollContainer>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
