import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const Experience = () => {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Nemooneh High School, Dehdasht, Iran
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        High School Diploma
                    </h4>
                    <p>Mathematics and Physics</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2006 - 2010"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Petroleum University of Technology, Ahvaz, Iran
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor's Degree
                    </h4>

                    <p>Petroleum Enginnering</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2010 - 2012"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                         University of Tehran, Tehran, Iran
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Master's Degree
                    </h4>

                    <p>Petroleum Enginnering</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2013 - 2018"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Research Institute of Petroleum Industry, Tehran, Iran
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        PhD Degree
                    </h4>

                    <p>Petroleum Enginnering</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - present"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Research Asistant, Research Institute of Petroleum Industry
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Tehran, Iran
                    </h4>
                    <p>
                        Conducting research on reservoir rocks and fluids 
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021 - present"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Front-End Web Developer - Freelancer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Tehran, Iran
                    </h4>
                    <p>
                        Learning, and doing some web development projects as a freelancer 
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Experience;