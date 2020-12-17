class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            "C’est chiant"
            ,"Qui est la plus bonne des princesses ?"
            ,"Tournoi de merde, remboursé !"
            ,"Faut qu’j’aille pisser !	"
            ,"Genre même pas de raquettes ?"
            ,"Je suis bien mieux qu’eux !"
            ,"Y a juste les gradins en 16-bit ?"
            ,"Yahou !"
            ,"On s’emmerde donc bougez-vous !"
        ];
    }
    parle(blabla){
        let ici=this;
        this.$bulle.text(blabla);
        setTimeout(function(){
            ici.$bulle.text("");
        },1500);
    }

    /**
     * Renvoie un mot aléatoire
     * @returns {string}
     */
    get motAleatoire(){
        return this.mots[Math.floor(Math.random() * this.mots.length)];
    }

}
