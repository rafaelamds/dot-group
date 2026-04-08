# dot-group
<img width="1902" height="741" alt="image" src="https://github.com/user-attachments/assets/f445ba95-bd95-4dca-9092-4e436f5ce99f" />

Este repositório contém o teste técnico para <strong>Desenvolvedor Front-end</strong> do time Dot Group. O projeto consiste em uma landing page interativa, desenvolvida com foco em performance, acessibilidade e fidelidade ao layout proposto. =)


# 🚀 Como Rodar o Projeto

Faça o clone do repositório

git clone https://github.com/rafaelamds/dot-group.git

**Aviso Importante:** Como este projeto utiliza as melhores práticas de JavaScript moderno com separação em módulos (`type="module"`), ele **não funcionará corretamente** se o arquivo `index.html` for aberto diretamente pelo navegador (via `file:///`). É estritamente necessário rodar o projeto através de um servidor local (protocolo `http://`).

Para facilitar a avaliação, recomendamos o uso da extensão **Live Server** no Visual Studio Code.

**Passo a passo para instalação e execução:**

1. Abra a pasta do projeto no **VS Code**.
2. Acesse a aba de **Extensões** no menu lateral esquerdo (ou use o atalho `Ctrl+Shift+X` / `Cmd+Shift+X`).
3. Pesquise por **"Live Server"** (criada por Ritwick Dey) e clique em **Install**.
4. Após instalar, abra o arquivo `index.html` no seu editor.
5. Clique com o botão direito do mouse em qualquer lugar do código e selecione **"Open with Live Server"**. 
   *(Alternativamente, você pode clicar no botão **"Go Live"** que aparecerá no canto inferior direito da barra de status do VS Code).*
6. O seu navegador padrão abrirá automaticamente a página no endereço `http://127.0.0.1:5500` com tudo funcionando perfeitamente!


# 🛠️ Decisões Técnicas
A principal diretriz deste projeto foi a independência de frameworks, utilizando o poder do ecossistema moderno do navegador (Modern Web Standards).

HTML Semântico: Utilização rigorosa de tags como header,main,section,footer,details e summary para garantir que a estrutura seja compreensível para motores de busca e tecnologias assistivas.

CSS Moderno (Vanilla): Uso de Flexbox e CSS Grid para o layout, garantindo responsividade total sem a necessidade de bibliotecas externas como Bootstrap.

JavaScript Vanilla (ES6+): Todas as interações (Audio Player customizado, Video Player, lógica de Flip Cards e validação de atividades) foram implementadas do zero para demonstrar domínio da linguagem e manipulação do DOM.

Swiper.js: Única biblioteca externa utilizada (conforme permitido), aplicada na seção de galeria para garantir uma experiência de toque e deslize otimizada para dispositivos móveis.

SVG Optimization: Gráficos e elementos decorativos inseridos via SVG para manter a qualidade visual e reduzir o peso da página.

# ♿ Acessibilidade e Performance
O projeto foi auditado via Lighthouse, atingindo excelentes pontuações:

Acessibilidade: Implementação de atributos aria-label, aria-hidden e aria-live (para feedbacks dinâmicos), além de garantir contraste adequado e navegabilidade via teclado (especialmente nos modais e flip cards).

Performance: Código enxuto, carregamento otimizado de ativos e uso eficiente de CSS para animações, resultando em um carregamento rápido e fluidez na interação.

<img width="460" height="992" alt="image" src="https://github.com/user-attachments/assets/1054c986-7dc3-4679-8552-39aaac3bf88e" />


# 📂 Estrutura do Projeto

A organização dos arquivos segue o padrão de separação de responsabilidades:

```
├── assets/
│   ├── icons/
│   └── images/
│       ├── footer/
│       ├── media-gallery/
│       ├── photo-and-text/
│       └── video/
├── scripts/
│   ├── accordions.js
│   ├── cards-interatives.js
│   ├── discursive-activity.js
│   ├── header.js
│   ├── main.js
│   ├── media-gallery.js
│   ├── media-play.js
│   ├── object-activity.js
│   └── video.js
├── styles/
│   ├── section/
│   │   ├── accordions.css
│   │   ├── cards-interatives.css
│   │   ├── discursive-activity.css
│   │   ├── header.css
│   │   ├── main.css
│   │   ├── media-gallery.css
│   │   ├── media-play.css
│   │   ├── object-activity.css
│   │   └── video.css
│   ├── global.css
│   └── main.css
├── index.html
└── README.md
```
