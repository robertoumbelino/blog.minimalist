const articles = [
  {
    title: 'Iniciando um projeto com React JS',
    content: `Sed lorem ipsum dolor sit amet nullam consequat feugiat
    consequat magna adipiscing magna etiam amet veroeros. Lorem
    ipsum dolor tempus sit cursus. Sed lorem ipsum dolor sit amet
    nullam consequat feugiat consequat magna adipiscing magna etiam
    amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl
    et nullam lorem ipsum dolor sit amet aliquam...`,
    img:
      'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
  },
  {
    title: 'Criando uma API com GraphQL',
    content: `Sed lorem ipsum dolor sit amet nullam consequat feugiat
    consequat magna adipiscing magna etiam amet veroeros. Lorem
    ipsum dolor tempus sit cursus. Sed lorem ipsum dolor sit amet
    nullam consequat feugiat consequat magna adipiscing magna etiam
    amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl
    et nullam lorem ipsum dolor sit amet aliquam...`,
    img:
      'https://raw.githubusercontent.com/graphql-compose/graphql-compose/master/docs/logo.png'
  },
  {
    title: 'Fazendo animações com CSS 3',
    content: `Sed lorem ipsum dolor sit amet nullam consequat feugiat
    consequat magna adipiscing magna etiam amet veroeros. Lorem
    ipsum dolor tempus sit cursus. Sed lorem ipsum dolor sit amet
    nullam consequat feugiat consequat magna adipiscing magna etiam
    amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl
    et nullam lorem ipsum dolor sit amet aliquam...`,
    img:
      'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png'
  }
]

articles.map(article => {
  const content = `
    <article>
    <header>
      <div>
        <h3>${article.title}</h3>
        <p>${article.content}</p>
      </div>

      <a>
        <img
          src="${article.img}"
        />
      </a>
    </header>

    <div class="footer">
      <ul>
        <li>
          <a>Continue lendo</a>
        </li>
      </ul>
    </div>
    </article>
  `

  document.getElementsByTagName('section')[0].innerHTML += content
})
