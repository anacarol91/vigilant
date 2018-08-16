var autocomplete;
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicLoading, $state, $ionicHistory, $ionicPopup, IonicClosePopupService) {

  $scope.editData = { nome: 'Arya Stark', user: 'arya@winterfell.got', senha1: 'nymeria', senha2: 'nymeria', placa: 'XYZ-4443' };
  $scope.denunciaData = {endereco: 'Rua Alagoas, 234 - Funcionários'};

  $ionicModal.fromTemplateUrl('templates/modals/infracaoModal.html', {
      scope: $scope,
      animation: 'fade-in'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openInfracao = function() {
      $scope.modal.show();
    };
    $scope.closeInfracao = function() {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
  });

  $ionicModal.fromTemplateUrl('templates/modals/denuncia.html', {
      scope: $scope,
      animation: 'fade-in'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openDenuncia = function() {
      $scope.modal.show();
    };
    $scope.closeDenuncia = function() {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });


  var avatarPopup = null;
  $scope.showAvatar = function() {
    avatarPopup = $ionicPopup.prompt({
        scope: $scope,
        buttons: false,
        templateUrl: 'templates/popups/avatar.html'
   })
  }
  IonicClosePopupService.register(avatarPopup);

  $scope.closeAvatar = function(){
      avatarPopup.close();
  };

  $scope.denunciaAlert = function() {
      var alertPopup = $ionicPopup.alert({
         template: '<p class="popup-text">Sua denúncia foi cadastrada!</p>'
      });

      alertPopup.then(function(res) {
        $scope.closeDenuncia();
      });
   };

  $scope.showPlaca = function() {
    var placaPopup = $ionicPopup.prompt({
        scope: $scope,
        buttons: false,
        templateUrl: 'templates/popups/placa.html'
   })
    IonicClosePopupService.register(placaPopup);

    $scope.closePlaca = function(){
      placaPopup.close();
    };
  }

  $scope.placaAlert = function() {
      $scope.closePlaca();
      var alertPopup = $ionicPopup.alert({
         template: '<p class="popup-text">Alterações efetuadas com sucesso!</p>'
      });
   };

  $scope.home = function() {
        $state.go("app.home", {}, { reload: true });
  };

  $scope.begining = function() {
        $state.go("init.begining", {}, { reload: true });
  };

  $scope.login = function() {
        $state.go("init.login");
  };

  $scope.signup = function() {
        $state.go("init.signup");
  };

  $scope.edit = function() {
        $state.go("app.edit");
  };
  $scope.notifications = function() {
        $state.go("app.notifications");
  };
  $scope.about = function() {
        $state.go("app.about");
  };
  $scope.faq = function() {
        $state.go("app.faq");
  };
  $scope.termos = function() {
        $state.go("app.termos");
  };

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

})

.controller('LoginCtrl', function($scope, $state, $timeout, $ionicHistory, $ionicPopup, IonicClosePopupService) {

  $scope.showForgot = function() {
    var forgotPopup = $ionicPopup.prompt({
        scope: $scope,
        buttons: false,
        templateUrl: 'templates/popups/forgot.html'
   })
    IonicClosePopupService.register(forgotPopup);

    $scope.closeForgot = function(){
      forgotPopup.close();
    };
  }

  $scope.forgotAlert = function() {
      $scope.closeForgot();
      var alertPopup = $ionicPopup.alert({
         template: '<p class="popup-text">E-mail enviado com sucesso!</p>'
      });
   };

  $scope.showPlaca = function() {
    var placaPopup = $ionicPopup.prompt({
        scope: $scope,
        buttons: false,
        templateUrl: 'templates/popups/placa.html'
   })
    IonicClosePopupService.register(placaPopup);

    $scope.closePlaca = function(){
      placaPopup.close();
    };
  }

  $scope.placaAlert = function() {
      $scope.closePlaca();
      var alertPopup = $ionicPopup.alert({
         template: '<p class="popup-text">Seu cadastro foi efetuado com sucesso!</p>'
      });

      alertPopup.then(function(res) {
        $scope.intro();
      });
   };

   $scope.editAlert = function() {
      var alertPopup = $ionicPopup.alert({
         template: '<p class="popup-text">Alterações efetuadas com sucesso!</p>'
      });

      alertPopup.then(function(res) {
        $scope.home();
      });
   };

   $scope.showDelete = function() {
    var deletePopup = $ionicPopup.prompt({
        scope: $scope,
        buttons: false,
        templateUrl: 'templates/popups/delete.html'
   })
    IonicClosePopupService.register(deletePopup);

    $scope.closeDelete = function(){
      deletePopup.close();
    };
  }

  $scope.deleteAlert = function() {
      $scope.closeDelete();
      var alertPopup = $ionicPopup.alert({
         template: '<p class="popup-text">Sentiremos saudades!</p>'
      });

      alertPopup.then(function(res) {
        $scope.begining();
      });
   };


   $scope.home = function() {
        $state.go("app.home", {}, { reload: true });
  };

  $scope.begining = function() {
        $state.go("init.begining", {}, { reload: true });
  };

  $scope.login = function() {
        $state.go("init.login", {}, { reload: true });
  };

  $scope.signup = function() {
        $state.go("init.signup", {}, { reload: true });
  };

  $scope.intro = function() {
        $state.go("intro");
  };

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.loginData = {};
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.home();
    }, 1000);
  };
})

.controller('MapCtrl', function($scope, $ionicLoading, $ionicModal) {
  navigator.geolocation.getCurrentPosition(function (pos) {
    var geocoder = new google.maps.Geocoder;
    var myPos = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

    geocoder.geocode({'location': myPos}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        $scope.endereco = results[0].formatted_address;
      }
    });
  }, function (error) {
    console.log('Unable to get location: ' + error.message);
  });

  $scope.mapCreated = function(map) {

  var markerIcon = {
    url: 'img/marker-yellow.png',
    size: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 50)
  };
  var latLngList = [
    new google.maps.LatLng(-19.938471, -43.996789),
    new google.maps.LatLng(-19.938707, -44.003441),
    new google.maps.LatLng(-19.938436, -44.000298),
    new google.maps.LatLng(-19.930792, -43.978132),
    new google.maps.LatLng(-19.930540, -43.979376),
    new google.maps.LatLng(-19.929057, -43.977906),
  ];

  angular.forEach(latLngList, function(value, key) {
    var marker = new google.maps.Marker(
    {
      position: value,
      icon: markerIcon,
      url: "#/app/infracao?id=" + (++key)
    });
    google.maps.event.addListener(marker, 'click', function() {
      window.location.href = this.url;
    });
    marker.setMap(map);
  });
  $scope.map = map;
};

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      var geocoder = new google.maps.Geocoder;
      var myPos = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

      $scope.map.setCenter(myPos);
      geocoder.geocode({'location': myPos}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          $scope.endereco = results[0].formatted_address;
        }
      });

      $scope.loading = $ionicLoading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };

  $ionicModal.fromTemplateUrl('templates/modals/search.html', {
      scope: $scope,
      animation: 'fade-in'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openSearch = function() {
      $scope.modal.show();

      var input = /** @type {!HTMLInputElement} */ document.getElementById('address-input');
      var options = {
        componentRestrictions: {country: 'br'}
      };

      autocomplete = new google.maps.places.Autocomplete(input, options);

      autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        $scope.modal.hide();
        if(typeof place !== 'undefined'){
          $scope.endereco = place.formatted_address;
          $scope.map.setCenter(place.geometry.location);
        }
      });

    };
    $scope.closeSearch = function() {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });

})

.controller('PlaylistsCtrl', function($scope) {

  $scope.notifications = [
    { title: 'Você foi denunciado por estacionar em vaga de deficiente/idoso!', id: 1 },
    { title: 'Você foi denunciado por estacionar em lugar proibido!', id: 2 },
    { title: 'Você foi denunciado por estacionar ocupando mais de uma vaga!', id: 3 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('NotificationsCtrl', function($scope) {
  var infractions = [
    {id: 1, photoURL: 'img/carro1.jpg', detail: 'Veículo estacionado em local proibido',
    address: 'Rua Alagoas, 345 - Funcionários', datetime: '17/10/2016 - 12:16'},
    {id: 2, photoURL: 'img/carro2.jpg', detail: 'Veículo estacionado em vaga de deficiente/idoso',
     address: 'Rua Quilombo, 16 - Vila Oeste', datetime: '17/10/2016 - 12:16'},
    {id: 3, photoURL: 'img/carro3.jpg', detail: 'Veículo estacionado próximo a esquina',
    address: 'Av. Amazonas, 7675 - Nova Gameleira', datetime: '19/10/2016 - 14:44'},
    {id: 4, photoURL: 'img/carro4.jpg', detail: 'Veículo estacionado em cima da calçada',
    address: 'Rua Alpes, 173 - Nova Suíssa', datetime: '27/10/2016 - 06:11'},
    {id: 5, photoURL: 'img/carro5.jpg', detail: 'Veículo ocupando mais de uma vaga',
    address: 'Rua José Candido Alencar, 659 - Nova Suíssa', datetime: '28/10/2016 - 16:02'},
    {id: 6, photoURL: 'img/carro6.jpg', detail: 'Veículo estacionado em frente a uma garagem',
    address: 'Rua Oswaldo Cruz, 249 - Nova Suíssa', datetime: '30/10/2016 - 09:33'}
  ];

    var url = window.location.href;

    var name = "id".replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    var id = decodeURIComponent(results[2].replace(/\+/g, " "));

    angular.forEach(infractions, function(value, key) {
      if(value.id == id) {
        $scope.photoURL = value.photoURL;
        $scope.detail = value.detail;
        $scope.address = value.address;
        $scope.datetime = value.datetime;
      }
    });

});
