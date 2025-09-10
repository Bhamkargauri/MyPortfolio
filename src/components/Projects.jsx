import foodImg from "src/assets/foodapp.png";
import dailyPlanner from "src/assets/dailyplanner.png";
import crud from "src/assets/crud.png";
import vehicleLog from "src/assets/vehicleLog.png";
const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    img: { foodImg },
    // url: "https://example.com",
  },
  {
    id: 2,
    title: "Daily Planner",
    img: { dailyPlanner },
    // url: "https://example.com",
  },
  {
    id: 3,
    title: "Crud Operation",
    img: { crud },
    // url: "https://example.com",
  },
  {
    id: 4,
    title: "Vehicle Maintenance Log",
    img: { vehicleLog },
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
