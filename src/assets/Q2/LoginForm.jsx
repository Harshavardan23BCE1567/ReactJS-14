import React from "react";

const LoginForm = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ textAlign: "left", padding: "20px", border: "1px solid black", borderRadius: "10px", width: "400px" }}>
        <h2 style={{ textAlign: "center" }}>Novell Services Login</h2>
        <form>

          {/* Username */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <label style={{ width: "40%" }}>Username:</label>
            <input type="text" name="username" style={{ width: "60%" }} />
          </div>

          {/* Password */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <label style={{ width: "40%" }}>Password:</label>
            <input type="password" name="password" style={{ width: "60%" }} />
          </div>

          {/* City of Employment */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <label style={{ width: "40%" }}>City of Employment:</label>
            <input type="text" name="city" style={{ width: "60%" }} />
          </div>

          {/* Web Server (Added) */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <label style={{ width: "40%" }}>Web Server:</label>
            <select name="webserver" style={{ width: "63%" }}>
              <option>-- Choose a server --</option>
              <option>Apache</option>
              <option>Nginx</option>
              <option>Tomcat</option>
              <option>Other</option>
            </select>
          </div>

          {/* Role Selection - Perfectly Aligned */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <label style={{ width: "40%" }}>Please specify your role:</label>
            <div style={{ width: "60%" }}>
              <label><input type="radio" name="role" value="Admin" /> Admin</label><br />
              <label><input type="radio" name="role" value="Engineer" /> Engineer</label><br />
              <label><input type="radio" name="role" value="Manager" /> Manager</label><br />
              <label><input type="radio" name="role" value="Guest" /> Guest</label>
            </div>
          </div>

          {/* Single Sign-on Section - Perfectly Aligned */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <label style={{ width: "40%" }}>Single Sign-on to:</label>
            <div style={{ width: "60%" }}>
              <label><input type="checkbox" name="mail" /> Mail</label><br />
              <label><input type="checkbox" name="payroll" /> Payroll</label><br />
              <label><input type="checkbox" name="selfservice" /> Self-service</label>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ textAlign: "center" }}>
            <button type="submit">Login</button>
            <button type="reset" style={{ marginLeft: "10px" }}>Reset</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default LoginForm;
