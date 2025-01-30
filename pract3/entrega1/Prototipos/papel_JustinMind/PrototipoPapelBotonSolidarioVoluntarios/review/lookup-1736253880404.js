(function(window, undefined) {
  var dictionary = {
    "511c1000-d7b3-40eb-ae15-6c490b71c695": "BuscandoSolicitudesVoluntarios",
    "75ebb295-c756-4b6c-a78e-c7e7d2fe850c": "TareaEndiente",
    "6d824dac-d005-4857-a6af-575baef29ac4": "MenuLobby",
    "c540ae8e-3358-4954-bcc5-51e84d3c8c70": "Login",
    "1c8ed081-8fe7-4087-9564-5aeaddf06cb8": "VerUntuaciones",
    "abb25a34-154f-462a-bdb1-49f5c7f4db55": "MatchVoluntario",
    "4ae151c3-ba75-4ab5-a6dc-e0341d54f81d": "Registro",
    "8686be7b-a979-47bd-b14a-b6a31ee28d8d": "MenuInicioVoluntarioPerfil",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "InicioBienvenida",
    "87cd4425-ba77-4af1-a056-730aa621825e": "MenuInicioVoluntario",
    "988369a3-e52d-4ab4-ab81-f6c1bc58b7ff": "LobbyVistaVoluntario",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);