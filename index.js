// https://www.npmjs.com/package/request-promise

// https://stackoverflow.com/questions/49132220/iterate-through-an-html-table-using-cheerio

const ProsesData = require('./components/Proses_single_data'); 

var request = require('request-promise');
var cheerio = require('cheerio');

const url = 'https://www.skincarisma.com/products/cosrx/salicylic-acid-daily-gentle-cleanser';

const url2 = 'https://www.skincarisma.com/products/cosrx/salicylic-acid-daily-gentle-cleanser/ingredient_list#info-section';

(async () => {

    //const response2 = await request(url);
    //const response3 = await request(url);

    const response3 = await request(url2);

    let $ = cheerio.load(response3);


    //var splitthem = response2.match(/semibold dotted-underline ml-1">(.*?)<\/span>/g)

    //console.log('split them ', splitthem)

    //var splitthem_2 = response2.match(/class="fa(.*?)font-095"><\/i>/g)

    //const lookk = $('table[class="table table-sm mt-4 ingredients-table"]>tbody>tr>td[class="align-middle"]');

    const table_ingredient = $('table[class="table table-sm mt-4 ingredients-table"]>tbody>tr');

    _kiv = () =>{

    //var ingredientTest = response3.match(/<td class="align-middle">(.*?)<br\/>\n<small>/g)

    /////////////


    ///////////


    // splitthem.forEach((element, i) => {

    //     var rem = element.replace("semibold dotted-underline ml-1\">", "").replace("</span>", "")

    //     console.log('here >  ' + i, rem)

    // });

    // console.log('\n\n')


    // console.log('\n\n')


    //console.log('nigga >> ', lookk.text())

    // var ingredient = []
    // var i = 0;



    // lookk.toArray().map((item) => {

    //     var check_0 = i % 2;

    //     if (check_0 == 0) {

    //         ingredient.push($(item).text().trim())



    //     }

    //     i++;

    // });

    // console.log('\n\ningred List >> ', ingredient.length+'\n\n')
    }

    ///////////////////////// real work 


    var stringingred_2 = '';

    var stringIngred_Array =[];

    console.log('\n\n')


    table_ingredient.each((i, element) => {

        var stringingred_3 = $(element).children('.align-middle').text();

        if (i == 22) {
            console.log('table >> ', $(element).children('.align-middle').text() + '\n')

           stringingred_2 = $(element).children('.align-middle').text();

        }

        stringIngred_Array.push(stringingred_3);

    })


    //console.log('stringingred_2 >> ', stringingred_2.trim())

    console.log('\n\n array LOOKUP > ',stringIngred_Array)

    console.log('\n\n')

    ////

    var stringIngred_Array_2 =[];

    //remove \n in every array first 
    stringIngred_Array.forEach((el,i)=>{

        //var stringhere = '';

        while(el.includes("\n")){

            el = el.replace("\n","");

        }

        //stringhere = el;

        stringIngred_Array_2.push(el)

    }) //finish remove \n

    // NOW OBJECTIFY

    var final_Object = [];

    var proses_data = new ProsesData;


    stringIngred_Array_2.forEach(el=>{

        var objectGot = [];

        objectGot = proses_data.fungsi_prosesData(el); 


        final_Object.push(objectGot);
        

    });


    console.log('\n\n\n ..........................')


    console.log('FINAL >> LENGTH :'+final_Object.length)

    console.log('\n')

    for(var i=0; i<6;i++){

        console.log('\ni :'+i+ ' ,, object is = '+ JSON.stringify(final_Object[i])+'\n')

    }


    ////////////////

    // var finall = '';

    // var counter = 0;

    // while (stringingred_2.includes("\n")) {

    //     stringingred_2 = stringingred_2.replace("\n", "");

    // }

    // //console.log("\n\n final >> ", stringingred_2.trim())

    // console.log('\n\nFINALLL >> , ')

    // var processsplit = stringingred_2;

    // var pattern = processsplit.match(/\s\s[a-z|A-Z|0-9](.*?)\s\s/gi);

    // var finalize_ingredient = [];

    // var ewg = 0;

    // var cir = '';

    // var ingredient_is = '';

    // var note = [];
    // //var 

    // console.log('\n\n YOO \n\n')

    // pattern.forEach((el,i)=>{

    //     console.log(i+' contain = ', el)

    // })

    // console.log('\n\n BEFORE\n\n')

    // pattern.forEach((el, i) => {

    //     var words = el.trim();
    //     var testHere = words.charAt(1); // if not found, or single letter  == ''

    //     if (i == 0) {
    //         if (testHere == '') {

    //             if(words.match(/[\d]/i)){
    //                 ewg = words;

    //             }else{ //ewg not recorded
    //                 cir = words
    //             }

    //        } else { //b

    //             console.log('HERE NIGG')

    //             ingredient_is = words;

    //         }
    //     }else if(i==1){

    //         if(testHere==''){ // means that, 

    //             cir=words;  
    //         }else{

    //             if(ingredient_is==''){
    //                  ingredient_is = words;
    //             }else{


    //                 note.push(words)
    //             }

    //         }



    //     }else if(i==2){

    //           if(cir!='' && ewg!=0){

    //             if(ingredient_is==''){

    //                 ingredient_is=words
    //             }else{

    //                 note.push(words)
    //             }

    //           }else{

    //             note.push(words);
    //           }      


    //     }else{

    //         note.push(words);
    //     }

    //     if((i+1)==pattern.length){

    //         finalize_ingredient.push({"ewg":ewg, "cir":cir, "ingredient":ingredient_is,"note":note})

    //     }




    // })

    // console.log('\n\n\n\n\n\n ')
    // console.log('>>>>>>>>>>>>>>>>>>>>>')

    //console.log('FINALL >>' + JSON.stringify(finalize_ingredient))




})();