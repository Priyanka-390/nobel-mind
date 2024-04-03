import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
const Faqsec = () => {
      const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div id="faq" className="pb-36">
      <div className="container max-w-[1140px] px-3 mx-auto">
        <h2 className="text-center font-outfit text-5xl md:leading-[57.6px] font-light">
          Frequently <span className="font-semibold">Asked Questions</span>
        </h2>
        <p className="text-center md:pt-4 pb-[52px] sm:pt-3 pt-2 font-normal font-exo text-[#5A594D] sm:text-base text-sm ">
          Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu{" "}
          <span className="lg:block"></span> volutpat mi leo. Nibh nisl
          consequat metus.
              </p>
               <div className=' max-w-[774px] mx-auto'>
              <div   className={`border border-solid border-[#A854E933] mb-[18px] shadow-[0px_4px_32px_0px_#00000014] after:w-full after:h-[5px] relative after:absolute after:bg-[#A854E9]  after:bottom-0  overflow-hidden rounded-md duration-300 ${
            open === 1 ? "border-[#A854E9] !after:block  " : "after:hidden"}`}>
                  <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                          <AccordionHeader onClick={() => handleOpen(1)}     className={`pb-6 pt-6 px-6 font-outfit text-sm sm:text-base font-medium text-black ${
            open === 1 ? "pb-3" : ""
          }`}>What is Artificial Intelligence (AI)?</AccordionHeader>
                          <AccordionBody className="pb-6 px-6 font-exo text-sm sm:text-base text-black opacity-70 max-w-[710px]">
                          Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                          </AccordionBody>
                        </Accordion>
              </div>
              <div   className={`border border-solid border-[#A854E933] mb-[18px] shadow-[0px_4px_32px_0px_#00000014] after:w-full after:h-[5px] relative after:absolute after:bg-[#A854E9]  after:bottom-0 overflow-hidden rounded-md duration-300 ${
            open === 2 ? "border-[#A854E9] !after:block  " : "after:hidden"}`}>
                  <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                          <AccordionHeader onClick={() => handleOpen(2)}     className={`pb-6 pt-6 px-6 font-outfit text-sm sm:text-base font-medium text-black ${
            open === 2 ? "pb-3" : ""
          }`}>How does AI benefit our company?</AccordionHeader>
                           <AccordionBody className="pb-6 px-6 font-exo text-sm sm:text-base text-black opacity-70 max-w-[710px]">
                          Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                          </AccordionBody>
                        </Accordion>
              </div>
              <div   className={`border border-solid border-[#A854E933] mb-[18px] shadow-[0px_4px_32px_0px_#00000014] after:w-full after:h-[5px] relative after:absolute after:bg-[#A854E9]  after:bottom-0 overflow-hidden rounded-md duration-300 ${
            open === 3 ? "border-[#A854E9] !after:block  " : "after:hidden"}`}>
                  <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                          <AccordionHeader onClick={() => handleOpen(3)}     className={`pb-6 pt-6 px-6 font-outfit text-sm sm:text-base font-medium text-black ${
            open === 3 ? "pb-3" : ""
          }`}>What types of AI technologies are relevant to our industry?</AccordionHeader>
                         <AccordionBody className="pb-6 px-6 font-exo text-sm sm:text-base text-black opacity-70 max-w-[710px]">
                          Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                          </AccordionBody>
                        </Accordion>
              </div>
              <div   className={`border border-solid border-[#A854E933] mb-[18px] shadow-[0px_4px_32px_0px_#00000014] after:w-full after:h-[5px] relative after:absolute after:bg-[#A854E9]  after:bottom-0  overflow-hidden rounded-md duration-300 ${
            open === 4 ? "border-[#A854E9] !after:block  " : "after:hidden"}`}>
                  <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                          <AccordionHeader onClick={() => handleOpen(4)}     className={`pb-6 pt-6 px-6 font-outfit text-sm sm:text-base font-medium text-black ${
            open === 4 ? "pb-3" : ""
          }`}>How can our employees adapt to AI integration?</AccordionHeader>
                          <AccordionBody className="pb-6 px-6 font-exo text-sm sm:text-base text-black opacity-70 max-w-[710px]">
                          Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                          </AccordionBody>
                        </Accordion>
              </div>
              <div   className={`border border-solid border-[#A854E933] shadow-[0px_4px_32px_0px_#00000014] after:w-full after:h-[5px] relative after:absolute after:bg-[#A854E9]  after:bottom-0  overflow-hidden rounded-md duration-300 ${
            open === 5 ? "border-[#A854E9] !after:block  " : "after:hidden"}`}>
                  <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                          <AccordionHeader onClick={() => handleOpen(5)}     className={`pb-6 pt-6 px-6 font-outfit text-sm sm:text-base font-medium text-black ${
            open === 5 ? "pb-3" : ""
          }`}>How can our company ensure data security with AI?</AccordionHeader>
                            <AccordionBody className="pb-6 px-6 font-exo text-sm sm:text-base text-black opacity-70 max-w-[710px]">
                          Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                          </AccordionBody>
                        </Accordion>
              </div>
          </div>

      </div>
    </div>
  );
};

export default Faqsec;
