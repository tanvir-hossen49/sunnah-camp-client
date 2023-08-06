import SectionTitle from "../../components/SectionTitle";

const Faq = () => {
  const questionsAnsAnswers = [
    {
      id: "aksdf",
      question: "Are the courses taught by qualified instructors?",
      answer:
        "Yes, all our courses are taught by experienced and knowledgeable instructors who have expertise in their respective fields of Islamic studies.",
    },
    {
      id: "qwerr",
      question: "Do I need any prior knowledge of Islam to take these courses?",
      answer:
        "No, our courses cater to all levels of learners, from beginners to advanced students. No prior knowledge of Islam is required for most of the courses.",
    },
    {
      id: "qwert",
      question: "Can I access the courses on multiple devices?",
      answer:
        "Yes, our courses are accessible on various devices, such as computers, tablets, and smartphones, allowing you to learn at your convenience.",
    },
    {
      id: "fghj",
      question:
        "How long do I have access to the course materials after purchase?",
      answer:
        "Once you purchase a course, you will have lifetime access to the course materials, including any future updates.",
    },
  ];

  return (
    <div className="mx-8 my-10">
      <SectionTitle title="Frequently Asked Questions" />
      {questionsAnsAnswers?.map(singleItem => (
        <div key={singleItem.id} className="collapse collapse-plus border mt-3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            {singleItem.question}
          </div>
          <div className="collapse-content ">
            <p> {singleItem.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
