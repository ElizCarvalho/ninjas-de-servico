#!/usr/bin/env node

const fs = require('fs');
const content = fs.readFileSync(process.argv[2], 'utf8');

// Verificações básicas
const checks = [
  { name: "Cabeçalho ninja", regex: /###\s🥷\s.*!/g },
  { name: "Bio", regex: /\*\*Bio\*\*[\s\S]*?_\".*\"_/g },
  { name: "Nível & Localização", regex: /\*\*Nível & Localização\*\*[\s\S]*?!\[.*\]\(/g },
  { name: "Badges formatadas corretamente", regex: /!\[(.*?)\]\(https:\/\/img\.shields\.io/g },
  { name: "Links funcionais", regex: /\[!\[(.*?)\]\(.*?\)\]\(http/g },
  { name: "Seção de recomendação", regex: /\*\*Recomendação\*\*[\s\S]*?_\".*\"_/g }
];

console.log("Verificando perfil em:", process.argv[2]);
checks.forEach(check => {
  const matches = content.match(check.regex) || [];
  console.log(`✓ ${check.name}: ${matches.length > 0 ? 'OK' : 'FALHA'}`);
});

// Adicionando verificações específicas
const extraChecks = [
  { name: "Badge de função presente", regex: /!\[(Desenvolvedor|Developer|Product Manager|UX\/UI|QA|DevOps|Tech Lead)\]/g },
  { name: "Bio não excede 500 caracteres", test: () => {
    const bioMatch = content.match(/\*\*Bio\*\*[\s\S]*?_\"(.*?)\"_/);
    if (bioMatch && bioMatch[1]) {
      const bioLength = bioMatch[1].length;
      return bioLength <= 500 ? 'OK' : `FALHA - ${bioLength} caracteres`;
    }
    return 'N/A';
  }},
  { name: "Sem linhas de placeholder", test: () => {
    const placeholders = content.match(/\.\.\./g) || [];
    return placeholders.length === 0 ? 'OK' : `FALHA - ${placeholders.length} encontrados`;
  }}
];

console.log("\nVerificações adicionais:");
extraChecks.forEach(check => {
  if (check.regex) {
    const matches = content.match(check.regex) || [];
    console.log(`✓ ${check.name}: ${matches.length > 0 ? 'OK' : 'FALHA'}`);
  } else if (check.test) {
    console.log(`✓ ${check.name}: ${check.test()}`);
  }
});

// Sugestões de melhoria
console.log("\nSugestões de melhoria:");
const suggestions = [
  { name: "Adicionar mais redes sociais", regex: /\*\*Redes\*\*[\s\S]*?(\[!\[.*?\]\(.*?\)\]\(.*?\))/g, min: 2 },
  { name: "Adicionar mais detalhes nos idiomas", regex: /\*\*Idiomas\*\*[\s\S]*?!\[.*?\]\(/g, min: 2 }
];

suggestions.forEach(suggestion => {
  const matches = content.match(suggestion.regex) || [];
  if (matches.length < suggestion.min) {
    console.log(`→ ${suggestion.name}`);
  }
});

console.log("\nVerificação concluída!"); 