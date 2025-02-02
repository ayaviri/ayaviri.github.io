var AsciiTable = require("ascii-data-table").default
var whoAmI = [
    ["who am i ?"], 
    ["hi ! my name is joshua ayaviri, and i am a recent graduate of computer science from northeastern university. i'm a thoughtful and systematic problem-solver with a year and a half of professional experience outside of my university coursework, and i'm currently looking a new full-time opportunity. feel free to reach out via email or linkedin !"]
]
console.log(AsciiTable.table(whoAmI, 80))
var feelFreeToReachOut = [
    ["feel free to reach out !"],
    ["<a href='mailto:joshuayaviri@gmail.com'>email</a>"],
    ["<a href='https://github.com/ayaviri'>github</a>"],
    ["<a href='https://linkedin.com/in/ayaviri'>linkedin</a>"],
    ["<a href='resume.pdf'>resume</a>"],
]
console.log(AsciiTable.table(feelFreeToReachOut, 120))
var tools = [
    ["these are some of the languages/tools i work with"],
    ["golang | python | java | html | css | typescript | bash"],
    ["databases (postgres, mysql, mongodb) | containerization (docker) | message queues (rabbitmq) | cloud computing (gcp) | search engines (elasticsearch)"],
]
console.log(AsciiTable.table(tools, 80))
var softwareProjects = [
    ["title", "description", "link"],
    ["inferno", "fire response simulation for denver, co. finds optimal configuration for n fire stations. built for hoyahacks 2025", "<a href='https://github.com/ayaviri/inferno'>github</a>"],
    ["maestro", "e-commerce style youtube music download", "<a href='https://github.com/ayaviri/maestro'>github</a>"],
    ["the pound", "dog-themed twitter-style social media platform", "<a href='https://github.com/ayaviri/the-pound'>github</a>"],
    ["luna", "landing page to my father\"s local pizza restaurant, luna pizza", "<a href='https://github.com/ayaviri/luna'>github</a>"],
    ["high phone compute", "distributed machine learning model finetuning framework for mobile. built for calhacks 2024", "<a href='https://github.com/ayaviri/calhacks'>github</a>"],
    ["leicester travel agency", "public bus transit system for rural town of leicester, ma. built for goathacks 2025", "<a href='https://github.com/ayaviri/leicester'>github</a>"]
]
console.log(AsciiTable.table(softwareProjects, 60))
