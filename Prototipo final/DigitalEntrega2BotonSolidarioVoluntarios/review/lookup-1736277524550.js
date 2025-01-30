(function(window, undefined) {
  var dictionary = {
    "ceeff81d-a1c0-4b1c-8ed4-18709a9ee0d0": "PlantillaActividad 2",
    "9c946471-96b2-4ee4-94f0-2a22bf2f55ea": "ForoEspecifico",
    "c395cf16-63a0-4205-bad5-45f51f9e20a4": "Puntuaciones",
    "3dd3a598-65d5-4b0a-8a60-3c44dc1260c5": "Match",
    "aab66cfe-97dd-4582-9e9a-e5646b36e90d": "MenuPrincipal 2",
    "e1b4d736-9826-4440-a3f2-0584a33aba36": "Chat",
    "cff16c72-b44f-4bd9-b367-92a908b6b2cd": "Tareas",
    "dd4f6432-472d-4c14-93f3-1d4ac24a4dbc": "Calendario",
    "0fcd67d8-faf1-4193-8056-f40b7c48dde7": "Foros",
    "7d3ed111-a113-4d0a-98bd-4169cbd09c3f": "MenuPrincipal",
    "5f031692-3af3-4991-9311-ac5533130ade": "BuscarSolicitud",
    "cbfd94e5-bd6b-4943-9b10-b2e93e308d84": "Registro",
    "fcb4afe7-87fa-4fdf-b709-d520e26a0564": "Login",
    "fb370a9d-89fe-4e49-b1a8-980b22f4cfd1": "Actividad",
    "9e2fa22b-c69c-40b6-bebf-98f229a6fc27": "PlantillaActividad",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Pantalla de bienvenida",
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