import "./style.css";
import { isIE } from 'react-device-detect'

export default function Home() {
  
  if (isIE) {
    return (
      <div>
        <h1>Hi there. You’re using an outdated browser</h1>
        <p>For a safer and faster user experience use a modern browser like Chrome, Firefox, Safari, Opera, or Edge.</p>
      </div>
    )
  } else {
    return (
      <div>
        <div className="topnav">
          <input type="text" placeholder="Search offered services..." />
        </div>
        <header id="mainheader" className="grid">
          <div className="bg-image"></div>
          <div className="content-wrap">
            <h1>Welcome to A to Z Computer Repair!</h1>
            <p>
              A to Z Computer Repair can take care of all of your computer needs
              from A to Z.
            </p>
            <a href="#section-b" className="btn">
              Learn More
            </a>
          </div>
        </header>
        <main id="main">
          <section id="section-a" className="grid">
            <div className="content-wrap">
              <h2 className="content-title">
                We offer a wide range of services including:
              </h2>
              <div className="content-text">
                <ul>
                  <li>General System Troubleshooting & Diagnostics</li>
                  <li>Software Specific Troubleshooting & Diagnostics</li>
                  <li>System/Software Updates</li>
                  <li>Hard Drive & File System Organization/Cleaning</li>
                  <li>Software Installation/Configuration</li>
                  <li>Adware Identification/Removal</li>
                  <li>Malware Identification/Removal</li>
                  <li>Custom Requested Services</li>
                </ul>
              </div>
            </div>
          </section>
          {/* Section B */}
          <section id="section-b" className="grid">
            <ul>
              <li>
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                    alt=""
                  />
                  <div className="card-content">
                    <h3 className="card-title">
                      <a href="/list">Browse Services</a>
                    </h3>
                    <p>
                      Browse through various remote computer repair services
                      offered.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <div className="card-content">
                    <h3 className="card-title">
                      <a href="/email">Get a Quote</a>
                    </h3>
                    <p>
                      Retrieve an estimated cost quote on your chosen services.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          {/* Section C */}
          <section id="section-c" className="grid">
            <div className="content-wrap">
              <h2 className="content-title">Follow Us on Social Media</h2>
              <p>
                Facebook & Twitter:
                <br />A to Z Computer Repair DC
              </p>
            </div>
          </section>
          {/* Section D */}
          <section id="section-d" className="grid">
            <div className="box">
              <h2 className="content-title">How to Reach Us</h2>
              <p>
                Phone:
                <br />
                555-123-4567
                <br />
              </p>
              <p>
                Email:
                <br />
                a2z_cptr_repair@email.com
                <br />
              </p>
              <p>
                Address: <br />
                123 Main St.
                <br />
                Washington, DC 20005
              </p>
            </div>
            <div className="box">
              <h2 className="content-title">About Our Company</h2>
              <p>
                A to Z Computer Repair was founded in 2021 by three UMGC college
                students.
              </p>
              <p>
                We are dedicated, flexible, cost-efficient and aim to be your
                source for all computer needs from A to Z. We offer a variety of
                services to support our customers who need assistance on-site or
                remotely.
              </p>
              <p>
                Our goal is to help customers get the most out of their technology
                investment.
              </p>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer id="main-footer" className="grid">
          <div>UMGC CMSC 495 - 6380 Group 1</div>
          <div>Project By Group 1: Kelly, Joe & Fey</div>
        </footer>
      </div>
    );
    }
}
