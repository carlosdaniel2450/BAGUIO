const modules = {
    1: {
        title: "Módulo 1: Iniciante Absoluto",
        points: [
            { name: "Introdução ao hiragana", content: { type: "video", value: "https://www.youtube.com/embed/6p9Il_j0zjc" } },
            { name: "Vogais (あ, い, う, え, お)", content: { type: "text", value: "As vogais em japonês são a base do hiragana: あ (a), い (i), う (u), え (e), お (o). Pratique a pronúncia e a escrita de cada uma." } },
            { name: "Consoantes com 'k' (か, き, く, け, こ)", content: { type: "text", value: "Aprenda os caracteres com 'k': か (ka), き (ki), く (ku), け (ke), こ (ko)." } },
            { name: "Saudações (こんにちは, おはよう)", content: { type: "text", value: "こんにちは (konnichiwa) = Olá; おはよう (ohayou) = Bom dia." } },
            { name: "Apresentação pessoal (はじめまして)", content: { type: "text", value: "Use はじめまして (hajimemashite) para se apresentar pela primeira vez." } },
            { name: "Números 1-10", content: { type: "text", value: "1: いち (ichi), 2: に (ni), 3: さん (san), etc." } },
            { name: "Expressões de cortesia (ありがとう)", content: { type: "text", value: "ありがとう (arigatou) = Obrigado." } },
            { name: "Prática de escrita do hiragana", content: { type: "text", value: "Escreva os caracteres de hiragana em um caderno." } },
            { name: "Frases simples", content: { type: "text", value: "Exemplo: わたしは [nome] です (watashi wa [nome] desu) = Eu sou [nome]." } },
            { name: "Pronúncia correta", content: { type: "video", value: "https://www.youtube.com/embed/6p9Il_j0zjc" } },
            { name: "Consoantes com 's' (さ, し, す, せ, そ)", content: { type: "text", value: "Aprenda: さ (sa), し (shi), す (su), せ (se), そ (so)." } },
            { name: "Vocabulário básico", content: { type: "text", value: "Palavras como ねこ (neko) = gato, いぬ (inu) = cachorro." } },
            { name: "Introdução ao romaji", content: { type: "text", value: "Romaji é a transcrição do japonês para o alfabeto latino." } },
            { name: "Prática de leitura", content: { type: "text", value: "Leia frases simples em hiragana." } },
            { name: "Revisão do hiragana", content: { type: "text", value: "Revise todos os caracteres aprendidos." } }
        ]
    },
    2: {
        title: "Módulo 2: Iniciante (N5)",
        points: [
            { name: "Introdução ao katakana", content: { type: "text", value: "Katakana é usado para palavras estrangeiras." } },
            { name: "Vogais em katakana", content: { type: "text", value: "ア (a), イ (i), ウ (u), エ (e), オ (o)." } },
            { name: "Katakana com 'n' (ナ, ニ, ヌ, ネ, ノ)", content: { type: "text", value: "Aprenda: ナ (na), ニ (ni), ヌ (nu), ネ (ne), ノ (no)." } },
            { name: "Vocabulário de comida (ラーメン, スシ)", content: { type: "text", value: "Palavras como ラーメン (ramen) e スシ (sushi)." } },
            { name: "Países em katakana", content: { type: "text", value: "Exemplo: アメリカ (Amerika) = América." } },
            { name: "Nomes estrangeiros", content: { type: "text", value: "Escreva seu nome em katakana." } },
            { name: "Prática de escrita do katakana", content: { type: "text", value: "Escreva os caracteres de katakana." } },
            { name: "Leitura de palavras estrangeiras", content: { type: "text", value: "Leia palavras como テレビ (terebi) = televisão." } },
            { name: "Katakana com 't'", content: { type: "text", value: "Aprenda: タ (ta), チ (chi), ツ (tsu), テ (te), ト (to)." } },
            { name: "Vocabulário de tecnologia", content: { type: "text", value: "Palavras como コンピューター (konpyuutaa) = computador." } },
            { name: "Prática de pronúncia", content: { type: "video", value: "https://www.youtube.com/embed/6p9Il_j0zjc" } },
            { name: "Katakana com 'h'", content: { type: "text", value: "Aprenda: ハ (ha), ヒ (hi), フ (fu), ヘ (he), ホ (ho)." } },
            { name: "Palavras comuns em katakana", content: { type: "text", value: "Exemplo: パン (pan) = pão." } },
            { name: "Jogo de identificação", content: { type: "text", value: "Identifique palavras em katakana em um texto." } },
            { name: "Revisão do katakana", content: { type: "text", value: "Revise todos os caracteres de katakana." } }
        ]
    },
    3: {
        title: "Módulo 3: Iniciante Avançado (N5-N4)",
        points: Array(15).fill().map((_, i) => ({
            name: `Ponto ${i + 1}: Em desenvolvimento`,
            content: { type: "text", value: "Conteúdo em desenvolvimento para o Módulo 3." }
        }))
    },
    4: {
        title: "Módulo 4: Intermediário Inicial (N4)",
        points: Array(15).fill().map((_, i) => ({
            name: `Ponto ${i + 1}: Em desenvolvimento`,
            content: { type: "text", value: "Conteúdo em desenvolvimento para o Módulo 4." }
        }))
    },
    5: {
        title: "Módulo 5: Intermediário (N4-N3)",
        points: Array(15).fill().map((_, i) => ({
            name: `Ponto ${i + 1}: Em desenvolvimento`,
            content: { type: "text", value: "Conteúdo em desenvolvimento para o Módulo 5." }
        }))
    },
    6: {
        title: "Módulo 6: Intermediário Avançado (N3)",
        points: Array(15).fill().map((_, i) => ({
            name: `Ponto ${i + 1}: Em desenvolvimento`,
            content: { type: "text", value: "Conteúdo em desenvolvimento para o Módulo 6." }
        }))
    },
    7: {
        title: "Módulo 7: Avançado Inicial (N2)",
        points: Array(15).fill().map((_, i) => ({
            name: `Ponto ${i + 1}: Em desenvolvimento`,
            content: { type: "text", value: "Conteúdo em desenvolvimento para o Módulo 7." }
        }))
    },
    8: {
        title: "Módulo 8: Avançado (N2-N1)",
        points: Array(15).fill().map((_, i) => ({
            name: `Ponto ${i + 1}: Em desenvolvimento`,
            content: { type: "text", value: "Conteúdo em desenvolvimento para o Módulo 8." }
        }))
    },
    9: {
        title: "Módulo 9: Fluência Inicial",
        points: Array(15).fill().map((_, i) => ({
            name: `Ponto ${i + 1}: Em desenvolvimento`,
            content: { type: "text", value: "Conteúdo em desenvolvimento para o Módulo 9." }
        }))
    },
    10: {
        title: "Módulo 10: Fluência Completa",
        points: Array(15).fill().map((_, i) => ({
            name: `Ponto ${i + 1}: Em desenvolvimento`,
            content: { type: "text", value: "Conteúdo em desenvolvimento para o Módulo 10." }
        }))
    }
};

// Carrega o módulo na página module.html
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const moduleId = urlParams.get('id');
    
    if (!moduleId || !modules[moduleId]) {
        console.error(`Módulo ${moduleId} não encontrado.`);
        const contentTitle = document.getElementById('content-title');
        const contentDisplay = document.getElementById('content-display');
        if (contentTitle && contentDisplay) {
            contentTitle.textContent = "Erro";
            contentDisplay.innerHTML = "<p>Módulo não encontrado. Volte à página inicial.</p>";
        }
        return;
    }

    const module = modules[moduleId];
    const titleElement = document.getElementById('module-title');
    const pointsList = document.getElementById('points-list');

    if (titleElement) {
        titleElement.textContent = module.title;
    } else {
        console.error("Elemento com ID 'module-title' não encontrado.");
    }

    if (pointsList) {
        pointsList.innerHTML = ''; // Limpa a lista antes de adicionar
        module.points.forEach((point, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<input type="checkbox" id="point-${index}" onchange="saveProgress(${moduleId}, ${index})"> ${point.name}`;
            li.onclick = () => loadContent(point, index);
            pointsList.appendChild(li);
        });
        loadProgress(moduleId);
    } else {
        console.error("Elemento com ID 'points-list' não encontrado.");
    }
};

// Carrega o conteúdo (vídeo ou texto) ao clicar em um ponto
function loadContent(point, index) {
    const contentTitle = document.getElementById('content-title');
    const contentDisplay = document.getElementById('content-display');
    
    if (!contentTitle || !contentDisplay) {
        console.error("Elementos 'content-title' ou 'content-display' não encontrados.");
        return;
    }

    contentTitle.textContent = point.name;
    if (point.content.type === "video") {
        const height = point.content.height || '400px';
        contentDisplay.innerHTML = `<iframe id="video-${index}" src="${point.content.value}" style="height: ${height};" frameborder="0" allowfullscreen></iframe>`;
    } else if (point.content.type === "text") {
        contentDisplay.innerHTML = `<p>${point.content.value}</p>`;
    } else {
        contentDisplay.innerHTML = `<p>Conteúdo não disponível.</p>`;
    }
}

// Salva progresso no localStorage
function saveProgress(moduleId, pointIndex) {
    try {
        const progress = JSON.parse(localStorage.getItem(`module-${moduleId}`) || '{}');
        progress[pointIndex] = document.getElementById(`point-${pointIndex}`).checked;
        localStorage.setItem(`module-${moduleId}`, JSON.stringify(progress));
    } catch (error) {
        console.error("Erro ao salvar progresso:", error);
    }
}

// Carrega progresso do localStorage
function loadProgress(moduleId) {
    try {
        const progress = JSON.parse(localStorage.getItem(`module-${moduleId}`) || '{}');
        Object.keys(progress).forEach(pointIndex => {
            const checkbox = document.getElementById(`point-${pointIndex}`);
            if (checkbox) {
                checkbox.checked = progress[pointIndex];
            }
        });
    } catch (error) {
        console.error("Erro ao carregar progresso:", error);
    }
}

// Função para começar aprendizado
function startLearning() {
    window.location.href = 'module.html?id=1';
}

// Concluir módulo
function completeModule() {
    alert('🌸 Módulo concluído! おめでとう! 🌸');
    window.location.href = 'index.html';
}