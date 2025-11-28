import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'project 1',
      category: 'structural',
      location: 'Blck 3 Industrial',
      year: '2024',
      description: 'Design and construction oversight of a modern 50,000 sq ft transit facility serving over 100,000 daily commuters.',
      image: '🏗️',
      tags: ['Structural Design', 'Public Infrastructure', 'Sustainable']
    },
    {
      id: 2,
      title: 'project 2',
      category: 'structural',
      location: 'Kweneng District',
      year: '2023',
      description: 'Complete structural engineering for a mixed-use development including retail, office, and residential spaces.',
      image: '🏢',
      tags: ['Commercial', 'Mixed-Use', 'Urban Development']
    },
    {
      id: 3,
      title: 'project 3',
      category: 'geotechnical',
      location: 'Gaborone',
      year: '2024',
      description: 'Comprehensive geotechnical investigation and foundation design for coastal development project.',
      image: '⛰️',
      tags: ['Soil Analysis', 'Foundation', 'Coastal Engineering']
    },
    {
      id: 4,
      title: 'project 4',
      category: 'environmental',
      location: 'Innovation Park',
      year: '2023',
      description: 'Environmental impact assessment and sustainable design consultation for corporate technology campus.',
      image: '🌱',
      tags: ['Sustainability', 'LEED Certified', 'Environmental']
    },
    {
      id: 5,
      title: 'project 5',
      category: 'structural',
      location: 'A1',
      year: '2022',
      description: 'Seismic retrofit and structural reinforcement of critical highway infrastructure.',
      image: '🌉',
      tags: ['Bridges', 'Seismic', 'Infrastructure']
    },
    {
      id: 6,
      title: 'project 6',
      category: 'geotechnical',
      location: 'Industrial Zone',
      year: '2023',
      description: 'Site investigation, soil testing, and foundation recommendations for 200-acre industrial development.',
      image: '🏭',
      tags: ['Industrial', 'Site Investigation', 'Large Scale']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'structural', label: 'Structural' },
    { id: 'geotechnical', label: 'Geotechnical' },
    { id: 'environmental', label: 'Environmental' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title fade-in">Our Projects</h2>
          <p className="section-description fade-in">
            Explore our portfolio of successful engineering projects across various sectors. 
            Each project demonstrates our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
                <div className="project-overlay">
                  <button className="btn btn-primary btn-icon">
                    <ExternalLink size={20} />
                    View Details
                  </button>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-meta-item">
                    <MapPin size={16} />
                    {project.location}
                  </span>
                  <span className="project-meta-item">
                    <Calendar size={16} />
                    {project.year}
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
