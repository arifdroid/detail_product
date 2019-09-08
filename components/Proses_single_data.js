class Process_single_data{


 fungsi_prosesData(stringhere) {

    
    var finall = '';

    var counter = 0;
    //console.log("\n\n final >> ", stringingred_2.trim())

    //console.log('\n\nFINALLL >> , ')

    var processsplit = stringhere;

    var pattern = processsplit.match(/\s\s[a-z|A-Z|0-9](.*?)\s\s/gi);

    var finalize_ingredient = [];

    var ewg = 0;

    var cir = '';

    var ingredient_is = '';

    var note = [];
    //var 

    //console.log('\n\n YOO \n\n')

    pattern.forEach((el,i)=>{

      //  console.log(i+' contain = ', el)

    })

    //console.log('\n\n BEFORE\n\n')

    pattern.forEach((el, i) => {

        var words = el.trim();
        var testHere = words.charAt(1); // if not found, or single letter  == ''

        if (i == 0) {
            if (testHere == '') {

                if(words.match(/[\d]/i)){
                    ewg = words;

                }else{ //ewg not recorded
                    cir = words
                }

           } else { //b

                //console.log('HERE NIGG')

                ingredient_is = words;

            }
        }else if(i==1){

            if(testHere==''){ // means that, 

                cir=words;  
            }else{

                if(ingredient_is==''){
                     ingredient_is = words;
                }else{


                    note.push(words)
                }

            }



        }else if(i==2){

              if(cir!='' && ewg!=0){

                if(ingredient_is==''){

                    ingredient_is=words
                }else{

                    note.push(words)
                }

              }else{

                note.push(words);
              }      


        }else{

            note.push(words);
        }

        if((i+1)==pattern.length){

            finalize_ingredient.push({"ewg":ewg, "cir":cir, "ingredient":ingredient_is,"note":note})

        }




    });

    return finalize_ingredient;
    
}









}

module.exports = Process_single_data;