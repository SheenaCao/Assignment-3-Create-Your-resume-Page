document.addEventListener('DOMContentLoaded', function() {
    showSection('about'); // Automatically show "About Me" on load
});

function showSection(section) {
    const content = document.getElementById('content');
    content.style.opacity = '0'; // Fade out effect for transition

    setTimeout(() => { // Delay to allow fade effect
        switch(section) {
            case 'about':
                content.innerHTML = `
                    <h2>About Me</h2>
                    <p>As a driven Information Management professional currently making strides at GlenviewDX, I bring to the table a robust foundation in tech, honed through rigorous academic training and real-world application. My expertise spans across key programming languages such as Python, R, and C++, complemented by a strong proficiency in data analysis, database management, and cloud solutions. With a track record of translating complex data into actionable insights through impactful projects, I'm all set to tackle challenges and innovate within any dynamic work setting. Let's transform data into decisions together.</p>
                `;
                break;
            case 'education':
                content.innerHTML = `
                    <h2>Education</h2>
                    <ul>
                        <li><strong>University of Arizona</strong> | Bachelor of Science in Information Management, Expected Graduation: December 2024, Tucson AZ</li>
                        <li><strong>Dallas College Richland Campus</strong> | Associate of Science, Graduated: August 2022, Dallas TX</li>
                    </ul>
                `;
                break;
            case 'skills':
                content.innerHTML = `
                    <h2>Technical Skills</h2>
                    <ul>
                        <li>Programming Languages: Python, R, C++</li>
                        <li>Database Management: MySQL, PostgreSQL, MongoDB, Oracle</li>
                        <li>Data Visualization: Tableau, Power BI, Excel, Matplotlib, Seaborn, ggplot2, Plotly</li>
                        <li>Cloud Computing & Deployment: AWS, Google Cloud Platform, Microsoft Azure, Git</li>
                    </ul>
                `;
                break;
            case 'experience':
                content.innerHTML = `
                    <h2>Academic Projects</h2>
                    <ul>
                        <li><strong>Excel-Driven Airbnb Reporting Automation</strong> (February 2024): Led the development of an Excel VBA-based automation framework to streamline Airbnb listing report generation, enhancing efficiency and reducing manual effort. Created dynamic, interactive Excel dashboards for real-time performance metrics.</li>
                        <li><strong>Gender Based Earnings Gap in The U.S. Workforce - An Exploratory Statistical Analysis</strong> (December 2023 - January 2024): Conducted advanced data visualization and analysis using R and ggplot2 to reveal gender pay disparities across different occupational categories. Applied Welch's t-test to confirm significant differences in median earnings between genders.</li>
                        <li><strong>Exploring Healthcare Disparities - Demographic Impact Analysis</strong> (September 2023 - October 2023): Utilized SQL, Python, and R with ggplot2 for a comprehensive analysis of healthcare disparities influenced by demographic factors, offering evidence-based recommendations for policy improvements.</li>
                    </ul>
                `;
                break;
            default:
                content.innerHTML = '<p>Please select a category to display information.</p>';
        }
        content.style.opacity = '1'; // Fade in effect for content
    }, 100);
}
