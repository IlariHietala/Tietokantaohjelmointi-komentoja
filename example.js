//Avaa tietokantayhteys, asenna dotenv ja mysql2.


require('dotenv').config()
const mysql= require('mysql2/promise')

const conf = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
}

connect();

async function connect(){
    try{
        const con = await mysql.createConnection(conf);
        //muodostaa yhteyden
        
        //const [rows]  = await con.execute("SELECT * FROM product");

        const [rows, fields]  = await con.execute("SELECT * FROM product");

        console.log(fields[0]);

        //Luodaan alias productName producs_names tilalle. 'AS' ei ole välttämätön

        //const [rows]  = await con.execute("SELECT * FROM product");
        //Hakee tiedot taulukkoon 'rows'

        //console.log(rows[0].price);
        //Voi hakea taulukon tiettyä indeksiä. Perässä piste notaatiolla pelkän hinnan kysely ekasta indeksistä.

        //console.log(rows);
        //tulostaa taulukkoon 'rows' tallennetut tiedot

        //for (row of rows) {
        //    console.log(row.productName);
        //}
        //for of komennolla löytyy

        //rows.forEach( r => console.log(r.productName) );
        //Lambda lauseke, lennosta tehty anonyymi funktio, joka kutsuu jokaiselle riville (eli r) r.producs name
        //Tuo 'r' on vapaasti keksittävä nimi taulukon ruudulle.


        //const uusiTaulu = rows.map(r => r.productName + ' ' + r.price + '€');
        //Tämmösellä map tempulla voi muokata tulostettavan datan uudenlaiseksi. Lisätään siis välit ja euronmerkit joka ruudulle.
        //const uusiTaulu = rows.map(r => r.productName.length);
        //Tällä haetaan jokaisen tuotteen pituus merkkeinä, mapia käyttämällä

        //const uusiTaulu = rows.filter(r => r.price > 1000);
        //filterillä voi suodattaa tietoja taulusta. Tämä tulostaa tuotteet joiden hinta on alle 1000€.

        //const uusiTaulu = rows.filter( ({product_name}) => product_name.includes('i'));
        //käyttämällä aaltosulkeita voi etsiä saatavasta taulukosta vai tietyn sarakkeen

        //LISÄÄ KOMETOJA LÖYTYY HELVETISTI, ATSI JAVASCRIPS ARRAY TOOLS.

        //await con.execute("INSERT INTO product_category VALUES ('Books', 'Interesting books')");
        //await con.execute("INSERT INTO product_category VALUES ('Books', 'Interesting books')")

        console.log("Connection created!");

    } catch(err){
        console.log("Ei onnistu")
        console.log(err);
    }
}