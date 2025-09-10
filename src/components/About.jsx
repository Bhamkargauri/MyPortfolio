import profileimg from "../assets/avatar.jpg";

const About = () => {
  return (
    <div className="section">
      <h1>About Me</h1>
      <p>
        I’m Gauri Bhamkar, an enthusiastic and motivated fresher with a strong
        interest in web development and programming. I have hands-on experience
        with HTML, CSS, Bootstrap, and JavaScript for building responsive and
        interactive web pages. I also have a good grasp of programming concepts
        in Java and Python. I believe in continuous learning and have a growth
        mindset that pushes me to take on challenges and keep improving. I enjoy
        exploring new technologies, solving problems through code, and
        collaborating with others to build meaningful solutions. I’m excited to
        start my journey in the IT industry, where I can apply my skills, gain
        real-world experience, and grow in a dynamic and supportive environment.
      </p>
      <img src={profileimg} alt="Profile" loading="lazy" className="avatar" />
    </div>
  );
};

export default About;
