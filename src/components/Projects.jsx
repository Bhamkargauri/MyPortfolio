const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    img: "src/assets/foodapp.png",
    // url: "https://example.com",
  },
  {
    id: 2,
    title: "Daily Planner",
    img: "src/assets/dailyplanner.png",
    // url: "https://example.com",
  },
  {
    id: 3,
    title: "Crud Operation",
    img: "src/assets/crud.png",
    // url: "https://example.com",
  },
  {
    id: 4,
    title: "Vehicle Maintenance Log",
    img: "src/assets/vehicleLog.png",
    // url: "https://example.com",
  },
];

const Projects = () => {
  return (
    <div className="section">
      <h1>Projects</h1>
      <div className="grid">
        {projects.map((p) => (
          <a key={p.id} className="card" href={p.url} target="_blank">
            <img src={p.img} alt={p.title} loading="lazy" />
                <h3>{p.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
