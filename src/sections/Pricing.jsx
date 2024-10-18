import React, { useState } from "react";
import { Element } from "react-scroll";
import { plans } from "../constant";
import clsx from "clsx";
import CountUp from "react-countup";
import Button from "../components/Button";
const Pricing = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className=" max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-6xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm pt-12">
              flexible pricing for team of all sizes{" "}
            </h3>

            <div className="relative z-4 flex mx-auto w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <button
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                onClick={() => setMonthly((prev) => !prev)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>
              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] shadow-400 transition-transform duration-500 overflow-hidden",
                  !monthly && "translate-x-full"
                )}
              />
            </div>
            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={700}
                height={280}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={700}
                height={280}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
          {/* pricing section */}
          <div className="scroll-hide relative  z-2 mt-12 flex items-center justify-center max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6 ">
            {plans.map(
              (
                {
                  id,
                  title,
                  priceMonthly,
                  priceYearly,
                  caption,
                  features,
                  icon,
                  logo,
                },
                index
              ) => (
                <div
                  key={id}
                  className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
                >
                  {index === 1 && (
                    <div className="g4 absolute left-0 top-0 z-1 h-330 right-0 rounded-tl-3xl rounded-tr-3xl  " />
                  )}
                  <div
                    className={clsx(
                      "absolute left-0 right-0 z-2 flex items-center justify-center",
                      index === 1 ? "-top-6" : "-top-6   xl:-top-11"
                    )}
                  >
                    <img
                      src={logo}
                      alt="plan-logo"
                      className={clsx(
                        "object-contain drop-shadow-2xl",
                        index === 1 ? "size-[120px]" : "size-[60px]"
                      )}
                      srcset=""
                    />
                  </div>
                  <div
                    className={clsx(
                      "relative flex flex-col items-center",
                      index === 1 ? "pt-24" : "pt-12"
                    )}
                  >
                    <div
                      className={clsx(
                        "small-2 rounded-20 relative z-2 mx-auto  mb-6 border-2 px-4 py-1.5 uppercase",
                        index === 1 ? "border-p3 text-p3" : "border-p1 text-p1"
                      )}
                    >
                      {title}
                    </div>
                    <div className="relatvie z-2 flex items-center justify-center">
                      <div
                        className={clsx(
                          "h-num flex items-start",
                          index === 1 ? "text-p3" : "text-p4"
                        )}
                      >
                        ${" "}
                        <CountUp
                          start={priceMonthly}
                          end={monthly ? priceMonthly : priceYearly}
                          duration={0.4}
                          useCasing={false}
                          preserveValue
                        />
                      </div>
                      <div className="small-1 relative top-3 ml-1 uppercase">
                        /mo
                      </div>
                    </div>
                  </div>
                  <div
                    className={clsx(
                      "body-1mb-10 w-full border-b-s2 pb-9 text-center relative z-2 text-p4",
                      index === 1 && "border-b"
                    )}
                  >
                    {caption}
                  </div>
                  <ul className="mx-auto space-y-4 xl:px-3">
                    {features.map((features) => (
                      <li
                        key={features}
                        className="
                        relative flex items-center justify-center gap-5"
                      >
                        <img
                          src={"/images/check.png"}
                          alt="check"
                          srcset=""
                          className="size-10 object-contain"
                        />
                        <p className="flex-1">{features}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex w-full justify-center">
                    <Button>get started</Button>
                  </div>
                  {index === 1 && (
                    <p className="small-compact mt-9 text-p3 text-center before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-'] ">
                      limited offer
                    </p>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
