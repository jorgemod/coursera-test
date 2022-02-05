describe('menucategories', function () {

  var menucategories;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    // aqui jalamos nuestro modulo del src code
    module('MenuCategoriesApp');

    // gracias a este metodo del inject podemos traer nuestros artifacts del src code
    inject(function ($injector) {
      menucategories = $injector.get('MenuCategoriesService');
      // esa variable es un mock para un servicio
      $httpBackend = $injector.get('$httpBackend');
      ApiBasePath = $injector.get('ApiBasePath');
    });
  });

  it('should return categories list', function() {
    // nuestro $httpBackend es un mock del servicio real y aqui lo obligamos a que responda de una cierta forma
    $httpBackend.whenGET(ApiBasePath + '/categories.json').respond(['Lunch', 'Dessert']);
    // ahora disparamos el verdadero servicio y ya usamos la data que definimos previamente
    menucategories.getMenuCategories().then(function(response) {
      expect(response.data).toEqual(['Lunch', 'Dessert']);
    });
    $httpBackend.flush();
  });

});
