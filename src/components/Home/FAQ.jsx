import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import "./FAQStyles.css"
const FAQ = () => {
      useEffect(()=>{
        const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    currentlyActiveAccordionItemHeader.classList.toggle("active");
    currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});
      })
  return (
    <FAQTag>
      <div className='reveal'>
          <h1>Frequently Asked Questions</h1>

<div className="accordion">
    <div className="accordion-item">
        <div className="accordion-item-header">
          Which subjects are considered in the process of Department Change?
        </div>
        <div className="accordion-item-body">
            <div className="accordion-item-body-content">
            In the online academic sessions, 7 theory subjects were considered for DepC but in the offline sessions all subjects other than EAA are considered.</div>
        </div>
    </div>
    
    <div className="accordion-item">
        <div className="accordion-item-header">
        What should I do if my allotted mentor does not respond to my queries?
        </div>
        <div className="accordion-item-body">
            <div className="accordion-item-body-content">
            You can mail your grievance along with your and your mentor's details to us at info.swgiitkgp@gmail.com.</div>
        </div>
    </div>
    <div className="accordion-item">
        <div className="accordion-item-header">
        What is an additional subject, and what are the rules regarding an additional subject?
        </div>
        <div className="accordion-item-body">
            <div className="accordion-item-body-content">
            Additional subjects are the subjects, not covered in the regular curriculum requirement, which the students can choose from 3rd year onwards to explore their interests. Students with CGPA greater than or equal to 7.50 without any backlog are allowed to choose additional subject(s) (maximum 5 per semester). The grades obtained in the additional subjects do not contribute to the SGPA/CGPA of a student.
            </div>
        </div>
    </div>
    <div className="accordion-item">
        <div className="accordion-item-header">
        Where can I get details about scholarships?
        </div>
        <div className="accordion-item-body">
            <div className="accordion-item-body-content">
            You may see the Academic Information on the Resources page of this site.
            </div>
        </div>
    </div>
    <div className="accordion-item">
        <div className="accordion-item-header">
        What is a breadth subject?
        </div>
        <div className="accordion-item-body">
            <div className="accordion-item-body-content">
            A portion of the curriculum includes breadth subjects. There is a curriculum that is specific to each department. However, breadth is a required component of the curriculum that is typically unconnected to the parent department, and your GPA in breadth counts toward your overall GPA.</div>
            </div>
    </div>
    <div className="accordion-item">
        <div className="accordion-item-header">
        Where can I get details about the future prospects of each department?
        </div>
        <div className="accordion-item-body">
            <div className="accordion-item-body-content">
            You can look at our Know Your Department blogs in the blogs page of this website to read the answers to Frequently Asked Questions about your respective departments.</div>
        </div>
    </div>
    <div className="accordion-item">
        <div className="accordion-item-header">
        Can BTech students sit for CDC internships again next year after converting to dual degree?
        </div>
        <div className="accordion-item-body">
          <div className="accordion-item-body-content">
          No, students cannot for CDC internship twice. You will have to get an off-campus internship for the compulsory internship in 4th year.
          </div>
        </div>
    </div>
</div></div>
    </FAQTag>
  )
}

const FAQTag=styled.section`
  position: relative;
  padding-bottom: 6vh;
  min-padding-bottom: 32px;
  padding-top: 4vh;
  h1{
    font-weight: 700;
  }

`

export default FAQ