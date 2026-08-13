const capitaoAmerica = {
    nome: 'Steve Rogers',
    codinome: 'Capitão América',
    armaPrincipal: 'Escudo Americano',
    armaSecundaria: '',
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function () {
        return 'Nome do personagem:' + this.nome + '/n'
        + 'Codinome do personagem:' + this.codinome + '/n'
        + 'Arma principal:' + this.armaPrincipal +  '/n'
        + 'Arma secundária:' + this.armaSecundaria + '/n'
        + ' Nivel de força' + this.forca + '/n'
        + 'Nivel de velocidade' + this.velocidade + '/n'
        + 'Nivel de resistencia' + this.resistencia
    } 
}    
const homemAranha = {
    nome: 'Peter Parker',
    codinome: 'Homem Aranha',
    armaPrincipal: 'Lançador teias',
    armaSecundaria: 'Sentido Aranha',
    velocidade: 90,
    forca: 80,
    resistencia: 80,
    descricao: function () {
        return 'Nome do personagem:' + this.nome + '/n'
        + 'Codinome do personagem:' + this.codinome + '/n'
        + 'Arma principal:' + this.armaPrincipal +  '/n'
        + 'Arma secundária:' + this.armaSecundaria + '/n'
        + ' Nivel de força' + this.forca + '/n'
        + 'Nivel de velocidade' + this.velocidade + '/n'
        + 'Nivel de resistencia' + this.resistencia
    } 
} 
const thor = {
    nome: 'Peter Parker',
    codinome: 'Thor',
    armaPrincipal: 'Mjolnir',
    armaSecundaria: 'Rompe-Tormentas',
    velocidade: 100,
    forca: 80,
    resistencia: 68,
    descricao: function () {
        return 'Nome do personagem:' + this.nome + '/n'
        + 'Codinome do personagem:' + this.codinome + '/n'
        + 'Arma principal:' + this.armaPrincipal +  '/n'
        + 'Arma secundária:' + this.armaSecundaria + '/n'
        + ' Nivel de força' + this.forca + '/n'
        + 'Nivel de velocidade' + this.velocidade + '/n'
        + 'Nivel de resistencia' + this.resistencia
    } 
} 

const hulk = {
    nome: 'Bruce Banner',
    codinome: 'Hulk',
    armaPrincipal: 'Força',
    armaSecundaria: '',
    velocidade: 40,
    forca: 95,
    resistencia: 91,
    descricao: function () {
        return 'Nome do personagem:' + this.nome + '/n'
        + 'Codinome do personagem:' + this.codinome + '/n'
        + 'Arma principal:' + this.armaPrincipal +  '/n'
        + 'Arma secundária:' + this.armaSecundaria + '/n'
        + ' Nivel de força' + this.forca + '/n'
        + 'Nivel de velocidade' + this.velocidade + '/n'
        + 'Nivel de resistencia' + this.resistencia
    } 
} 

const gavigod = {
    nome: 'Clint',
    codinome: 'Gavião Arqueiro, Gavigod',
    armaPrincipal: 'Força',
    armaSecundaria: '',
    velocidade: 100,
    forca: 100,
    resistencia: 100,
    descricao: function () {
        return 'Nome do personagem:' + this.nome + '/n'
        + 'Codinome do personagem:' + this.codinome + '/n'
        + 'Arma principal:' + this.armaPrincipal +  '/n'
        + 'Arma secundária:' + this.armaSecundaria + '/n'
        + ' Nivel de força' + this.forca + '/n'
        + 'Nivel de velocidade' + this.velocidade + '/n'
        + 'Nivel de resistencia' + this.resistencia
    } 
} 
const homemFerro = {
    nome: 'Tony Stark',
    codinome: 'Gavião Arqueiro, Gavigod',
    armaPrincipal: 'Armadura',
    armaSecundaria: 'Inteligência',
    velocidade: 85,
    forca: 75,
    resistencia: 40,
    descricao: function () {
        return 'Nome do personagem:' + this.nome + '/n'
        + 'Codinome do personagem:' + this.codinome + '/n'
        + 'Arma principal:' + this.armaPrincipal +  '/n'
        + 'Arma secundária:' + this.armaSecundaria + '/n'
        + ' Nivel de força' + this.forca + '/n'
        + 'Nivel de velocidade' + this.velocidade + '/n'
        + 'Nivel de resistencia' + this.resistencia
    } 
} 



const thanos = {
    nome: 'Thanos',
    codinome: 'Titã Louco',
    armaPrincipal: 'Joias do infinito',
    armaSecundaria: '',
    velocidade: 50,
    forca: 95,
    resistencia: 95,
    descricao: function () {
        return 'Nome do personagem:' + this.nome + '/n'
        + 'Codinome do personagem:' + this.codinome + '/n'
        + 'Arma principal:' + this.armaPrincipal +  '/n'
        + 'Arma secundária:' + this.armaSecundaria + '/n'
        + ' Nivel de força' + this.forca + '/n'
        + 'Nivel de velocidade' + this.velocidade + '/n'
        + 'Nivel de resistencia' + this.resistencia
    } 
} 

const personagens = [capitaoAmerica, homemAranha, thor, hulk, gavigod, homemFerro, thanos];
for (const i of personagens){
    console.log (personagens());
}