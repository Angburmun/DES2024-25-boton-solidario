(function(window, undefined) {
  var dictionary = {
    "d922d821-54d4-4ba8-b5b9-b4252eb58132": "Login",
    "a3d1b145-739d-4819-a0aa-d76ff62dce17": "Chat",
    "3984c832-3548-41b1-b83b-fd03de14155e": "Buscar solicitud",
    "61500238-cb2f-4995-97c7-7f4e1c36be94": "Calendario",
    "3ea7a6a5-7b2c-4dd0-9708-f06ca94ccc9c": "MenuPrincipal",
    "7fe4362a-4f05-43c1-aadd-46409341b757": "Foros",
    "130b7092-219e-44fc-ab56-c2622f20aae5": "Registro",
    "f63a2d7d-ba36-4359-9f66-ed67c5c61836": "Tareas",
    "ca66c259-a6f4-489c-8be1-11f9ad7e9262": "Actividad",
    "a927dce7-97fc-461d-ad1f-dc5361df1a65": "MenuPrincipal 2",
    "bd22c40b-becd-4307-b69a-baa702e9cd28": "Match",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "InicioBienvenida",
    "5a91ba92-e53a-47e0-ace6-c730e2eb9a63": "PlantillaActividad",
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