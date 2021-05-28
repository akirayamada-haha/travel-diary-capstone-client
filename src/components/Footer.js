import React, { Component } from "react";

export class footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <section class="contact" id="contact">
            <ul class="contact-list">
              <li>
                <a href="mailto:evanpoe91@yahoo.com?subject=Responding%20to%20Your%20Portfolio!">
                  <i class="fa fa-envelope"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/evan-poe-full-stack-developer/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/EvanPoe" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </section>
          <h4>© 2019-2021 Evan Poe</h4>
          <a href="#top">
            <i className="far fa-caret-square-up fa-2x"></i>
          </a>
        </footer>
      </div>
    );
  }
}

export default footer;
