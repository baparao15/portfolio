<?php include 'includes/header.php'; ?>

    <!-- Resume Container -->
    <div class="container mt-4">
        <div class="container my-5">
        <div class="text-center mb-5">
            <h1 class="section-title fw-bold">My Portfolio</h1>
            <p class="lead">Showcasing My Latest Work</p>
        </div>

        <!-- Education Section -->
        <div class="mt-4">
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="glass-card p-4 h-100">
                        <div class="d-flex align-items-center mb-3">
                            <i class="fas fa-graduation-cap fa-2x me-3" style="color: var(--primary)"></i>
                            <div>
                                <h4 class="gradient-text mb-1">B.Tech in Computer Science</h4>
                                <p class="text-muted mb-0">2023 - Present</p>
                            </div>
                        </div>
                        <p class="mb-0">Focusing on advanced algorithms, software engineering, and modern web technologies.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="glass-card p-4 h-100">
                        <div class="d-flex align-items-center mb-3">
                            <i class="fas fa-certificate fa-2x me-3" style="color: var(--secondary)"></i>
                            <div>
                                <h4 class="gradient-text mb-1">Online Certifications</h4>
                                <p class="text-muted mb-0">Various Platforms</p>
                            </div>
                        </div>
                        <p class="mb-0">Additional courses in web development, cloud computing, and data structures.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Skills Section -->
        <section class="mb-5">
            <h2 class="section-title mb-4">Technical Skills</h2>
            <div class="row g-4">
                <!-- Programming Languages -->
                <div class="card h-100 shadow-sm">
                
                    <div class="card-body">
                        <h5 class="card-title gradient-text">E-commerce Website</h5>
                        <p class="card-text">A fully responsive e-commerce platform built with modern technologies.</p>
                        <div class="d-flex gap-2">
                            <span class="badge" style="background: var(--primary)">HTML</span>
                            <span class="badge" style="background: var(--secondary)">CSS</span>
                            <span class="badge" style="background: var(--accent)">JavaScript</span>
                        </div>
                    </div>
                </div>
                <!-- Web Technologies -->
                <div class="col-lg-4">
                    <div class="skill-card h-100">
                        <i class="fas fa-globe skill-icon"></i>
                        <h4 class="gradient-text mb-3">Web Dev</h4>
                        <div class="d-flex flex-wrap gap-2">
                            <span class="badge" style="background: var(--primary)">React</span>
                            <span class="badge" style="background: var(--secondary)">Node.js</span>
                            <span class="badge" style="background: var(--accent)">HTML5/CSS3</span>
                            <span class="badge" style="background: var(--primary-dark)">Bootstrap</span>
                        </div>
                    </div>
                </div>
                <!-- Tools & Technologies -->
                <div class="col-lg-4">
                    <div class="skill-card h-100">
                        <i class="fas fa-tools skill-icon"></i>
                        <h4 class="gradient-text mb-3">Tools</h4>
                        <div class="d-flex flex-wrap gap-2">
                            <span class="badge" style="background: var(--primary)">Git</span>
                            <span class="badge" style="background: var(--secondary)">VS Code</span>
                            <span class="badge" style="background: var(--accent)">Docker</span>
                            <span class="badge" style="background: var(--primary-dark)">AWS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <h2>Summary</h2>
            <p>Confident and motivated B.Tech Computer Science student at SRM University, AP. Eager to learn and develop new technical skills, with a strong interest in problem-solving and technology. A dependable individual with excellent communication and analytical abilities, ready to contribute to innovative projects and work hard in a professional environment.</p>
        </div>

        <!-- Projects Section -->
        <div class="mt-4">
            <h2 class="mb-3">My Projects</h2>
            <div class="row">
                <!-- Project 1 -->
                <div class="col-md-6 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Banking Management in C++</h3>
                            <p class="card-text">Developed a modular banking system with functionalities such as account creation, transactions, and balance checks using object-oriented principles.</p>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="col-md-6 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Debt Management System</h3>
                            <p class="card-text">Implemented an optimized debt settlement program using Min-Heap structures to efficiently manage and reduce multiple transactions.</p>
                        </div>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="col-md-6 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Personal Portfolio Website</h3>
                            <p class="card-text">Designed and built a personal portfolio using HTML, CSS, and JavaScript to showcase projects, skills, and contact information.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php include 'includes/footer.php'; ?>
