let answers = {};
const TOTAL_STEPS = 5;

function nextStep(step, data) {
    Object.assign(answers, data);

    const key = Object.keys(data)[0]; 
    const value = data[key];       
    const directLink = document.getElementById('direct-link-btn');    

    if (step > 0) {
        directLink.style.display = 'none';
    } else {
        directLink.style.display = 'inline-block';
    }

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

//     document.getElementById('summary-display').innerText = 
//         `${answers.days} | ${answers.budget} | ${answers.style} | ${answers.zermatt} | ${answers.jungfrau}`;

//     const title = document.getElementById('result-title');
//     const text = document.getElementById('result-text');

    let itineraryId = '1'; 
    if (answers.budgetVal === '5-') {
        itineraryId = '0'
    } else if ((answers.daysVal === 'long')) {
        itineraryId = '7'
    } else if (answers.daysVal === 'short') {
        if (answers.zermattVal) {
            itineraryId = answers.jungfrauVal ? '1' : '2'; 
        } else {
            itineraryId = '3'
        }
    } else if (answers.daysVal === 'mid') {
        if (answers.zermattVal) {
            itineraryId = answers.jungfrauVal ? 'fd5b65b6' : 'd5f19e8b'; 
        } else {
            itineraryId = '6'
        }
    } 
    const loader = document.getElementById('high-end-loader');
    loader.style.display = 'flex';
    loader.classList.add('fade-in');
    setTimeout(() => {
        window.location.href = `https://calculator.swisspro.tw/?itinerary_id=${itineraryId}&from=quiz`;
    }, 800);
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