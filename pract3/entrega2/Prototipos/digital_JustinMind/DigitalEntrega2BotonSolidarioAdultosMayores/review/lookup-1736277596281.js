(function(window, undefined) {
  var dictionary = {
    "4f26bab1-285f-41dd-8120-1203a575c3cc": "Puntuaciones",
    "c050ec12-2fbc-4ab5-8f7c-681293a0026d": "Login",
    "53a09c87-7dca-4676-bd11-aba421870ed1": "Tarea",
    "9ceb181f-705f-45fd-9d4e-a4ff7f819438": "Registro",
    "5d377116-6f79-4c26-a8a1-3dc269112d64": "PlantillaActividad2",
    "5153fbc7-f8d5-4fed-8673-c0ac38b0b502": "Chat",
    "bf869436-946c-4f16-9ac6-641ebaa8a797": "ForoEspecifico",
    "80514093-5cc2-421c-a5bf-f5a2ec622e55": "CrearSolicitud",
    "a3848334-1c09-4b63-914a-09fde30b6cc2": "MenuPrincipal",
    "36b3b1b4-355c-4804-901e-2005af0caf40": "Solicitud",
    "0b0b7a63-8cf8-4061-bcf4-b06e63dc8613": "PlantillaActividad",
    "8b97c94f-750a-473f-a6ce-cad67f6b50c3": "Actividades",
    "85f0884d-06b2-4e80-884b-6cc33ca8b160": "Foros",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Pantalla de bienvenida",
    "75fff242-18ea-46d5-8e16-6af106234e96": "Calendario",
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