const html = require('html-template-tag');

function header(url) {
  return html`
    <div id="header">
      <h1>
        <a class="${url === '/' ? 'selected' : ''}" href="/">
          Backstreet Boys Fan Club</a
        >
      </h1>
      <div>
        <h2>
          <a
            class="${url.startsWith('/members') ? 'selected' : ''}"
            href="/members"
            >Members</a
          >
        </h2>
        <h2>
          <a
            class="${url.startsWith('/discography') ? 'selected' : ''}"
            href="/discography"
            >Discography</a
          >
        </h2>
      </div>
    </div>
  `;
}

function main(url) {
  return html`
    <html>
      <head>
        <link rel="stylesheet" href="/assets/page1.css" />
      </head>
      <body>
        $${header(url)}
        <img
          src="/assets/backstreet_boys_main.jpg"
          alt="Backstreet Boys Main Page"
        />
      </body>
    </html>
  `;
}

function members(members, url) {
  return html`
    <html>
      <head>
        <link rel="stylesheet" href="/assets/page1.css" />
      </head>
      <body>
        $${header(url)}
        <div>
          <ul>
            $${members
              .map(
                (member) => html`
                  <li>
                    <a href="/members/${member.id}"> ${member.name} </a>
                  </li>
                `
              )
              .join('')}
          </ul>
          <img src="/assets/members_page.jpg" alt="Members Page" />
        </div>
      </body>
    </html>
  `;
}

function memberID(info, instruments, url) {
  return html`
    <html>
      <head>
        <link rel="stylesheet" href="/assets/page1.css" />
      </head>
      <body>
        $${header(url)}
        <h2>${info.name}</h2>
        <div>
          <img src="/assets/${info.image}" alt="Members Image" />
          <ul>
            <li>Birthday : ${info.bday}</li>
            <li>
              Favorite Album :
              <a href="/discography/${info.album}"> ${info.title}</a>
            </li>
            <li>
              Instruments :
              ${instruments
                .map((instrument) => instrument.instrument)
                .join(', ')}
            </li>
            <li>${info.bio}</li>
          </ul>
        </div>
      </body>
    </html>
  `;
}

function discography(discography, url) {
  return html`
    <html>
      <head>
        <link rel="stylesheet" href="/assets/page1.css" />
      </head>
      <body>
        $${header(url)}
        <div>
          <ul>
            $${discography
              .map(
                (album) => html`
                  <li>
                    <a href="/discography/${album.id}"> ${album.title}</a> -
                    ${album.year}
                  </li>
                `
              )
              .join('')}
          </ul>
          <img src="/assets/discography_page.jpg" alt="Discography Page" />
        </div>
      </body>
    </html>
  `;
}

function discographyID(album, url) {
  return html`
    <html>
      <head>
        <link rel="stylesheet" href="/assets/page1.css" />
      </head>
      <body>
        $${header(url)}
        <div>
          <h2>${album.title}</h2>
          <img src="/assets/${album.cover}" alt="Album Image" />
          <h3>Release Year : ${album.year}</h3>
        </div>
      </body>
    </html>
  `;
}

module.exports = {
  main,
  members,
  memberID,
  discography,
  discographyID,
  header,
};
