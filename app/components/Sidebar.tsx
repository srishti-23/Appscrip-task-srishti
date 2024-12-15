import React from "react";


const Sidebar = () => {
  return (
    <>
      <aside
        style={{
          width: "380px",
          minWidth: "380px", // Ensure the sidebar width doesn't collapse
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{ marginBottom: "20px", borderBottom: "1px solid lightgrey" }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              textTransform: "uppercase",
              fontWeight: "bold",
              marginBottom: "20px",
              marginTop: "10px",
            }}
          >
            <input
              type="checkbox"
              style={{ marginRight: "10px", width: "40px", height: "16px" }}
            />
            Customizable
          </label>
        </div>
        <div
          style={{
            marginBottom: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "20px",
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            Ideal For
          </h3>

          <select
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "18px",
              color: "darkgrey",
              fontWeight: "500",
              border: "none",
            }}
          >
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>
        <div
          style={{
            marginBottom: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "20px",
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            occasion
          </h3>

          <select
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "18px",
              color: "darkgrey",
              fontWeight: "500",
              border: "none",
            }}
          >
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>
        <div
          style={{
            marginBottom: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "20px",
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            work
          </h3>

          <select
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "18px",
              color: "darkgrey",
              fontWeight: "500",
              border: "none",
            }}
          >
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>
        <div
          style={{
            marginBottom: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "20px",
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            Fabric
          </h3>

          <select
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "18px",
              color: "darkgrey",
              fontWeight: "500",
              border: "none",
            }}
          >
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>
        <div
          style={{
            marginBottom: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "20px",
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            segment
          </h3>

          <select
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "18px",
              color: "darkgrey",
              fontWeight: "500",
              border: "none",
            }}
          >
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>
        <div
          style={{
            marginBottom: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "20px",
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            Suitable for
          </h3>

          <select
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "18px",
              color: "darkgrey",
              fontWeight: "500",
              border: "none",
            }}
          >
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>
        <div
          style={{
            marginBottom: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "20px",
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            raw materials
          </h3>

          <select
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "18px",
              color: "darkgrey",
              fontWeight: "500",
              border: "none",
            }}
          >
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>
        <div
          style={{
            marginBottom: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "20px",
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            pattern
          </h3>

          <select
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "18px",
              color: "darkgrey",
              fontWeight: "500",
              border: "none",
            }}
          >
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
