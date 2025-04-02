// src/App.tsx

import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // GTX 750 Ti driver versions
  const driverVersions = [
    {
      id: 1,
      version: "474.84",
      releaseDate: "2024-01-24",
      size: "516 MB",
      type: "Game Ready",
      changes: [
        "General stability improvements",
        "Security updates",
        "Performance optimizations for legacy games",
        "Fixed display driver crashes"
      ],
      minRequirements: {
        os: ["Windows 7 64-bit", "Windows 10 64-bit"],
        cpu: "Intel/AMD 64-bit processor",
        ram: "2GB"
      },
      sha256: "e7c41d726b2421b1092c6d0850c1a3c558468507a12951c51d89c3f86d95c4dd"
    },
    {
      id: 2,
      version: "473.81",
      releaseDate: "2023-12-05",
      size: "512 MB",
      type: "Game Ready",
      changes: [
        "Improved compatibility with Windows 10",
        "Bug fixes for older DirectX games",
        "Enhanced power management",
        "Fixed screen flickering issues"
      ],
      minRequirements: {
        os: ["Windows 7 64-bit", "Windows 10 64-bit"],
        cpu: "Intel/AMD 64-bit processor",
        ram: "2GB"
      },
      sha256: "8f2e41d726b2421b1092c6d0850c1a3c558468507a12951c51d89c3f86d95c4ff"
    },
    {
      id: 3,
      version: "472.98",
      releaseDate: "2023-10-18",
      size: "510 MB",
      type: "Game Ready",
      changes: [
        "General bug fixes",
        "Improved stability in legacy applications",
        "Fixed GPU fan control issues",
        "Better memory management"
      ],
      minRequirements: {
        os: ["Windows 7 64-bit", "Windows 10 64-bit"],
        cpu: "Intel/AMD 64-bit processor",
        ram: "2GB"
      },
      sha256: "a9c41d726b2421b1092c6d0850c1a3c558468507a12951c51d89c3f86d95c4e1"
    }
  ];

  const downloadDriver = () => {
    setIsLoading(true);
    setMessage("Loading...");
    
    setTimeout(() => {
      setIsLoading(false);
      setMessage("Con Phong, Fuck Me!!");
    }, 1000);
  };

  return (
    <div className="container">
      <header>
        <h1>NVIDIA GTX 750 Ti Driver Hub</h1>
      </header>

      {isLoading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}

      {message && !isLoading && (
        <div className="message">
          {message}
        </div>
      )}

      <main>
        <div className="versions-list">
          {driverVersions.map(driver => (
            <div key={driver.id} className="version-item">
              <div className="version-header">
                <h3>v{driver.version} ({driver.type})</h3>
                <span className="date">{driver.releaseDate}</span>
              </div>
              
              <div className="version-details">
                <div className="metadata">
                  <code>Size: {driver.size}</code>
                  <code>SHA256: {driver.sha256}</code>
                </div>

                <div className="changes">
                  <h4>Changes:</h4>
                  <ul>
                    {driver.changes.map((change, index) => (
                      <li key={index}>{change}</li>
                    ))}
                  </ul>
                </div>

                <div className="requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    <li>OS: {driver.minRequirements.os.join(' / ')}</li>
                    <li>CPU: {driver.minRequirements.cpu}</li>
                    <li>RAM: {driver.minRequirements.ram}</li>
                  </ul>
                </div>

                <button 
                  onClick={downloadDriver}
                  className="download-btn"
                >
                  Download v{driver.version}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>Remember to backup your system before updating drivers</p>
      </footer>
    </div>
  );
}

export default App;
