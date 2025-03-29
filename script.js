document.addEventListener('DOMContentLoaded', function() {
    // Ensure the DOM is fully loaded before executing JavaScript

    // ----- Mobile Navigation Toggle -----
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navList = document.querySelector('header nav ul');

    if (mobileNavToggle && navList) {
        mobileNavToggle.addEventListener('click', function() {
            navList.classList.toggle('open');
        });
    }

    // ----- Enhanced Signup Form Handling (Client-Side Simulation) -----
    const signupForm = document.querySelector('#signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            let isValid = true;
            const nameInput = signupForm.querySelector('#name');
            const emailInput = signupForm.querySelector('#email');
            const passwordInput = signupForm.querySelector('#password');
            const successMessage = document.querySelector('#signup-success-message'); // Add an element in your HTML for success message
            const errorMessage = document.querySelector('#signup-error-message');   // Add an element in your HTML for error message

            // Clear previous error messages
            clearErrors();

            // Validate Name
            if (!nameInput || nameInput.value.trim() === '') {
                displayError(nameInput, 'Name is required');
                isValid = false;
            }

            // Validate Email
            if (!emailInput || !isValidEmail(emailInput.value)) {
                displayError(emailInput, 'Please enter a valid email address');
                isValid = false;
            }

            // Validate Password
            if (!passwordInput || passwordInput.value.length < 6) {
                displayError(passwordInput, 'Password must be at least 6 characters long');
                isValid = false;
            }

            if (isValid) {
                // Simulate successful signup (in a real application, you would send data to a server here)
                if (successMessage) {
                    successMessage.textContent = 'Signup successful! You will be redirected shortly...';
                    successMessage.style.display = 'block';
                }
                if (errorMessage) {
                    errorMessage.style.display = 'none';
                }
                // You might want to redirect the user after a short delay
                // setTimeout(() => { window.location.href = '/dashboard'; }, 3000);
            } else {
                // Display a general error message
                if (errorMessage) {
                    errorMessage.textContent = 'There were errors in your submission. Please correct them.';
                    errorMessage.style.display = 'block';
                }
                if (successMessage) {
                    successMessage.style.display = 'none';
                }
            }
        });

        function displayError(inputElement, message) {
            if (inputElement) {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.textContent = message;
                inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
                inputElement.classList.add('error');
            }
        }

        function clearError(inputElement) {
            if (inputElement) {
                const errorDiv = inputElement.parentNode.querySelector('.error-message');
                if (errorDiv) {
                    errorDiv.remove();
                }
                inputElement.classList.remove('error');
            }
        }

        function clearErrors() {
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(message => message.remove());
            const errorInputs = document.querySelectorAll('.error');
            errorInputs.forEach(input => input.classList.remove('error'));
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }

    // ----- Dynamic Blog Post Loading (Client-Side Simulation) -----
    const blogGrid = document.querySelector('.blog-grid');
    if (blogGrid) {
        const blogPosts = [
            { title: 'Understanding Market Volatility', excerpt: 'Learn about the factors that cause market fluctuations.', link: 'blog-post-1.html' },
            { title: 'Top 5 Tips for New Traders', excerpt: 'Essential advice to help you start your trading journey on the right foot.', link: 'blog-post-2.html' },
            { title: 'The Importance of Risk Management', excerpt: 'Discover why managing risk is crucial for successful trading.', link: 'blog-post-3.html' }
            // Add more blog posts here
        ];

        blogPosts.forEach(post => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            blogCard.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="${post.link}" class="read-more">Read More</a>
            `;
            blogGrid.appendChild(blogCard);
        });
    }

    // ----- Simple "Learn More" Button Functionality (Example) -----
    const learnMoreButtons = document.querySelectorAll('.hero-buttons .button.secondary');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Navigating to the learning resources page...');
            window.location.href = 'learn.html'; // Redirect to the learn page
        });
    });

    // ----- You can add more interactive features here based on your website's needs -----
});
