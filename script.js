function showModal(title, content){
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-content').textContent = content;
    document.getElementById('threat-modal').classList.remove('hidden');
    document.getElementById('threat-modal').classList.add('flex');
}

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('threat-modal').classList.remove('flex');
    document.getElementById('threat-modal').classList.add('hidden');
})

const quizData = [
    {
        question: "What is phishing?",
        options:[
            "A type of firewall",
            "A fake email designed to steal personal info",
            "An antivirus tool",
            "A password manager"
        ],
        answer:1
    },
    {
        question:"Which tool is used to analyze network traffic?",
        options:["Wireshark","Nmap","Metaspoilt","Burp Suite"],
        answer:2
    },
    {
        question: "Ransomware typically ...",
        options:[
            "Monitors key presses",
            "Deletes browser history",
            "Encrypts files for ransom",
            "Scans for open ports",
        ],
        answer: 2
    }
];

let currentQuestion = 0;
function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("quiz-question").textContent = q.question;
    const optionsDiv = document.getElementById("quiz-options");
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, index) =>{
        const btn = document.createElement("button");
        btn.className = "block w-full text-left border px-4 py-2 rounded hover:bg-gray-100";
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });

    document.getElementById("quiz-feedback").textContent = "";
    document.getElementById("next-btn").classList.add("hidden");
}

function checkAnswer(selectedIndex){
    const isCorrect = selectedIndex === quizData[currentQuestion].answer;
    const feedback = document.getElementById("quiz-feedback");
    feedback.textContent = isCorrect ? "Correct!" : "Incorrect!";
    feedback.className = isCorrect ? "text-green-600 font-bold" : "text-red-600 font-bold";
    document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion(){
    currentQuestion++;
    if (currentQuestion < quizData.length){
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = `
        <p class="text-xl font-bold text-green-700">Quiz Complete! Great Job!</p>`;
    }
}

window.onload = () => {
    loadQuestion();
}