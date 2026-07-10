import { portfolioData } from './portfolioData.js';

document.addEventListener('DOMContentLoaded', () => {
  // Update footer year
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 1. Render Hero Section Details
  renderHero();

  // 2. Render About Section Details
  renderAbout();

  // 3. Render Experience Section
  renderExperience();

  // 4. Render Projects Section
  renderProjects();

  // 5. Render Skills & Profiles & Certifications
  renderSkillsAndProfiles();

  // 6. Render Education Section
  renderEducation();

  // 7. Render Achievements Section
  renderAchievements();

  // 8. Setup Interactive Visuals & Controls
  initAmbientParticles();
  initTypewriterEffect();
  initScrollAnimations();
  setupNavbarBehavior();
  setupContactFormHandler();
  
  // 9. Advanced 3D & Movement Effects
  init3DTilt();
  initMouseSpotlight();
  initMagneticButtons();
  initScrollSkew();
  initProjectsStackScroll();
});


// Render Hero data
function renderHero() {
  const info = portfolioData.personalInfo;
  
  // Set profile image
  const profileImg = document.getElementById('hero-profile-img');
  if (profileImg) {
    profileImg.src = info.avatarUrl;
    profileImg.alt = `${info.name} Photo`;
  }

  // Set description (with premium pill highlights)
  const tagline = document.getElementById('hero-tagline');
  if (tagline) {
    tagline.innerHTML = `
      Hi, I'm a Computer Science student specializing in 
      <span class="hero-pill-badge pill-purple">Data Science & AI</span> 
      at <span class="hero-pill-badge pill-blue">SRM University AP</span>. 
      Building research-grade <span class="hero-pill-badge pill-cyan">Machine Learning pipelines</span> and 
      highly scalable <span class="hero-pill-badge pill-orange">Full-Stack web applications</span>.
    `;
  }

  // Render social channels
  const socialContainer = document.getElementById('hero-socials');
  if (socialContainer) {
    const socials = [
      { url: info.github, icon: 'fa-brands fa-github', title: 'GitHub' },
      { url: info.linkedin, icon: 'fa-brands fa-linkedin-in', title: 'LinkedIn' },
      { url: `mailto:${info.email}`, icon: 'fa-solid fa-envelope', title: 'Email' },
      { url: info.instagram, icon: 'fa-brands fa-instagram', title: 'Instagram' }
    ];

    socialContainer.innerHTML = socials
      .map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-btn" title="${s.title}"><i class="${s.icon}"></i></a>`)
      .join('');
  }
}

// Render About data
function renderAbout() {
  const about = portfolioData.about;
  const info = portfolioData.personalInfo;

  // Set bio text
  const introText = document.getElementById('about-intro-text');
  if (introText) {
    introText.textContent = about.intro;
  }

  // Set stats
  const statsContainer = document.getElementById('about-stats-container');
  if (statsContainer) {
    statsContainer.innerHTML = about.stats
      .map(stat => `
        <div class="stat-item">
          <span class="stat-val">${stat.value}</span>
          <span class="stat-lbl">${stat.label}</span>
        </div>
      `).join('');
  }

  // Set details cards
  const detailUniv = document.getElementById('detail-univ');
  if (detailUniv) detailUniv.textContent = about.university;

  const detailEmail = document.getElementById('detail-email');
  if (detailEmail) {
    detailEmail.textContent = info.email;
    detailEmail.href = `mailto:${info.email}`;
  }
}

// Render Work Experience
function renderExperience() {
  const timeline = document.getElementById('experience-timeline');
  if (!timeline) return;

  timeline.innerHTML = portfolioData.experience
    .map((exp, index) => {
      const directionClass = index % 2 === 0 ? 'slide-left' : 'slide-right';
      return `
        <div class="timeline-item scroll-animate ${directionClass}" style="transition-delay: ${index * 100}ms">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-meta">
              <span class="timeline-date">${exp.date}</span>
              <span class="timeline-type">${exp.type}</span>
            </div>
            <h3>${exp.title}</h3>
            <span class="timeline-company">
              ${exp.link ? `<a href="${exp.link}" target="_blank" rel="noopener noreferrer" class="timeline-link" title="Verify Experience">${exp.company} <i class="fas fa-external-link-alt" style="font-size: 0.8rem;"></i></a>` : exp.company}
            </span>
            <ul class="timeline-bullets">
              ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    }).join('');
}



// Render Projects with responsive stacking layout & custom animated CSS mockups
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const gradients = ['grad-relaunch', 'grad-facial', 'grad-aether', 'grad-schrodinger', 'grad-eduquest', 'grad-bumblebee'];
  const icons = [
    'fa-solid fa-venus-mars',
    'fa-solid fa-face-smile',
    'fa-solid fa-pen-nib',
    'fa-solid fa-key',
    'fa-solid fa-graduation-cap',
    'fa-solid fa-volume-high'
  ];

  container.innerHTML = portfolioData.projects
    .map((p, index) => {
      const gradientClass = gradients[index % gradients.length];
      const iconClass = icons[index % icons.length];
      
      let mockupContent = '';
      if (index === 0) {
        mockupContent = `
          <div class="mockup-dashboard">
            <div style="width: 100px; height: 8px; background: rgba(255,255,255,0.15); border-radius: 4px; margin-bottom: 12px;"></div>
            <div style="display: flex; gap: 8px;">
              <div style="width: 40px; height: 30px; background: rgba(236,72,153,0.15); border: 1px solid rgba(236,72,153,0.3); border-radius: 4px;"></div>
              <div style="width: 40px; height: 30px; background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.3); border-radius: 4px;"></div>
            </div>
          </div>
        `;
      } else if (index === 1) {
        mockupContent = `
          <div class="mockup-face-grid"></div>
          <div style="margin-top: 12px; font-size: 0.7rem; color: #10b981; font-family: monospace; letter-spacing: 1px;">MESH DETECTED: 98.4%</div>
        `;
      } else if (index === 2) {
        mockupContent = `
          <div style="width: 80%; display: flex; flex-direction: column; gap: 8px;">
            <div style="height: 6px; width: 95%; background: rgba(255,255,255,0.15); border-radius: 2px;"></div>
            <div style="height: 6px; width: 70%; background: rgba(0, 242, 254, 0.45); border-radius: 2px;"></div>
            <div style="height: 6px; width: 85%; background: rgba(255,255,255,0.15); border-radius: 2px;"></div>
          </div>
        `;
      } else if (index === 3) {
        mockupContent = `
          <i class="fa-solid fa-lock" style="font-size: 2rem; color: #d946ef; margin-bottom: 10px;"></i>
          <div style="font-size: 0.7rem; font-family: monospace; color: rgba(255,255,255,0.4);">[PQC_AES_256_ACTIVE]</div>
        `;
      } else if (index === 4) {
        mockupContent = `
          <i class="fa-solid fa-graduation-cap" style="font-size: 2rem; color: #f97316; margin-bottom: 10px;"></i>
          <div style="width: 70px; height: 5px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden;">
            <div style="width: 75%; height: 100%; background: #f97316;"></div>
          </div>
        `;
      } else {
        mockupContent = `
          <div class="mockup-waveform">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <div style="margin-top: 10px; font-size: 0.7rem; color: var(--accent-cyan); font-family: monospace; letter-spacing: 0.5px;">Listening...</div>
        `;
      }

      return `
        <div class="glass-card project-card scroll-animate" style="--index: ${index}; transition-delay: ${index * 80}ms">
          <div class="project-info">
            <span class="project-category"><i class="${iconClass}"></i> PORTFOLIO CREATION</span>
            <h3>${p.title}</h3>
            <p class="project-desc">${p.description}</p>
            <div class="project-tags">
              ${p.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <div class="project-links">
              <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                <i class="fa-brands fa-github"></i> Source Code
              </a>
              ${p.demo && p.demo !== '#' ? `
                <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
              ` : ''}
            </div>
          </div>
          <div class="project-visual ${gradientClass}">
            <div class="mockup-window">
              <div class="mockup-header">
                <span class="mockup-dot red"></span>
                <span class="mockup-dot yellow"></span>
                <span class="mockup-dot green"></span>
              </div>
              <div class="mockup-body">
                ${mockupContent}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
}


// Render Skills, Certifications, Profiles
function renderSkillsAndProfiles() {
  // Skills Categories
  const skillsContainer = document.getElementById('skills-categories');
  if (skillsContainer) {
    const skillCats = [
      { title: 'Programming Languages', data: portfolioData.skills.languages, icon: 'fa-solid fa-code' },
      { title: 'Web Technologies', data: portfolioData.skills.webTech, icon: 'fa-solid fa-layer-group' },
      { title: 'Databases', data: portfolioData.skills.databases, icon: 'fa-solid fa-database' },
      { title: 'AI & Machine Learning', data: portfolioData.skills.aiMl, icon: 'fa-solid fa-brain' },
      { title: 'Tools & Technologies', data: portfolioData.skills.toolsTech, icon: 'fa-solid fa-screwdriver-wrench' }
    ];

    skillsContainer.innerHTML = skillCats
      .map((cat, index) => `
        <div class="glass-card skill-category-card scroll-animate" style="transition-delay: ${index * 80}ms">
          <h3><i class="${cat.icon}"></i> ${cat.title}</h3>
          <div class="skill-items-grid">
            ${cat.data.map(s => `
              <div class="skill-pill">
                <span>${s.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');
  }

  // Coding Profiles
  const profilesContainer = document.getElementById('coding-profiles-container');
  if (profilesContainer) {
    profilesContainer.innerHTML = portfolioData.codingProfiles
      .map(profile => `
        <a href="${profile.link}" target="_blank" rel="noopener noreferrer" class="profile-link-item" title="Visit ${profile.platform} Profile">
          <div class="profile-meta-group">
            <i class="${profile.icon}"></i>
            <div>
              <span class="profile-name-title">${profile.platform}</span>
              <span class="profile-username">@${profile.username}</span>
            </div>
          </div>
          <i class="fas fa-chevron-right profile-arrow"></i>
        </a>
      `).join('');
  }

  // Certifications
  const certsContainer = document.getElementById('certifications-container');
  if (certsContainer) {
    certsContainer.innerHTML = portfolioData.certifications
      .map(c => c.link ? `
        <a href="${c.link}" target="_blank" rel="noopener noreferrer" class="cert-item-link" title="Verify Certificate">
          <div class="cert-item">
            <div class="cert-icon-container">
              <i class="${c.icon}"></i>
            </div>
            <div class="cert-meta-info">
              <h4>${c.name} <i class="fas fa-external-link-alt cert-link-icon"></i></h4>
              <p>${c.issuer} &bull; ${c.date}</p>
            </div>
          </div>
        </a>
      ` : `
        <div class="cert-item">
          <div class="cert-icon-container">
            <i class="${c.icon}"></i>
          </div>
          <div class="cert-meta-info">
            <h4>${c.name}</h4>
            <p>${c.issuer} &bull; ${c.date}</p>
          </div>
        </div>
      `).join('');
  }

}

// Render Education
function renderEducation() {
  const container = document.getElementById('education-container');
  if (!container) return;

  container.innerHTML = portfolioData.education
    .map((edu, index) => `
      <div class="glass-card education-card scroll-animate" style="transition-delay: ${index * 80}ms">
        <span class="edu-duration">${edu.duration}</span>
        <h3>${edu.institution}</h3>
        <div class="edu-degree">${edu.degree}</div>
        <div class="edu-specialization">${edu.specialization}</div>
        <div class="edu-grade">${edu.grade}</div>
        <p class="edu-description">${edu.details}</p>
      </div>
    `).join('');
}


// Render Achievements
function renderAchievements() {
  const container = document.getElementById('achievements-container');
  if (!container) return;

  container.innerHTML = portfolioData.achievements
    .map((ach, index) => `
      <div class="glass-card achievement-card scroll-animate" style="transition-delay: ${index * 80}ms">
        <div class="ach-icon-circle">
          <i class="fas fa-${ach.icon}"></i>
        </div>
        <h3>${ach.link ? `<a href="${ach.link}" target="_blank" rel="noopener noreferrer" class="achievement-link" title="View Credentials">${ach.title} <i class="fas fa-external-link-alt" style="font-size: 0.8rem;"></i></a>` : ach.title}</h3>
        <p>${ach.detail}</p>
      </div>
    `).join('');
}



// Typing dynamic typewriter text
function initTypewriterEffect() {
  const element = document.getElementById('typewriter-text');
  if (!element) return;

  const words = [
    "AI/ML Engineer & Researcher",
    "Full-Stack Web Developer",
    "Computer Science Student",
    "Data Science Enthusiast"
  ];
  
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Deleting character
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40; // delete faster
    } else {
      // Adding character
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100; // standard typing speed
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at full word
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // pause before typing next word
    }

    setTimeout(type, typeSpeed);
  }

  // Start typing
  setTimeout(type, 1000);
}

// Particle Floating Background with Mouse Repulsion
function initAmbientParticles() {
  const container = document.getElementById('ambient-particles');
  if (!container) return;

  const particleCount = 30;
  const particleNodes = [];
  
  const mouse = { x: -1000, y: -1000 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 8 + 4; // 4px to 12px
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    container.appendChild(particle);

    particleNodes.push({
      node: particle,
      y: y,
      x: x,
      speed: Math.random() * 0.4 + 0.1,
      angle: Math.random() * Math.PI * 2,
      angleSpeed: Math.random() * 0.01 - 0.005,
      size: size
    });
  }

  // Frame tick animation for particles
  function animate() {
    particleNodes.forEach(p => {
      p.y -= p.speed;
      p.angle += p.angleSpeed;
      p.x += Math.sin(p.angle) * 0.2;

      // Mouse repulsion physics
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 120) {
        const force = (120 - distance) / 120;
        p.x += (dx / distance) * force * 5;
        p.y += (dy / distance) * force * 5;
      }

      // Wrap-around bounds checks
      if (p.y < -p.size) {
        p.y = window.innerHeight + p.size;
        p.x = Math.random() * window.innerWidth;
      }
      if (p.x < -p.size) {
        p.x = window.innerWidth + p.size;
      } else if (p.x > window.innerWidth + p.size) {
        p.x = -p.size;
      }

      p.node.style.transform = `translate3d(${p.x - parseFloat(p.node.style.left)}px, ${p.y - parseFloat(p.node.style.top)}px, 0)`;
    });
    
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  // Re-align on resize
  window.addEventListener('resize', () => {
    particleNodes.forEach(p => {
      p.x = Math.min(p.x, window.innerWidth);
      p.y = Math.min(p.y, window.innerHeight);
    });
  });
}


// Scroll Animations (reveals items as they scroll into view)
function initScrollAnimations() {
  const elements = document.querySelectorAll('.scroll-animate');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once visible, stop observing to prevent resetting layout
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters view
    });

    elements.forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    elements.forEach(el => el.classList.add('visible'));
  }
}

// Navbar Toggles & Menu active scroll tracking
function setupNavbarBehavior() {
  const header = document.querySelector('.header');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinksContainer = document.getElementById('nav-links');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  // Change Header background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll active link highlight tracking
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu Hamburger toggle
  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });

    // Close menu when navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
      });
    });
  }
}

// Contact form AJAX submission using Web3Forms (with mailto fallback)
function setupContactFormHandler() {
  const form = document.getElementById('contact-form');
  const modal = document.getElementById('message-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const submitBtn = document.getElementById('form-submit');

  if (form && modal && modalCloseBtn) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Set submit button state to loading
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
      }

      // Collect form values
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const subject = document.getElementById('form-subject').value;
      const message = document.getElementById('form-message').value;

      const accessKey = portfolioData.personalInfo.web3FormsAccessKey;

      // Helper function for mailto fallback redirection
      const triggerMailtoFallback = (reason) => {
        console.warn('Redirecting to mailto fallback due to:', reason);
        const mailtoUrl = `mailto:prateekpulkit124@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Prateek,\n\nMy name is ${name} (${email}).\n\n${message}`)}`;
        window.location.href = mailtoUrl;
      };

      // If key is not configured, warn user and use mailto client fallback
      if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
        alert("Portfolio is in Local Preview. To enable background delivery, request a free key from web3forms.com and paste it in src/portfolioData.js. Opening your mail client as a fallback!");
        triggerMailtoFallback("Access key not configured");
        
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        }
        return;
      }

      // Submit via Web3Forms API
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          subject: subject,
          message: message
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          console.log('Web3Forms Success:', data);
          // Show the confirmation popup
          modal.classList.add('active');
          form.reset();
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      })
      .catch(error => {
        console.error('Web3Forms Error:', error);
        alert('Oops! Direct background sending failed. Opening your default mail client as a fallback...');
        triggerMailtoFallback(error.message);
      })
      .finally(() => {
        // Reset submit button state
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        }
      });
    });

    modalCloseBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    // Close modal on clicking overlay background
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
}

// 3D Tilt Effect on hover
function init3DTilt() {
  const cards = document.querySelectorAll('.glass-card, .profile-frame');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      
      // Calculate tilts
      const tiltX = -(y - yc) / 10; // Max tilt: 10deg
      const tiltY = (x - xc) / 12;  // Max tilt: ~12deg
      
      card.style.setProperty('--rx', `${tiltX}deg`);
      card.style.setProperty('--ry', `${tiltY}deg`);
      
      // Reflection coordinates
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      card.style.setProperty('--mx', `${px}%`);
      card.style.setProperty('--my', `${py}%`);
    });
    
    card.style.transition = 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease';

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease';
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
      
      // Remove specular shine overlay smoothly
      setTimeout(() => {
        card.style.transition = 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease';
      }, 600);
    });
  });
}

// Follow spotlight glows
function initMouseSpotlight() {
  const spotlight = document.getElementById('spotlight');
  if (!spotlight) return;
  
  document.addEventListener('mousemove', (e) => {
    // Smoothen positioning using hardware acceleration transform
    spotlight.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });
}

// Magnetic pull on interactive buttons
function initMagneticButtons() {
  const interactives = document.querySelectorAll('.btn, .social-btn, .logo-text');
  
  interactives.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      // Distance from center
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      
      // Displace element slightly toward cursor
      el.style.transform = `translate3d(${x * 0.35}px, ${y * 0.35}px, 0) scale(1.05)`;
      if (el.classList.contains('logo-text')) {
        el.style.transform = `translate3d(${x * 0.2}px, ${y * 0.2}px, 0)`;
      }
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transform = 'translate3d(0, 0, 0) scale(1)';
      
      setTimeout(() => {
        el.style.transition = '';
      }, 500);
    });
  });
}

// 3D Velocity-based Scroll Skew (Tilts elements forward/backward when scrolling)
function initScrollSkew() {
  let lastScrollY = window.scrollY;
  let scrollTimeout;
  let targetSkew = 0;
  let currentSkew = 0;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const diff = currentScrollY - lastScrollY;
    lastScrollY = currentScrollY;

    // Skew based on scroll velocity (capped at -5deg to 5deg)
    targetSkew = Math.max(Math.min(diff * 0.05, 5), -5);

    // Clear return timeout
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      targetSkew = 0;
    }, 100);
  }, { passive: true });

  // Update skew smoothly via requestAnimationFrame
  function update() {
    currentSkew += (targetSkew - currentSkew) * 0.08;

    const skewElements = document.querySelectorAll('.glass-card, .timeline-content, .profile-frame');
    skewElements.forEach(el => {
      // Retain individual element hover tilts if any
      const rx = parseFloat(el.style.getPropertyValue('--rx')) || 0;
      const ry = parseFloat(el.style.getPropertyValue('--ry')) || 0;
      
      // Combine hover rotation with scroll skew
      el.style.transform = `perspective(1000px) rotateX(${rx + currentSkew}deg) rotateY(${ry}deg) scale3d(1, 1, 1)`;
    });

    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// 3D Sticky Projects Stacking Scroll Effect (updates cards scale/opacity on scroll)
function initProjectsStackScroll() {
  const isMobile = () => window.innerWidth < 992;
  
  function update() {
    const cards = document.querySelectorAll('.project-card');
    if (cards.length === 0 || isMobile()) {
      // Revert inline styles on mobile views
      cards.forEach(card => {
        card.style.transform = '';
        card.style.filter = '';
        card.style.opacity = '';
      });
      return;
    }
    
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const topOffset = rect.top - 120; // 120px sticky threshold
      
      if (topOffset < 0) {
        // Compute progress based on scroll height (max out at 400px scroll)
        const progress = Math.min(Math.abs(topOffset) / 400, 1);
        const scale = 1 - progress * 0.04;        // down to 0.96
        const opacity = 1 - progress * 0.3;        // down to 0.7
        const brightness = 1 - progress * 0.25;    // down to 0.75
        
        card.style.transform = `perspective(1000px) scale(${scale}) translateY(${topOffset * 0.1}px)`;
        card.style.filter = `brightness(${brightness})`;
        card.style.opacity = `${opacity}`;
      } else {
        card.style.transform = 'perspective(1000px) scale(1) translateY(0)';
        card.style.filter = 'brightness(1)';
        card.style.opacity = '1';
      }
    });
  }
  
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
}



