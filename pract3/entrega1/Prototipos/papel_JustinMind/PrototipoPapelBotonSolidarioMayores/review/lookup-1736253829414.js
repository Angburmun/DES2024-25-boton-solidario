(function(window, undefined) {
  var dictionary = {
    "41764740-4aba-44e9-9895-7cfd36b75ac2": "MenuInicioMayorPerfil",
    "dcae4c2e-f901-4681-ab5c-1e32b0830e2b": "MenuLobbies",
    "50ad16ae-eb27-4f1f-a771-831d67190f26": "SolicitudCancelada",
    "601f8c84-c08c-4780-8317-3392ec54d60a": "TareasPendientesMayor",
    "a6a2d149-cec5-4319-afe3-e55de54c039a": "InicioBienvenida",
    "1d7c7504-1309-4230-abe3-f5469e23f68d": "LobbyVistaMayor",
    "bd8bce73-a251-4c28-be67-a9a9f381966f": "VerEstadoSolicitudesMayor",
    "95a7d6a5-b84f-4629-81a7-fc3c261b3dc0": "CreacionSolicitud",
    "576ace59-45c7-48d5-9711-b5f0df5428e8": "Login",
    "c4696adf-7529-4997-af7b-bc5ccc23619f": "SolicitudCreada",
    "5175daf0-7c74-4b19-ac7a-39421a90cc29": "Registro",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "MenuInicioMayor",
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