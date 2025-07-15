function showModal(title, content){
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-content').textContent = content;
    const modal = document.getElementById('threat-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
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
        options:["Nmap","Wireshark","Metaspoilt","Burp Suite"],
        answer: 1
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
    },
    {
        question: "Which protocol is used to encrypt web traffic?",
        options: ["HTTP", "FTP", "HTTPS", "DNS"],
        answer: 2
      },
      {
        question: "What does a firewall do?",
        options: [
          "Scans for viruses",
          "Encrypts files",
          "Filters incoming and outgoing traffic",
          "Monitors employee productivity"
        ],
        answer: 2
      },
      {
        question: "Which of these is a form of two-factor authentication (2FA)?",
        options: [
          "Password only",
          "Security question",
          "SMS verification code",
          "Username and password"
        ],
        answer: 2
      },
      {
        question: "What is social engineering?",
        options: [
          "Coding to exploit software",
          "Using AI to make fake images",
          "Manipulating people to gain confidential info",
          "Fixing bugs in security software"
        ],
        answer: 2
      },
      {
        question: "Which command-line tool scans for open ports?",
        options: ["Snort", "Metasploit", "Nmap", "Wireshark"],
        answer: 2
      },
      {
        question: "Which of the following is a secure password?",
        options: [
          "123456",
          "password1",
          "Welcome2024",
          "P@55w0rd!&^"
        ],
        answer: 3
      },
      {
        question: "Which cybersecurity concept means 'least access needed to do a job'?",
        options: ["Zero Trust", "Principle of Least Privilege", "Access Control List", "Role Escalation"],
        answer: 1
      }
];

let currentQuestion = 0;
let score = 0;

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

function checkAnswer(selectedIndex) {
    const isCorrect = selectedIndex === quizData[currentQuestion].answer;
    const feedback = document.getElementById("quiz-feedback");
    feedback.textContent = isCorrect ? "✅ Correct!" : "❌ Incorrect!";
    feedback.className = isCorrect ? "text-green-600 font-bold mt-2" : "text-red-600 font-bold mt-2";
  
    const optionButtons = document.querySelectorAll("#quiz-options button");
    optionButtons.forEach((btn, i) => {
      btn.disabled = true;
      btn.classList.add("opacity-50", "cursor-not-allowed");
  
      
      if (i === quizData[currentQuestion].answer) {
        btn.classList.add("bg-green-100");
      } else if (i === selectedIndex) {
        btn.classList.add("bg-red-100");
      }
    });
  
    if (isCorrect) score++;
    document.getElementById("next-btn").classList.remove("hidden");
  }
  

  function showFinalResults() {
    let badge = "";
    if (score === quizData.length) {
      badge = "🎖️ Cybersecurity Master Badge";
    } else if (score >= quizData.length * 0.66) {
      badge = "🏅 Intermediate Threat Spotter";
    } else {
      badge = "🔰 Beginner Defender";
    }
  
    localStorage.setItem("quizScore", score);
    const previousScore = localStorage.getItem("quizScore");
    if (previousScore) {
      console.log(`Last quiz score: ${previousScore}`);
    }
  
    document.getElementById("quiz-container").innerHTML = `
      <div class="text-center">
        <p class="text-xl font-bold text-blue-800 mb-2">✅ You scored ${score}/${quizData.length}</p>
        <p class="text-lg mb-4">Badge Earned: <span class="font-bold">${badge}</span></p>
        <p class="mt-4 text-sm text-gray-500">Refresh the page to try again!</p>
      </div>
    `;
  }
  

function badgeImage(badgeName) {
    if (badgeName.includes("Master")) return "badge-master.png";
    if (badgeName.includes("Intermediate")) return "badge-intermediate.png";
    return "badge-beginner.png";
    
  }
  

function nextQuestion(){
    currentQuestion++;
    if (currentQuestion < quizData.length){
        loadQuestion();
    } else {
        showFinalResults();
    }
}



window.onload = () => {
    loadQuestion();
    console.log("Image path:", "assets/" + badgeImage(badge));


}