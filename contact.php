<?php
// Handle form submission
$message = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $message_text = trim($_POST["message"]);

    // Regular Expressions for Validation
    $nameRegex = "/^[A-Za-z\s]+$/";
    $emailRegex = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";

    // Validating Input
    if (!preg_match($nameRegex, $name)) {
        $message = "<div class='alert alert-danger'>Error: Enter a valid name (letters and spaces only).</div>";
    } elseif (!preg_match($emailRegex, $email)) {
        $message = "<div class='alert alert-danger'>Error: Enter a valid email address.</div>";
    } elseif (strlen($message_text) < 10) {
        $message = "<div class='alert alert-danger'>Error: Your message must be at least 10 characters long.</div>";
    } else {
        // Save data into a text file
        $file = "submissions.txt";
        $data = "Name: $name | Email: $email | Message: $message_text" . PHP_EOL;
        file_put_contents($file, $data, FILE_APPEND);

        $message = "<div class='alert alert-success'>Message sent successfully!</div>";
    }
}
?>

<?php
include 'includes/header.php';
?>

    <!-- Contact Section -->
    <div class="container my-5">
        <div class="text-center mb-5">
            <h1 class="section-title">Get In Touch</h1>
            <p class="lead text-muted">Let's Create Something Amazing Together</p>
        </div>

        <div class="row justify-content-center g-4">
            <!-- Email Card -->
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body text-center p-4">
                        <div class="icon-circle mb-4">
                            <i class="fas fa-envelope fa-2x" style="color: var(--primary)"></i>
                        </div>
                        <h4 class="gradient-text mb-3">Email</h4>
                        <p class="text-muted mb-4">Ready to discuss your project? Drop me a message!</p>
                        <a href="mailto:contact@example.com" class="btn btn-primary w-100">Send Email</a>
                    </div>
                </div>
            </div>

            <!-- LinkedIn Card -->
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body text-center p-4">
                        <div class="icon-circle mb-4">
                            <i class="fab fa-linkedin fa-2x" style="color: var(--secondary)"></i>
                        </div>
                        <h4 class="gradient-text mb-3">LinkedIn</h4>
                        <p class="text-muted mb-4">Let's connect professionally and grow together!</p>
                        <a href="https://www.linkedin.com" target="_blank" class="btn btn-primary w-100">Connect</a>
                    </div>
                </div>
            </div>

            <!-- GitHub Card -->
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body text-center p-4">
                        <div class="icon-circle mb-4">
                            <i class="fab fa-github fa-2x" style="color: var(--accent)"></i>
                        </div>
                        <h4 class="gradient-text mb-3">GitHub</h4>
                        <p class="text-muted mb-4">Check out my code and contributions!</p>
                        <a href="https://github.com" target="_blank" class="btn btn-primary w-100">View Projects</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contact Form -->
        <div class="row justify-content-center mt-5">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body p-4">
                        <h4 class="gradient-text text-center mb-4">Send Message</h4>
                        <?php echo $message; ?>
                        <form method="post" action="contact.php">
                            <div class="mb-3">
                                <input type="text" name="name" class="form-control" placeholder="Your Name" required>
                            </div>
                            <div class="mb-3">
                                <input type="email" name="email" class="form-control" placeholder="Your Email" required>
                            </div>
                            <div class="mb-3">
                                <textarea name="message" class="form-control" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php include 'includes/footer.php'; ?>
