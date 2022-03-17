function nbvoyel(str){
    let vowels=['a','e','i','u','o'];
    let nbvoyels=0;
    for(let char of str){
        if(vowels.includes(char)){
            nbvoyels++;
        }
    }
return nbvoyels;
}
    function longest(str){
    // Split the string into array=
        let words = str.split(" ");
        let longestword = "";
        console.log(words);



      for(let i=0;i<words.length;i++) {
          let individualword = words[i].replace(/[\W_]+/g, ' ');
          //console.log(individualword);

          if (individualword.length > longestword.length) {
             longestword = individualword;

          } else

          if (individualword.length === longestword.length) {
              if (nbvoyel(individualword) > nbvoyel(longestword)) {
                  let longestword2 = individualword;
                  return longestword2;
              }


          }


      }


      console.log("//longestword");
      return longestword;

}


    console.log(longest("Smart people learn from everything and everyone, average people from their experience, experiencaoui  experiencaouie  stupid people already, have all the answers"))
