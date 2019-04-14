const statuses = ["alive", "dead", "wight"];

class CharacterInfo {
  constructor({ name, status = statuses[0], imageUrl }) {
    this.name = name;
    this.status = status;
    this.imageUrl = imageUrl;
  }
}

const characters = {
  Jon: new CharacterInfo({
    name: "Jon Snow",
    imageUrl:
      "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/john-snow-1920.jpg/_jcr_content/renditions/cq5dam.web.980.551.jpeg"
  }),
  Dany: new CharacterInfo({
    name: "Daenerys Targaryen",
    imageUrl:
      "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/daenarys-1920.jpg/_jcr_content/renditions/cq5dam.web.980.551.jpeg"
  }),
  Sansa: new CharacterInfo({
    name: "Sansa Stark",
    imageUrl:
      "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/sansa-stark-1920.jpg/_jcr_content/renditions/cq5dam.web.980.551.jpeg"
  }),
  Arya: new CharacterInfo({
    name: "Arya Stark",
    imageUrl:
      "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/arya-stark-1920.jpg/_jcr_content/renditions/cq5dam.web.980.551.jpeg"
  }),
  Bran: new CharacterInfo({
    name: "Bran Stark",
    imageUrl:
      "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/bran-stark-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg"
  }),
  Cersei: new CharacterInfo({
    name: "Cersei Lannister",
    imageUrl:
      "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/cersei-lannister-1920.jpg/_jcr_content/renditions/cq5dam.web.980.551.jpeg"
  }),
  Jaime: new CharacterInfo({
    name: "Jaime Lannister",
    imageUrl:
      "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/jamie-lannister-1920.jpg/_jcr_content/renditions/cq5dam.web.980.551.jpeg"
  }),
  Tyrion: new CharacterInfo({
    name: "Tyrion Lannister",
    imageUrl:
      "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/tyrion-lannister-1920.jpg/_jcr_content/renditions/cq5dam.web.980.551.jpeg"
  }),
  Yara: new CharacterInfo({
    name: "Yara Greyjoy",
    imageUrl:
      "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/yara-greyjoy-1920.jpg/_jcr_content/renditions/cq5dam.web.980.551.jpeg"
  }),
  Theon: new CharacterInfo({
    name: "Theon Greyjoy",
    imageUrl:
      "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/theon-greyjoy-1920.jpg/_jcr_content/renditions/cq5dam.web.980.551.jpeg"
  }),
  Melisandre: new CharacterInfo({
    name: "Melisandre",
    imageUrl:
      "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/melisandre-1920.jpg/_jcr_content/renditions/cq5dam.web.980.551.jpeg"
  }),
  Jorah: new CharacterInfo({
    name: "Jorah Mormont",
    imageUrl:
      "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/jorah-mormont-1920.jpg/_jcr_content/renditions/cq5dam.web.980.551.jpeg"
  }),
  Hound: new CharacterInfo({
    name: "The Hound",
    imageUrl:
      "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/sandor-clegane-1920.jpg/_jcr_content/renditions/cq5dam.web.980.551.jpeg"
  }),
  Mountain: new CharacterInfo({
    name: "The Hound",
    imageUrl:
      "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/4/37/episode-37-03-1920.jpg/_jcr_content/renditions/cq5dam.web.980.551.jpeg"
  })
};

export { characters, statuses };
