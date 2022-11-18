export let listJobs = [
    {
        company:'Global Rewards USA',
        title: 'Full Stack Developer',
        dates: {
            start: 'NOVEMBER 2020'
        },
        location: 'BOCA RATON FLORIDA',
        responsibilities: [
            'Designed and developed extensible front-end Vue components as well as back-end classes, objects and architecture using Laravel',
            'Spearheaded an app wide migration from event driven to state based architecture using Vuex',
            'Advised peers on best practices and techniques for ES6, Vue/Vuex, Laravel and Jest',
            'Constructed unit tests to ensure components functioning as expected using Jest',
            'Produced and augmented REST APIs to serve the client (web app) and customer needs',
            'Created microservices to enable our models to consume third-party APIs using a consistent and maintainable API',
            'Administered code review in order to ensure quality and efficiency during development life-cycle',
            'Approved pull requests for release to production',
            'Conducted onboarding and training sessions on resources such as Git, Unit Tests and IDE tools',
            'Authored training materials and documents for review and reference by other developers',
            'Directed project meetings',
            'Coordinated major version releases with entire team',
            'Researched and implemented Devops and IDE tools to improve work efficiency. Examples include client and server side debugging tools, custom utilities for writing unit tests, configuring Postman for REST API dev and test purposes',
        ]
    },
    {
        company:'Legacy Research Group',
        title:'Fullstack Developer',
        dates: {
            start: 'MARCH 2019',
            end:'OCTOBER 2020',
        },
        location: 'DELRAY BEACH FLORIDA',
        responsibilities: [
            'Architected and developed robust, efficient, code standards compliant OOP focused frameworks allowing the company to scale from five to nine sites with potential for unrestrained future growth using PHP7, ES6, SCSS, for use across multiple sites ',
            'Investigated and resolved bugs in server side (PHP) and client side code (JS) using modern debugging tools such as Xdebug and Chrome Devtools debugging',
            'Created and championed the implementation of maintenance and utility scripts using Bash for local git automation to be extended and integrated with our AWS EC2 instances',
            'Researched, constructed and directed the employment of SQL queries for database maintenance',
            'Instituted coding standards and naming conventions for company repositories using PHP7, JS, NPM, and SCSS',
            'Advanced the utilization of local development environment tools such as VMs, Vagrant and Docker',
            'Directed the review and implementation of 3rd party developer apps on company servers',
            'Orchestrated site health optimization resulting in Google Page Speed score improvements from low 30s to 80s on mobile and 90s on desktop',
            'Initiated department use of JIRA, and methods from Agile and Scrum methodologies',
            'Extended REST APIs and integrated existing software with 3rd party and custom APIs',
        ]
    },
    {
        company:'Olympusat, Inc.',
        title: 'Frontend Developer',
        dates: {
            start: 'SEPTEMBER 2016',
            end: 'MARCH 2019',
        },
        location: 'WEST PALM BEACH FLORIDA',
        responsibilities: [
            'Maintained, updated and augmented up to 14 corporate B2B and B2C websites to ensure security, functionality and minimal load time',
            'Constructed websites, pages, and UX/UI based on Photoshop designs and user stories created in collaboration with colleagues in business and development capacities for enterprise level websites and SaaS services',
            'Tested and refined new and existing projects for cross-browser compatibility and responsive web design using ES6, PHP and SCSS',
            'Developed frontend UI components using ReactJS and integrated utilizing a LAMP stack and front to back communication leveraging AJAX',
            'Researched, designed, developed and tested custom code solutions with a focus on effectiveness, efficiency and ROI',
        ]
    },
]
export default listJobs.map(
    j => {
        if (!j.dates.end)
            j.dates.end = 'present'
        return j
    }
);