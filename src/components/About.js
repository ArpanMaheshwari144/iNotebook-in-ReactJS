import React from "react";

const About = () => {
  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              iNoteBook Description
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>What is iNoteBook?</strong>
              <p>
                iNoteBook is a React Application for managing personal notes on
                the cloud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
