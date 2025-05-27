import { fileURLToPath } from "url"

// Escreva seu código aqui!
let professora = 'Lana'
const minhaVariável = 'Aquela '+ professora + ' legal'
console.log(minhaVariável)

const Variáveldois = "Minha amiga se chama" + professora
console.log(Variáveldois)

let idade = 'Quantos anos vc tem ?'
let resposta = 'tenho 19 anos'
const frase = ' pergunta:' + idade +  resposta 
console.log(frase)

interface Pacco {
    garrafa : string;
    capacidade : number;
    cor : string;
    tampa : boolean;

}
let pacco:Pacco = {garrafa : 'termica',
    capacidade : 800,
    cor : 'ciano',
    tampa : true
};
console.log(pacco)

//Pacco.garrafa ´´$/

interface saladeaula {
    diciplina : string;
    alunos : number;
    horas : number;
    arcondicionado : boolean;
}
let sexta: saladeaula = {
    diciplina : ' fup ',
    alunos : 25,
    horas : 2 ,
    arcondicionado : true ,

}
console.log(sexta)

interface twitter {
    accounts : number;
    pfp:boolean;
    user : string;
    darkmode :boolean;

}
let app : twitter ={
    accounts : 3 ,
    pfp: true ,
    user: ' sasunaru',
    darkmode : false ,

}
console.log(app)

interface game {
    tipo : string;
    participantes : number;
    multiplayer : boolean;
    online : boolean;

}

let mobile : game = {
    tipo: 'simulaçao',
    participantes : 5,
    multiplayer : true,
    online : true,
}
console.log (mobile)

enum MesesDoAno {
    Janeiro,
    Fevereiro,
    Março,
    Abril,
    Maio,
    Junho,
    Agosto,
    Setembro,
    Outubro,
    Novembro,
    Dezembro,
}
let meses : MesesDoAno = MesesDoAno.Fevereiro;
console.log(meses);

let sobremesa : number| string ;
sobremesa = 8;
sobremesa = sobremesa + ' chocolate'
console.log(sobremesa)

let computer : boolean | string;
computer = true;
computer = computer + ' white'
console.log (computer)

function SToN (text : number | string ) {
    if (typeof text === 'string') {
        console.log (text.length)
    }
}
SToN ('casa')
SToN ('mariane')
SToN ('sobral')


function media (nota) {
    if (nota >= 7) {
        console.log ('Aprovado!')
    } else {
        console.log ('Reprovado' )
    }
}

media (5)
