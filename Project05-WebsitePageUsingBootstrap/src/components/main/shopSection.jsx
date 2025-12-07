import React from "react";

const data = [
  {
    img: "https://dtwhistledev.wpengine.com/wp-content/uploads/2016/02/1.jpg",
    title: "FOOT STYLE",
    oldPrice: "$35.00",
    newPrice: "$32.00",
    tag: "Sale!",
  },
  {
    img: "https://dtwhistledev.wpengine.com/wp-content/uploads/2016/02/16-500x475.jpg",
    title: "ATHLETE KIT",
    newPrice: "$45.00",
  },
  {
    img: "https://dtwhistledev.wpengine.com/wp-content/uploads/2016/02/11-500x475.jpg",
    title: "TABLE TENNIS",
    newPrice: "$44.00",
    tag: "Sale!",
  },
  {
    img: "https://dtwhistledev.wpengine.com/wp-content/uploads/2016/02/4-500x475.jpg",
    title: "GOLF STICK",
    newPrice: "$33.00",
  },
  {
    img: "https://dtwhistledev.wpengine.com/wp-content/uploads/2016/02/8-768x730.jpg",
    title: "RACING HELMET",
    newPrice: "$60.00",
  },
  {
    img: "https://dtwhistledev.wpengine.com/wp-content/uploads/2016/02/23-768x730.jpg",
    title: "SOCCER HIT",
    newPrice: "$49.99",
    tag: "Sale!",
  },
  {
    img: "https://dtwhistledev.wpengine.com/wp-content/uploads/2016/02/10-768x730.jpg",
    title: "PIN BALL SHOT",
    newPrice: "$20.00",
  },
  {
    img: "https://dtwhistledev.wpengine.com/wp-content/uploads/2016/02/20-768x730.jpg",
    title: "BILLIARDS CALL SHOT",
    newPrice: "$25.00",
    tag: "Sale!",
  }
];

const ShopSection = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold">SHOP WITH US</h1>
      <p className="text-secondary mb-5">SHOP FOR A PRO IN THE GAME</p>

      <div className="row g-5">
        {data.map((item, i) => (
          <div className="col-md-3" key={i}>
            <div className="p-3 border-0 shadow-sm rounded bg-white">
              <div className="position-relative">
                {item.tag && (
                  <span
                    className="badge bg-primary position-absolute"
                    style={{ top: "10px", right: "10px" }}>
                    {item.tag}
                  </span>
                )}
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid"
                  style={{ height: "240px", objectFit: "contain" }}/>
              </div>

              <h5 className="mt-3">{item.title}</h5>

              {item.oldPrice && (
                <span className="text-decoration-line-through text-muted me-2">
                  {item.oldPrice}
                </span>
              )}

              <span className="fw-bold">{item.newPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
