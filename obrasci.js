// 1. Napisite modul za brojanje koraka.
// Modul ce se brinuti o povecanju broja koraka.
// a izvana ce se moci pristupiti dvjema metodama modula: 
// walk() i getTotalSteps().
// 2. Exportajte modul iz datoteke.

var brojanjeKoraka = (function () {
    // ToDO: dio koda za povecanje broja koraka

    var koraci = 0;
    function increaseSteps() {
        koraci++;
    }

    return {
        walk: function() {
            increaseSteps();
        },
        getTotalSteps: function () {
            return koraci;
        },
        run: function() {
            koraci += 5;
        },
    };
})();


module.exports = brojanjeKoraka;
