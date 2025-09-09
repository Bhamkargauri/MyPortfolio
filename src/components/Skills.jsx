const Skills = () => {
  const frontend = [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
  ];
  const backend = ["Node.js", "Java", "MySQL", "Spring Boot"];
  const otherTech = ["REST APIs", "Python", "MongoDB"];
  const tools = ["Postman", "VS Code", "GitHub"];
  return (
    <div className="section">
      <h1>Skills</h1>

      <h3>Frontend</h3>
      <ul className="tags">
        {frontend.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h3>Backend</h3>
      <ul className="tags">
        {backend.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h3>Other Technologies</h3>
      <ul className="tags">
        {otherTech.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h3>Tools & Platforms</h3>
      <ul className="tags">
        {tools.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
