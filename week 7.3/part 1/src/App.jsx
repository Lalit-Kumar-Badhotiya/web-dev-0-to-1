function App() {
  return (
    <center>
      <div
        style={{
          position: "relative",
          width: "400px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          borderRadius: "10px",
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        {/* Top Background */}
        <div
          style={{
            backgroundColor: "lightblue",
            width: "400px",
            height: "150px",
          }}
        ></div>

        {/* Profile Image */}
        <img
          src="https://s.abcnews.com/images/GMA/girl-day-abc-jpo-181010_hpMain_16x9t_992.jpg?w=992"
          alt="Profile"
          style={{
            position: "absolute",
            top: "150px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid white",
          }}
        />

        {/* White Section */}
        <div
          style={{
            width: "400px",
            height: "170px",
            backgroundColor: "white",
          }}
        >
          {/* Name */}
          <div
            style={{
              marginTop: "60px",
              textAlign: "center",
            }}
          >
            <h2 style={{ margin: 0 }}>Kajal Dixit</h2>
            <p style={{ margin: "5px 0", color: "gray" }}>23 Years Old</p>
          </div>
        </div>

        {/* Divider */}
        <hr
          style={{
            backgroundColor: "#ddd",
            height: "1px",
            border: "none",
            margin: 0,
          }}
        />

        {/* Stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "20px 0",
            backgroundColor: "white",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <strong>80K</strong>
            <div>Followers</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <strong>803K</strong>
            <div>Likes</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <strong>1.4K</strong>
            <div>Photos</div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;