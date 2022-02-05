describe("OddEvenGenerator", function() {
  var randomNumGenerator8;
  var randomNumGenerator3;
// este before each se dispara cada vez antes del siguiente "it"
  beforeEach(function() {

    // esto es un mock test pues esa funcion existe en otro lado pero aqui hacemos que siempre regrese un valor
    // esperado para poder testear
    randomNumGenerator8 = function(to, from) {
      return 8;
    };
    randomNumGenerator3 = function(to, from) {
      return 3;
    };

  });

  it("should produce an odd number", function() {
    var result = getRandomOddOrEven1to10("odd", randomNumGenerator3);
    expect(result).toEqual(3);
  });

  xit("should produce an even number", function() {
    var result = getRandomOddOrEven1to10("even", randomNumGenerator8);
    expect(result).toEqual(8);
  });
});
