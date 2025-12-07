import "../../App.css";

export default function SportsCategory() {
  const items = [
    { icon: "🏃", title: "BASE BALL", text: "The best sports event ever" },
    { icon: "🚴", title: "CYCLING", text: "The best sports event ever" },
    { icon: "🤾", title: "TENNIS", text: "The best sports event ever" },
    { icon: "🏊", title: "SWIMMING", text: "The best sports event ever" },
  ];

  return (
    <div className="sports-wrapper">
      <div className="sports-container">
        {items.map((item, i) => (
          <div className="sports-box" key={i}>
            <div className="icon-circle">{item.icon}</div>

            <div className="sports-info">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

