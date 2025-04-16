<?php include 'includes/header.php'; ?>

    <!-- Hero Section -->
    <div class="container-fluid hero-section min-vh-100 d-flex align-items-center">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 text-center text-md-start">
                    <h1 class="display-4 fw-bold mb-4">Welcome to Bapa's <span class="gradient-text">Portfolio</span></h1>
                    <p class="lead mb-4">Passionate about creating beautiful and functional web experiences</p>
                    <a href="portfolio.php" class="btn btn-primary btn-lg px-4 py-2">View My Work</a>
                </div>
                <div class="col-md-6 text-center">
                    <div class="profile-container">
                        <img src="images/dp.png" alt="Profile" class="img-fluid rounded-circle profile-img shadow-lg" style="width: 200px; height: 200px; object-fit: cover; border: 4px solid #fff;">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="container my-5 py-5">
        <!-- Image Section -->
        <div class="row justify-content-center mb-5">
            <div class="col-lg-8 text-center">
                <div class="position-relative d-inline-block">
                    <div class="bg-warning position-absolute" style="width: 100%; height: 100%; transform: rotate(-5deg); z-index: 1;"></div>
                    <img src="images/image.png" alt="Developer" class="img-fluid rounded position-relative" style="z-index: 2;">
                </div>
            </div>
        </div>

        <!-- About Me Section -->
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="card bg-light text-dark border-warning">

                    <div class="card-body p-4">
                        <h2 class="text-warning mb-4 text-center"><i class="fas fa-code me-2"></i>About Me</h2>
                        <div class="row mb-4">
                            <div class="col-md-6">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-laptop-code fs-2 text-primary me-3"></i>
                                    <h4 class="mb-0">Development</h4>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-puzzle-piece fs-2 text-warning me-3"></i>
                                    <h4 class="mb-0">Problem Solving</h4>
                                </div>
                            </div>
                        </div>
                        <p class="lead text-center">
                            A passionate Computer Science student with a deep interest in creating elegant solutions through code.
                        </p>
                        <div class="row mt-4">
                            <div class="col-md-6 mb-3">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-laptop-code text-warning me-2"></i>
                                    <h5 class="mb-0">Development</h5>
                                </div>
                                <p>Specialized in full-stack development with modern technologies.</p>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-brain text-warning me-2"></i>
                                    <h5 class="mb-0">Problem Solving</h5>
                                </div>
                                <p>Strong foundation in algorithms and data structures.</p>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-users text-warning me-2"></i>
                                    <h5 class="mb-0">Teamwork</h5>
                                </div>
                                <p>Experience in collaborative development and hackathons.</p>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-rocket text-warning me-2"></i>
                                    <h5 class="mb-0">Innovation</h5>
                                </div>
                                <p>Passionate about creating impactful solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- About Section -->
        <div class="row g-4 py-5">
            <div class="col-md-6">
                <div class="card h-100 p-4 shadow-sm">
                    <h2 class="gradient-text mb-4">About Me</h2>
                    <p class="lead">I am a passionate web developer with expertise in creating modern and responsive websites.</p>
                    <p>With a strong foundation in both front-end and back-end development, I strive to deliver high-quality solutions that meet client needs.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card h-100 p-4 shadow-sm">
                    <h2 class="gradient-text mb-4">Skills</h2>
                    <div class="skill-bars">
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between mb-2">
                                <span>HTML/CSS</span>
                                <span class="gradient-text">90%</span>
                            </div>
                            <div class="progress" style="height: 8px;">
                                <div class="progress-bar" role="progressbar" style="width: 90%; background: linear-gradient(45deg, #2a9df4, #4c6ef5);" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between mb-2">
                                <span class="text-muted">JavaScript</span>
                                <span class="gradient-text">85%</span>
                            </div>
                            <div class="progress" style="height: 8px;">
                                <div class="progress-bar" role="progressbar" style="width: 85%; background: linear-gradient(45deg, #2a9df4, #4c6ef5);" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="d-flex justify-content-between mb-2">
                                <span class="text-muted">PHP</span>
                                <span class="gradient-text">80%</span>
                            </div>
                            <div class="progress" style="height: 8px;">
                                <div class="progress-bar" role="progressbar" style="width: 80%; background: linear-gradient(45deg, #2a9df4, #4c6ef5);" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Skills Section -->
        <div class="row mt-5 py-5">
            <div class="col-12 text-center mb-4">
                <h2 class="text-warning"><i class="fas fa-tools me-2"></i>Technical Skills</h2>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card bg-light text-dark border-warning h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-mobile-alt fa-3x text-warning mb-3"></i>
                        <h4>Responsive Design</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card bg-light text-dark border-warning h-100">
                    <div class="card-body text-center">
                        <i class="fab fa-js fa-3x text-warning mb-3"></i>
                        <h4>JavaScript</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card bg-light text-dark border-warning h-100">
                    <div class="card-body text-center">
                        <i class="fab fa-python fa-3x text-warning mb-3"></i>
                        <h4>Python</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card bg-light text-dark border-warning h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-database fa-3x text-warning mb-3"></i>
                        <h4>Databases</h4>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>

<?php include 'includes/footer.php'; ?>
