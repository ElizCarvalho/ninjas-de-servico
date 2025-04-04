# Como Contribuir para os Ninjas de Serviço

Obrigado pelo interesse em contribuir para o nosso projeto! Este documento fornece instruções detalhadas sobre como você pode adicionar seu perfil ou atualizar informações existentes.

## Adicionando um Novo Ninja

Você tem duas opções para adicionar seu perfil ao nosso repositório:

### Opção 1: Via Issue (Recomendado para iniciantes)

1. Acesse a aba "Issues" do repositório
2. Clique em "New Issue"
3. Selecione o template "Adicionar Novo Ninja"
4. Preencha todas as informações solicitadas
5. Submeta a issue
6. Um mantenedor irá adicionar suas informações ao projeto

### Opção 2: Via Pull Request

1. Faça um fork do repositório
2. Clone o fork para seu computador local

   ```text
   git clone https://github.com/seu-usuario/ninjas-de-servico-1.git
   cd ninjas-de-servico-1
   ```

3. Crie uma nova branch com seu nome

   ```text
   git checkout -b add-ninja-seunome
   ```

4. Adicione suas informações seguindo o modelo abaixo em:
   - README.md (versão em português)
   - README.en.md (versão em inglês)

5. Faça commit das alterações:

   ```text
   git add README.md README.en.md
   git commit -m "feat: add desenvolvedor João Silva"
   ```

6. Envie para seu fork:

   ```text
   git push origin add-ninja-seunome
   ```

7. Abra um Pull Request através da interface do GitHub

## Modelo para Adicionar Novo Ninja

Use o seguinte modelo para adicionar seu perfil:

```markdown
### 🥷 SEU NOME ![Experiência](https://img.shields.io/badge/Experiência-X%2B%20Anos-brightgreen)

**Bio**
_"Sua bio profissional aqui..."_

**Nível & Localização**
![Seu Nível](https://img.shields.io/badge/-Seu%20Nível-2F4F4F?style=flat)
![Remoto/Presencial](https://img.shields.io/badge/-Remoto-8A2BE2?style=flat)
![Sua Localização](https://img.shields.io/badge/-Sua%20Localização-gray?style=flat)

**Redes**
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/seu-perfil/)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/seu-usuario)

**Principais Tecnologias**
![Tecnologia1](https://img.shields.io/badge/-Tecnologia1-cor?style=flat&logo=tecnologia1&logoColor=white)
...

**Frameworks & Ferramentas**
![Framework1](https://img.shields.io/badge/-Framework1-cor?style=flat&logo=framework1&logoColor=white)
...

**DevOps & Infraestrutura**
...

**Idiomas**
🇧🇷 ![Português](https://img.shields.io/badge/-Português%20(Nativo)-009739?style=flat)
🇺🇸 ![Inglês](https://img.shields.io/badge/-Inglês%20(Básico)-1B4B94?style=flat)
...

**Recomendação**
_"Uma recomendação profissional sobre você..."_
```

## Badges de Função

Adicione uma badge identificando sua função principal:

- Desenvolvimento: `![Desenvolvedor](https://img.shields.io/badge/-Desenvolvedor-512BD4?style=flat)`
- Produto: `![Product Manager](https://img.shields.io/badge/-Product%20Manager-00C7B7?style=flat)`
- UX/UI: `![UX/UI Designer](https://img.shields.io/badge/-UX%2FUI%20Designer-FF3E00?style=flat)`
- QA: `![QA](https://img.shields.io/badge/-QA-4D91F7?style=flat)`
- DevOps: `![DevOps](https://img.shields.io/badge/-DevOps-0078D6?style=flat)`
- Gestão: `![Tech Lead](https://img.shields.io/badge/-Tech%20Lead-8A2BE2?style=flat)`

## Adaptando para Perfis Não-Técnicos

Caso seu perfil não seja de desenvolvimento, adapte as seções da seguinte forma:

### Exemplos de Badges para Habilidades Não-Técnicas

**Para Product Managers:**
- ![Product Discovery](https://img.shields.io/badge/-Product%20Discovery-FFC107?style=flat)
- ![User Research](https://img.shields.io/badge/-User%20Research-7B68EE?style=flat)
- ![Agile](https://img.shields.io/badge/-Agile-009688?style=flat)
- ![Gestão de Stakeholders](https://img.shields.io/badge/-Gestão%20de%20Stakeholders-FF6F00?style=flat)

**Para UX/UI:**
- ![Figma](https://img.shields.io/badge/-Figma-F24E1E?style=flat&logo=figma&logoColor=white)
- ![Design System](https://img.shields.io/badge/-Design%20System-7B1FA2?style=flat)
- ![User Testing](https://img.shields.io/badge/-User%20Testing-4285F4?style=flat)

**Para Gestão:**
- ![Liderança](https://img.shields.io/badge/-Liderança-0097A7?style=flat)
- ![Mentoria](https://img.shields.io/badge/-Mentoria-9370DB?style=flat)
- ![OKRs](https://img.shields.io/badge/-OKRs-4682B4?style=flat)

## Criando Badges

Você pode criar badges para suas tecnologias usando o seguinte formato:

```text
![Nome](https://img.shields.io/badge/-Nome-Cor?style=flat&logo=nome&logoColor=white)
```

Exemplos:

- Go: `![Go](https://img.shields.io/badge/-Go-00ADD8?style=flat&logo=go&logoColor=white)`
- Python: `![Python](https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white)`
- JavaScript: `![JavaScript](https://img.shields.io/badge/-JavaScript-FFA500?style=flat&logo=javascript&logoColor=black)`

Para obter cores e logos corretos, consulte:

- [Simple Icons](https://simpleicons.org/) - Para os nomes dos logos
- [Shields.io](https://shields.io/) - Para criar badges personalizados

## Atualizando um Perfil Existente

Se você já tem seu perfil no repositório e deseja atualizá-lo:

1. Siga os mesmos passos da "Opção 2: Via Pull Request"
2. Em vez de adicionar um novo perfil, atualize as informações existentes
3. Faça commit com uma mensagem descritiva:

   ```text
   git commit -m "docs: update tecnologias de João Silva"
   ```

## Diretrizes de Contribuição

- Mantenha o formato consistente com os perfis existentes
- Evite adicionar informações falsas ou exageradas
- Limite sua bio a aproximadamente 500 caracteres
- Inclua tanto a versão em português quanto em inglês
- Quando possível, mantenha a ordem alfabética dos perfis
- Use badges para tecnologias, ferramentas e informações de nível

## Obtendo Ajuda

Se você tiver dúvidas ou precisar de ajuda:

1. Abra uma issue com o label "question"
2. Entre em contato com um dos mantenedores através do LinkedIn

Agradecemos sua contribuição para tornar nossa comunidade de Ninjas de Serviço ainda mais forte!

---

## English Instructions

[English instructions are available here](./CONTRIBUTING.en.md)
