import React from 'react';
import { Building2, Mountain, Leaf, ClipboardCheck, Ruler, FileCheck } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Building2 size={40} />,
      title: 'Civil and Structural Engineering',
      description: 'Comprehensive civil and structural design solutions for infrastructure, buildings, and industrial facilities. We ensure safety, durability, and compliance with international codes and standards.',
      features: ['Building Design', 'Structural Analysis', 'Infrastructure Development', 'Load Calculations']
    },
    {
      icon: <Ruler size={40} />,
      title: 'Electrical & Mechanical Engineering',
      description: 'Complete electrical and mechanical engineering services for industrial, commercial, and residential projects. From power systems to HVAC design, we deliver integrated solutions.',
      features: ['Power Systems Design', 'HVAC Engineering', 'Electrical Distribution', 'Mechanical Systems']
    },
    {
      icon: <Leaf size={40} />,
      title: 'Water Resources Studies',
      description: 'Expert water resources engineering including hydrology, hydraulics, and water supply systems. We provide sustainable solutions for water management and conservation.',
      features: ['Hydrological Studies', 'Water Supply Design', 'Drainage Systems', 'Flood Management']
    },
    {
      icon: <Mountain size={40} />,
      title: 'Mineral Exploration and Resource Evaluation',
      description: 'Specialized mineral exploration services and resource evaluation using advanced geological and geophysical methods. We support mining projects from exploration to feasibility studies.',
      features: ['Geological Surveys', 'Resource Estimation', 'Feasibility Studies', 'Mining Engineering']
    },
    {
      icon: <Leaf size={40} />,
      title: 'Environmental Studies',
      description: 'Comprehensive environmental impact assessments and sustainability consulting. We help you meet regulatory requirements while minimizing environmental footprint.',
      features: ['Impact Assessment', 'Environmental Compliance', 'Sustainability Consulting', 'Ecological Studies']
    },
    {
      icon: <ClipboardCheck size={40} />,
      title: 'Geographic Information Systems (GIS)',
      description: 'Advanced GIS services for spatial data analysis, mapping, and decision support. We leverage cutting-edge technology for effective project planning and management.',
      features: ['Spatial Analysis', 'Digital Mapping', 'Database Management', 'Remote Sensing']
    },
    {
      icon: <FileCheck size={40} />,
      title: 'Training',
      description: 'Professional training programs in engineering, GIS, and technical skills development. We empower teams with knowledge and expertise to excel in their fields.',
      features: ['Technical Training', 'Capacity Building', 'Workshops & Seminars', 'Professional Development']
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title fade-in">Our Services</h2>
          <p className="section-description fade-in">
            Comprehensive engineering solutions tailored to your project needs. 
            We combine technical expertise with innovative approaches to deliver exceptional results.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-secondary service-btn">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
