import React from "react";

export const Skillcategories = (props) => {
  return (
    <div id="skillcategories" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Skill Categories</h2>
        </div>

        <div className="skill-category-list">
          <h3>
            <img src="img/programming.png" className="img-responsive" alt="Programming Languages" />{" "}
            1. Programming Languages
          </h3>
          <ul>
            <li><strong>Python:</strong> A versatile, high-level language used in web development, data science, automation, and more.</li>
            <li><strong>Java:</strong> A widely-used language known for its portability across platforms, often used in enterprise environments and Android app development.</li>
            <li><strong>C++:</strong> An extension of C with object-oriented features, commonly used in system/software development and competitive programming.</li>
          </ul>

          <h3>
            <img src="img/web-development.png" className="img-responsive" alt="Web Development" />{" "}
            2. Web Development
          </h3>
          <ul>
            <li><strong>HTML/CSS:</strong> The foundational technologies for creating and styling web pages.</li>
            <li><strong>JavaScript:</strong> A scripting language used to create dynamic and interactive web pages, often with frameworks like React or Angular.</li>
            <li><strong>Backend Development:</strong> Skills in server-side technologies like Node.js, Django, or Ruby on Rails for building and maintaining the backend of web applications.</li>
          </ul>

          <h3>
            <img src="img/data-science.png" className="img-responsive" alt="Data Science and Machine Learning" />{" "}
            3. Data Science and Machine Learning
          </h3>
          <ul>
            <li><strong>Data Analysis:</strong> Techniques for analyzing and interpreting complex data using tools like pandas and NumPy.</li>
            <li><strong>Machine Learning:</strong> The use of algorithms and statistical models to enable computers to improve their performance on a task through experience.</li>
            <li><strong>Deep Learning:</strong> A subset of machine learning focused on neural networks with many layers, used in tasks like image and speech recognition.</li>
          </ul>

          <h3>
            <img src="img/database.png" className="img-responsive" alt="Database Management" />{" "}
            4. Database Management
          </h3>
          <ul>
            <li><strong>SQL:</strong> A language used for managing and querying relational databases, essential for handling structured data.</li>
            <li><strong>NoSQL:</strong> Technologies like MongoDB or Cassandra that handle unstructured or semi-structured data, used in big data applications.</li>
          </ul>

          <h3>
            <img src="img/cybersecurity.png" className="img-responsive" alt="Cybersecurity" />{" "}
            5. Cybersecurity
          </h3>
          <ul>
            <li><strong>Network Security:</strong> Protecting data during transfer across networks through encryption, firewalls, and intrusion detection systems.</li>
            <li><strong>Ethical Hacking:</strong> Skills in identifying and addressing security vulnerabilities in systems, often used in penetration testing.</li>
          </ul>

          <h3>
            <img src="img/cloud-computing.png" className="img-responsive" alt="Cloud Computing" />{" "}
            6. Cloud Computing
          </h3>
          <ul>
            <li><strong>AWS (Amazon Web Services):</strong> A comprehensive cloud platform offering computing power, storage, and other services.</li>
            <li><strong>Azure:</strong> Microsoft's cloud computing service, providing similar functionalities to AWS with additional integrations with Microsoft products.</li>
          </ul>

          <h3>
            <img src="img/software-development.png" className="img-responsive" alt="Software Development" />{" "}
            7. Software Development
          </h3>
          <ul>
            <li><strong>Version Control (Git):</strong> Tools and practices for managing changes to code over time, essential for collaborative development.</li>
            <li><strong>Agile Methodologies:</strong> Frameworks like Scrum and Kanban for iterative and incremental development processes.</li>
          </ul>

          <h3>
            <img src="img/devops.png" className="img-responsive" alt="DevOps" />{" "}
            8. DevOps
          </h3>
          <ul>
            <li><strong>Continuous Integration/Continuous Deployment (CI/CD):</strong> Practices for automating the process of integrating code changes and deploying applications.</li>
            <li><strong>Containerization (Docker):</strong> Packaging applications and their dependencies into containers to ensure consistency across different environments.</li>
          </ul>

          <h3>
            <img src="img/mobile-app.png" className="img-responsive" alt="Mobile App Development" />{" "}
            9. Mobile App Development
          </h3>
          <ul>
            <li><strong>Android Development:</strong> Building applications for the Android platform using tools like Android Studio and programming languages such as Kotlin or Java.</li>
            <li><strong>iOS Development:</strong> Creating applications for Apple's iOS platform using Swift or Objective-C and tools like Xcode.</li>
          </ul>

          <h3>
            <img src="img/algorithms.png" className="img-responsive" alt="Algorithms and Data Structures" />{" "}
            10. Algorithms and Data Structures
          </h3>
          <ul>
            <li><strong>Sorting and Searching Algorithms:</strong> Fundamental techniques for organizing and retrieving data efficiently.</li>
            <li><strong>Graph Algorithms:</strong> Techniques for solving problems related to graphs, such as shortest path and network flow algorithms.</li>
          </ul>

          <h3>
            <img src="img/operating-systems.png" className="img-responsive" alt="Operating Systems" />{" "}
            11. Operating Systems
          </h3>
          <ul>
            <li><strong>Linux:</strong> An open-source operating system used in servers, desktops, and embedded systems, with a strong command-line interface.</li>
            <li><strong>Windows:</strong> The widely-used operating system from Microsoft, relevant for both personal computing and enterprise environments.</li>
          </ul>

          <h3>
            <img src="img/game-development.png" className="img-responsive" alt="Game Development" />{" "}
            12. Game Development
          </h3>
          <ul>
            <li><strong>Unity:</strong> A popular game development engine used to create 2D and 3D games across multiple platforms.</li>
            <li><strong>Unreal Engine:</strong> A powerful game engine known for high-fidelity graphics and complex game mechanics.</li>
          </ul>

          <h3>
            <img src="img/artificial-intelligence.png" className="img-responsive" alt="Artificial Intelligence" />{" "}
            13. Artificial Intelligence
          </h3>
          <ul>
            <li><strong>Natural Language Processing (NLP):</strong> Techniques for enabling machines to understand and generate human language.</li>
            <li><strong>Computer Vision:</strong> The use of algorithms to interpret and analyze visual information from the world, used in applications like facial recognition and object detection.</li>
          </ul>

          <h3>
            <img src="img/blockchain.png" className="img-responsive" alt="Blockchain" />{" "}
            14. Blockchain
          </h3>
          <ul>
            <li><strong>Overview:</strong> A decentralized ledger technology that securely records transactions across a distributed network of computers. It ensures transparency and immutability of data without the need for a central authority.</li>
            <li><strong>Skills:</strong></li>
            <ul>
              <li><strong>Smart Contracts:</strong> Self-executing contracts with the terms directly written into code, commonly used on platforms like Ethereum.</li>
              <li><strong>Cryptocurrencies:</strong> Understanding of digital currencies like Bitcoin and Ethereum, including how they are created, managed, and traded.</li>
              <li><strong>Blockchain Development:</strong> Skills in developing applications using blockchain technology, including creating and managing blockchain networks.</li>
            </ul>
          </ul>
        </div>

        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    <img src={d.img} alt={d.name} className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : <p><b>Learning never exhausts the mind.</b></p>
          }
        </div>
      </div>
    </div>
  );
};

