let answers = {};
const TOTAL_STEPS = 5;

function nextStep(step, data) {
    Object.assign(answers, data);

    const key = Object.keys(data)[0]; 
    const value = data[key];           

    if (typeof gtag === 'function') {
        gtag('event', 'quiz_answer', {
            'question_type': key,
            'answer_content': value,
            'step_number': step - 1
        });
    }

    renderStep(step);
}

function prevStep(step) {
    renderStep(step);
}

function renderStep(step) {
    document.querySelectorAll('.quiz-step').forEach(el => el.style.display = 'none');
    document.getElementById('step-' + step).style.display = 'block';

    const progressPercent = ((step-1) / TOTAL_STEPS) * 100;
    document.getElementById('quiz-progress').style.width = progressPercent + '%';
}

function showResult(data) {
    Object.assign(answers, data);
    document.querySelectorAll('.quiz-step').forEach(el => el.style.display = 'none');
    
    if (typeof gtag === 'function') {
        gtag('event', 'quiz_complete', {
            'answer_days': answers.daysVal,
            'answer_budget': answers.budgetVal,
            'answer_style': answers.styleVal,
            'answer_zermatt': answers.zermattVal,
            'answer_jungfrau': answers.jungfrauVal,
        });
    }

    const progressContainer = document.querySelector('.progress-container');
    if (progressContainer) {
        progressContainer.style.display = 'none';
    }

    document.getElementById('summary-display').innerText = 
        `${answers.days} | ${answers.budget} | ${answers.style} | ${answers.zermatt} | ${answers.jungfrau}`;

    const title = document.getElementById('result-title');
    const text = document.getElementById('result-text');

    let itineraryId = 1; 
    if (answers.budgetVal === '5-') {
        itineraryId = 0
    } else if ((answers.daysVal === 'long')) {
        itineraryId = 7
    } else if (answers.daysVal === 'short') {
        if (answers.zermattVal) {
            itineraryId = answers.jungfrauVal ? 1 : 2; 
        } else {
            itineraryId = 3
        }
    } else if (answers.daysVal === 'mid') {
        if (answers.zermattVal) {
            itineraryId = answers.jungfrauVal ? 4 : 5; 
        } else {
            itineraryId = 6
        }
    } 

    if (answers.budgetVal === '5-'){
        title.innerText = "建議行程：改去日本";
        text.innerText = "開玩笑的，不過五萬可能有點難，加油，請看下面行程";
    } else if (answers.styleVal === 'lazy') {
        title.innerText = "建議方案：Swiss Travel Pass (STP)";
        text.innerText = "追求極致自由，說走就走，車來就上，不想計劃行程細節的人。";
    } else if (answers.styleVal === 'price') {
        title.innerText = "建議方案：半價卡 (Half fare card)";
        text.innerText = "能省則省的計劃狂人，尤其適合行程多的 J人。";
    }
    const calcBtn = document.getElementById('calc-redirect-btn');
    calcBtn.onclick = function() {
        if (typeof gtag === 'function') {
            gtag('event', 'click_calculator', {
                'itinerary_id': itineraryId, 
            });
        }
    };
    calcBtn.href = `https://calculator.swisspro.tw/?itinerary_id=${itineraryId}&from=quiz`;
    calcBtn.innerText = `查看與你喜好相近的「${answers.days}」參考行程`;

    document.getElementById('quiz-result').style.display = 'block';
    document.getElementById('quiz-progress').parentElement.style.display = 'none'; 
}

function resetQuiz() {
    answers = {};
    const progressContainer = document.querySelector('.progress-container');
    if (progressContainer) {
        progressContainer.style.display = 'block';
    }
    
    renderStep(1);
    const progressBar = document.getElementById('quiz-progress');
    if (progressBar) {
        progressBar.style.width = '2%';
    }
}