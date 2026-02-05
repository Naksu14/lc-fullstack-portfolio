import React, { useState, useEffect } from "react";
import { sendToGemini } from "./chatbotService";
import { MessageCircle, Send } from "lucide-react";
import chatbotLogo from '../../assets/images/me.png';

// const faqs = [
//   "What services do you offer?",
//   "Can I see your latest projects?",
//   "How can I contact you?",
//   "What technologies do you specialize in?",
// ];


const portfolioContext = `
  You are a helpful assistant on a developer portfolio website. Here is the portfolio information:
  - Name: Loel Campaña
  - Role: Full-stack Developer, designer
  - Skills: React, Bootstrap, Tailwind, Node.js, JavaScript, Java, Python, C++, PHP, CSS, HTML, Git, Figma, MySQL, Arduino
  - Contact: ic.loel.campana@cvsu.edu.com

  - Name: Freddrick Tropico, designer
  - Role: Frontend Developer
  - Skills: React, Bootstrap, Tailwind, Node.js, JavaScript, Java, Python, C, C++, PHP, CSS, HTML, Git, Figma, MySQL, Arduino
  - Contact: ic.freddrick.tropico@cvsu.edu.com

  - Freddricks wife is Angelica Malapitan

  Name: Lance Listana
  - Role: QA Tester, UI/UX Designer
  - Skills: React, Bootstrap, Tailwind, Node.js, JavaScript, Java, Python, Bulma, C, C++, PHP, CSS, HTML, Git, Figma, MySQL, Arduino
  - Contact: ic.lanceivan.listana@cvsu.edu.com

  Name: Daniela Castañeda
  - Role: UI/UX Designer
  - Skills: React, Bootstrap, Tailwind, JavaScript, Python, C++, PHP, CSS, HTML, Git, Figma, MySQL, Arduino
  - Contact: ic.danielaromana.castaneda@cvsu.edu.com

  Name: Seighmone Buclares
  - Role: Frontend Developer
  - Skills: C, C++, Java, JavaScript, Bootstrap, Bulma, PHP, CSS, HTML, Git, Figma, MySQL, Arduino
  - Contact: ic.rhanelseighmone.buclares@cvsu.edu.com

  Mission: Our mission is to develop innovative and promising projects that address real-world challenges by building efficient, reliable, and scalable programs with enhanced user experiences. We are committed to delivering practical solutions that improve lives, empower communities, and make technology more intuitive and accessible for everyone.
  Vision: To transform technology into a force for good by crafting progressive, user-centered solutions that not only simplify real-world challenges but also elevate everyday experiences. We aim to set new benchmarks in innovation and usability, empowering individuals and organizations through intuitive, impactful, and forward-thinking design.
  
  Programming Languages:
  - React : Used as the main JavaScript library to build the interactive UI components of the website.
  - React DOM: Handles rendering of React components to the browser’s DOM efficiently.
  - HTML5: Provides the basic structure of the webpage, forming the skeleton for all components.
  - CSS3: Used to style base elements and customize visual layouts when utility classes are not enough
  - Tailwind CSS: Enables rapid UI styling with utility-first classes for responsive and modern design.
  - Material UI: Provides prebuilt components for consistent design and user experience in complex UI parts.
  - JavaScript: Drives the website’s dynamic behavior, interactivity, and logic alongside React

  Projects:
  - JOBCONNEXT: it focuses exclusively on the unique needs of the Philippines, empowering local blue-collar workers to find meaningful work and clients to locate skilled professionals within their community. This local approach means faster response times, more culturally attuned interactions, and a stronger support system for everyone involved.
  - QUEUING SYSTEM:  is an Arduino and website-based system. It lets students choose between buying uniforms or lining up for fitting. Arduino handles ticketing and queue assignments, while the website displays real-time queue numbers and stock updates, ensuring a smoother and more organized process.
  - EMPOWER FITNESS: is a mobile application designed to support a healthier and more disciplined lifestyle by tracking and motivating users through structured workouts. The app offers a variety of activities focused on upper body, core, and lower body exercises, each with built-in timers and intensity levels. Workout performance is automatically recorded and stored in the database, allowing users to monitor their ongoing progress. The Empower Fitness app generates a personalized goal weight based on the user's current weight to help guide and motivate them toward their fitness goals.
  - SCHOLARSHIP SYSTEM: is a web-based platform for Cavite State University (CvSU) students to track available and upcoming scholarships, view requirements, receive updates, and submit documents online. It streamlines the application process and helps students stay informed, organized, and efficient in managing their scholarship opportunities.
  - ALUMNI MANAGEMENT SYSTEM: it is a school campus navigation system that helps new students find buildings, services, and events with ease. The system offers live viewing for the upcoming events of the campus

  Programming languages and tools used for each projects:
  - JOBCONNEXT: Figma, HTML, CSS, Bootstrap, React, PHP, MySQL
  - QUEUING SYSTEM: Figma, HTML, CSS, Bootstrap, React, PHP, MySQL
  - EMPOWER FITNESS: Figma, HTML, CSS, Bootstrap, React, PHP, MySQL, Firebase
  - SCHOLARSHIP SYSTEM: Figma, HTML, CSS, Bootstrap, React, PHP, MySQL
  - ALUMNI MANAGEMENT SYSTEM: Figma, HTML, CSS, Bootstrap, React, PHP, MySQL

  Address: Palico IV Imus City Cavite
  Contact: 
  - Phone: + 0951-525-4884
  - Email: teaminnovate@gmail.com
  Social Media Links:
  - Facebook: Team Innovate Inc.
  - Twitter: @Teaminnovate

  Country: Philippines

  When asked about the developer, use this information in your answers.
`;

const SESSION_KEY = "chatbot_messages";
const SESSION_EXPIRY_KEY = "chatbot_messages_expiry";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = new Date().getTime();
    const expiry = localStorage.getItem(SESSION_EXPIRY_KEY);
    const storedMessages = localStorage.getItem(SESSION_KEY);

    if (storedMessages && expiry && now < parseInt(expiry)) {
      setMessages(JSON.parse(storedMessages));
    } else {
      const defaultMessage = [{ role: "system", content: "Hi! How can we assist you today? Ask about our projects, skills, or services! " }];
      setMessages(defaultMessage);
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem(SESSION_EXPIRY_KEY);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(messages));
      localStorage.setItem(SESSION_EXPIRY_KEY, (new Date().getTime() + 36000000).toString());
    }
  }, [messages]);

  const handleSend = async (customInput = null) => {
    const messageToSend = (customInput || input);

    if (!messageToSend.trim()) return;

    const userMessage = { role: "user", content: messageToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput(""); // clear input field

    try {
      const fullPrompt = `${portfolioContext}\n\nUser: ${messageToSend}`;
      const reply = await sendToGemini(fullPrompt);
      const botMessage = { role: "assistant", content: reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Gemini API Error:", err);
    }
  };

  return (
    <div className="fixed bottom-[20px] right-[2%] z-30 ">
      {!isOpen && (
        <div className="chat-tooltip-container">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open chat"
            className={`p-3 rounded-t-3xl rounded-bl-3xl rounded-br-none shadow-md flex items-center gap-2 bg-[#646464]/20 text-[#FFFFFF] border border-[rgba(99, 102, 241, 0.22)] opacity-50 hover:opacity-90 transition-opacity duration-300 `}
          >
            <MessageCircle className="w-8 h-8" />
          </button>
          <span className="chat-tooltip">Any Questions?</span>
        </div>

      )}

      {isOpen && (
        <div className="fixed bottom-[50px] right-[3%] w-[95%] max-w-[400px] h-[60vh] sm:h-[500px] bg-black/70 p-4 rounded-lg shadow-xl z-30 sm:w-96">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2 mb-2">
              <img
                src={chatbotLogo}
                alt="Chatbot Icon"
                className="w-10 h-10 rounded-full bg-gray-200 "
              />
              <div className="text-left text-white">
                <h2 className="text-lg font-semibold">Chat with Loel</h2>
                <p className="text-xs font-extralight">Powered by Google Gemini</p>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm text-white hover:text-red-500"
              >
                ✕
              </button>
              <div className="flex items-center gap-1 mt-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs text-white">Online</span>
              </div>
            </div>
          </div>

          <div
            className="
              h-[calc(100%-120px)] overflow-y-scroll mb-2 border-t border-b border-white/30 p-2
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:bg-white/30
              [&::-webkit-scrollbar-thumb]:rounded-full
            "
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(210, 200, 240, 0.3) transparent',
            }}
          >
            {/* {messages.map((msg, i) => {
              const isUser = msg.role === "user";
              const isSystemMessage = msg.role === "system";

              return (
                <div key={i}>
                  <div
                    className={`
                      mb-2 p-2 w-auto rounded break-words text-left
                      ${isUser
                        ? "ml-auto bg-[#FFFFFF] text-black rounded-t-xl rounded-bl-xl rounded-br-none"
                        : "mr-auto bg-[#AAAAAA] text-white rounded-b-xl rounded-tr-xl rounded-tl-none"}
                      max-w-[75%]
                    `}
                  >
                    {msg.content}
                  </div>

                  {isSystemMessage && i === 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 mb-4">
                      {faqs.map((faq, index) => (
                        <button
                          key={index}
                          onClick={() => handleSend(faq)}
                          className="bg-transparent text-white text-xs px-3 py-1 rounded-xl border border-white hover:bg-gray-100 hover:text-black transition-all"
                        >
                          {faq}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })} */}
            <div className="text-center text-gray-400 mt-10">
              <p className="text-sm">Chat functionality is currently unavailable.</p>
              <p className="text-xs mt-1">Please check back later.</p>
            </div>
          </div>


          <div className="flex bottom-0 text-black mt-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              className="flex-1 p-2 mr-2 border rounded-xl"
              placeholder="Type a message..."
            />
            <button
              onClick={() => handleSend()}
              className="bg-violet-500 text-white p-2 sm:p-3 rounded-xl flex items-center justify-center"
            >
              <Send className="w-5 h-5" />
            </button>


          </div>
        </div>
      )}

    </div>
  );
};

export default Chatbot;
