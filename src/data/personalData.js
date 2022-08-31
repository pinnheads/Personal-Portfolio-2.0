export const about = {
    name: "Utsav Deep",
    employed_as: "Test Automation Engineer",
    description: "Hi, I'm Utsav and I'm currently working as a Test Associate. My current focus is automating tests for functional and end-to-end scenarios to ensure the best user experiences for our client's products. My background is in Computer Science, so I love building things on the side as well. I also like reading tech blogs and learning about new tech in general. Apart from that, I'm currently learning to draw/paint. I'm always looking for a challenging and learning environment where I can apply my skills to solve problems, learn new skills, or grow the ones I already have. Want to get in touch? Go to the contact page or just reach out to me at utsavdeep01@gmail.com"
}

const gitConnectedUrl = 'https://gitconnected.com/v1/portfolio/pinnheads';
export const response = await fetch(gitConnectedUrl)
    .then((data) => data.json())
    .catch((error) => console.log(error));